<template>
  <div>
    <h2>Finn parene!</h2>
    <div class="menu" v-if="cards == null">
      <p>Hva slags par vil du finne?</p>
      <button v-for="name in setNames" :key="name" @click="selectSet(name)">{{ name }}</button>
    </div>
    <div v-else>
      <p>Par funnet: {{ pairsFoundCounter }}</p>
      <div class="boardWrapper">
        <Card v-for="(card, i) in cards" :key="i" :card="card" :pairCheck="pairCheck"></Card>
      </div>
      <!-- <button @click="shuffleTest">Shuffle</button> -->
    </div>
  </div>
</template>

<script>
import Card from "./Card";
import { sets } from "./sets.js";
import { getSetNames } from "./sets.js";
import { SetTypeEnum } from "../../common/enums.js";

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
      cardsInPair: null,
      pairsFoundCounter: 0,
      faceUpCards: []
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
      this.cardsInPair = currentSet.cardsInPair;
      let buildCards = [];
      switch (currentSet.type) {
        case SetTypeEnum.DIFFERENT:
          for (
            let pairIndex = 0;
            pairIndex < currentSet.values.length;
            pairIndex++
          ) {
            for (
              let cardIndex = 0;
              cardIndex < currentSet.values[pairIndex].length;
              cardIndex++
            ) {
              buildCards.push(
                new CardClass(
                  currentSet.values[pairIndex][cardIndex],
                  pairIndex,
                  pairIndex + ":" + cardIndex
                )
              );
            }
          }
          break;
        case SetTypeEnum.IDENTICAL:
          for (let i = 0; i < currentSet.values.length; i++) {
            buildCards.push(new CardClass(currentSet.values[i][0], i, i + "a")); //Skal [0] være hardkodet eller er det best med en nøstet for-løkke?
            buildCards.push(new CardClass(currentSet.values[i][0], i, i + "b"));
          }
          break;
      }
      shuffle(buildCards);
      this.cards = buildCards;
    },
    pairCheck(card) {
      if (this.faceUpCards.length == this.cardsInPair) {
        this.closeVisibleCards();
      }
      this.faceUpCards.push(card);
      if (this.faceUpCards.length == this.cardsInPair) {
        for (let i = 0; i < this.faceUpCards.length - 1; i++) {
          if (!this.faceUpCards[i].isEqualTo(card)) {
            return;
          }
        }
        this.pairFound();
      }
    },
    pairFound() {
      for (let i = 0; i < this.faceUpCards.length; i++) {
        for (let j = 0; j < this.cards.length; j++) {
          if (this.faceUpCards[i].isEqualTo(this.cards[j])) {
            const vueInstance = this;
            setTimeout(() => {
              vueInstance.cards[j].isFound = true;
            }, 250);
          }
        }
      }
      this.pairsFoundCounter++;
      this.faceUpCards = [];
      this.checkWin();
    },
    checkWin() {
      if (this.pairsFoundCounter * this.cardsInPair == this.cards.length) {
        setTimeout(() => {
          if (confirm("Gratulerer! Du har vunnet! Spille igjen?")) {
            this.reset();
          } else {
            this.$router.push("/");
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
    },
    closeVisibleCards() {
      for (let i = 0; i < this.faceUpCards.length; i++) {
        this.faceUpCards[i].isFaceUp = false;
      }
      this.faceUpCards = [];
    }
  }
};
</script>

<style scoped>
.menu {
  font-size: larger;
}

.boardWrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.menu button {
  font-size: small;
  margin: 5px;
  border-radius: 17px;
  padding: 10px 5px;
  width: 100px;
  text-transform: uppercase;
  border: 1px solid black;
  background-color: white;
  cursor: pointer;
}
</style>