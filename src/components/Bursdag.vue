<template>
  <div>
    <h2>Mortens bursdagsmemo</h2>
    <div v-if="!won">
      <p>Par funnet: {{ pairsFoundCounter }}</p>
      <div class="boardWrapper">
        <Card v-for="(card, i) in cards" :key="i" :card="card" :pairCheck="pairCheck"></Card>
      </div>
      <!-- <button @click="shuffleTest">Shuffle</button> -->
    </div>
    <div class="message" v-else>
      <h1>Gratulerer med dagen!</h1>
      <img src="/img/golden_crown.jpg" />
      <h3>Bursdagskos fra Svedenborgene</h3>
    </div>
  </div>
</template>

<script>
import Card from "../components/memo/Card";
import { SetTypeEnum } from "../common/enums.js";

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

const cardSet = {
  type: SetTypeEnum.DIFFERENT,
  name: "Bursdag",
  cardsInPair: 2,
  values: [
    ["Pappa leder med", "begeistring"],
    ["Mortegutt bygger", "hytter"],
    ["Farfar fisker", "ørret"],
    ["Morten er gift med", "Tina"],
    ["Bestefar slurper i seg", "vaniljesaus"],
    ["Fattern har bursdag", "i dag"],
    ["Far har to", "barn"],
    ["Padre de Familias spiller", "Dominion"],
    ["Svigerfar liker ikke", "pulverkaffe"]
  ]
};

export default {
  name: "Board",
  components: { Card },
  data() {
    return {
      selectedSet: null,
      cards: this.initializeCards(),
      cardsInPair: 2,
      pairsFoundCounter: 0,
      faceUpCards: [],
      won: false
    };
  },
  methods: {
    selectSet(setName) {
      this.selectedSet = setName;
      this.initializeCards(setName);
    },
    initializeCards() {
      let currentSet = cardSet;
      let buildCards = [];
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
      shuffle(buildCards);
      return buildCards;
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
          this.won = true;
        }, 500);
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
  margin: 0 auto;
  width: 800px;
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

h1 {
  font-size: 50px;
}

h3 {
    padding: 20px;
  font-size: 30px;
}

img {
    width: 30%;
}

@media screen and (max-width: 450px) {
  img {
    width: 200px;
  }
  h1 {
    font-size: 40px;
  }

  h3 {
    font-size: 25px;
  }
  .message {
    margin-top: 4em;
}
.boardWrapper {
    width: 100%;
}
}
</style>