<template>
  <div>
    <h2>Finn parene!</h2>
    <div v-if="cards == null">
      <p>Hva slags par vil du finne?</p>
      <button v-for="name in setNames" :key="name" @click="selectSet(name)">{{ name }}</button>
    </div>
    <div v-else>
      <p>Par funnet: {{ pairsFoundCounter }}</p>
      <div class="boardWrapper">
        <Card
          v-for="(card, i) in cards"
          :key="i"
          :card="card"
          :pairFound="pairFound"
          :pairCheck="pairCheck"
        ></Card>
      </div>
      <button @click="shuffleTest">Shuffle</button>
    </div>
  </div>
</template>

<script>
import Card from "./Card";
import { sets } from "./sets.js";
import { getSetNames } from "./sets.js";

class CardClass {
  constructor(value, comparator, key) {
    this.value = value;
    this.comparator = comparator;
    this.isFaceUp = false;
    this.isFound = false;
    this.key = key;
  }
  isEqualTo = secondCard => {
    return this.comparator == secondCard.comparator;
  };
}

const shuffle = array => {
  /*let shuffledArray = []
    let randomIndex = Math.floor(Math.random()*array.length)

    shuffledArray.push(array[randomIndex])
    array.splice(randomIndex, 1)
    console.log("array", array)*/

  //From stackoverflow
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export default {
  name: "Board",
  components: { Card },
  data() {
    return {
      setNames: getSetNames(),
      selectedSet: null,
      cards: null,
      pairsFoundCounter: 0,
      visibleCards: []
    };
  },
  methods: {
    selectSet(setName) {
      this.selectedSet = setName;
      this.initializeCards(setName);
    },
    initializeCards(setName) {
      let currentSet = null;
      for (let set in sets) {
        if (sets[set].name == setName) {
          currentSet = sets[set];
          break;
        }
      }
      let buildCards = [];
      let pairCounter = 0;
      switch (currentSet.type) {
        case "different":
          //refactor traversal
          for (let i = 0; i < currentSet.values.length; i++) {
            buildCards.push(
              new CardClass(
                currentSet.values[i],
                pairCounter,
                pairCounter % 2 == 0 ? pairCounter + "a" : pairCounter + "b"
              )
            );
            if (i % 2 != 0) pairCounter++;
          }
          shuffle(buildCards);
          this.cards = buildCards;
          break;
        case "identical":
          for (let i = 0; i < currentSet.values.length; i++) {
            buildCards.push(new CardClass(currentSet.values[i], i, i + "a"));
            if (i % 2 != 0) pairCounter++;
            buildCards.push(new CardClass(currentSet.values[i], i, i + "b"));
          }
          shuffle(buildCards);
          this.cards = buildCards;
          break;
      }
    },
    pairCheck(card) {
      card.isFaceUp = !card.isFaceUp;
      if (card.isFaceUp && this.visibleCards.length == 0) {
        this.visibleCards.push(card);
      } else if (card.isFaceUp && this.visibleCards.length == 1) {
        this.visibleCards.push(card);
        if (this.visibleCards[0].isEqualTo(card)) {
          this.pairFound();
        }
      } else {
        for (let i = 0; i < this.visibleCards.length; i++) {
          this.visibleCards[i].isFaceUp = false;
        }
        this.visibleCards = [];
        this.visibleCards.push(card);
      }
    },
    pairFound() {
      for (let i = 0; i < this.visibleCards.length; i++) {
        for (let j = 0; j < this.cards.length; j++) {
          if (this.visibleCards[i].isEqualTo(this.cards[j])) {
            const vueInstance = this;
            setTimeout(() => {
              vueInstance.cards[j].isFound = true;
            }, 250);
          }
        }
      }
      this.pairsFoundCounter++;
      this.visibleCards = [];
      this.checkWin();
    },
    checkWin() {
      if (this.pairsFoundCounter * 2 == this.cards.length) {
        setTimeout(() => {
          //HVA ER BEST SYNTAX?
          /*const reset = confirm("Gratulerer! Du har vunnet! Spille igjen?");
          if (reset) {
            this.reset();
          }*/
          if (confirm("Gratulerer! Du har vunnet! Spille igjen?")) {
            this.reset();
          }
        }, 300);
      }
    },
    reset() {
      this.cards = null;
      this.pairsFoundCounter = 0;
    },
    shuffleTest() {
      /*let arrayCopy = this.cards;
      for(let i = 0; i < arrayCopy.length; i++){
        let randomIndex = Math.floor(Math.random()*(arrayCopy.length-i) + i)
        arrayCopy.unshift(arrayCopy.splice([randomIndex], 1)) 
        console.log("randomIndex", randomIndex)
    }*/
      /* let currentIndex = 0;
      while (currentIndex < arrayCopy.length) {
        let randomIndex = Math.floor(
          Math.random() * (arrayCopy.length - i) + i
        );
        arrayCopy.unshift(arrayCopy.splice([randomIndex], 1));
        currentIndex++;
      }*/
    }
  }
};
</script>

<style scoped>
.boardWrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

button {
    margin: 5px;
    border-radius: 17px;
    padding: 10px 5px;
    width: 100px;
    text-transform: uppercase;
    border: 1px solid black;

}
</style>