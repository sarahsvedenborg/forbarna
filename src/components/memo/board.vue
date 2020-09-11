<template>
  <div>
    <h1>Finn parene!</h1>
    <MemoMenu v-if="cards == null" :setsMetadata="setsMetadata" :selectSet="selectSet" />
    <div v-else>
      <div class="panel">
      <div v-if="!won">
      <div class="boardWrapper">   
        <Card v-for="(card, i) in cards" :key="i" :card="card" :pairCheck="pairCheck"></Card>
          <p class="footer">Par funnet: {{ pairsFoundCounter }}</p>
      </div>
    </div>
    <VictoryMessage v-else message="Du fant alle parene!"/>
    </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card";
import MemoMenu from "./MemoMenu";
import VictoryMessage from "../shared/VictoryMessage";
import { sets } from "./sets.js";
import { getSetsMetadata } from "./sets.js";
import { SetTypeEnum } from "../../common/enums.js";
import { shuffle} from "../../utils.js";

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

export default {
  name: "Board",
  components: { Card, MemoMenu, VictoryMessage },
  data() {
    return {
      setsMetadata: getSetsMetadata(),
      selectedSet: null,
      cards: null,
      cardsInPair: null,
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
            buildCards.push(new CardClass(currentSet.values[i][0], i, i + "a"));
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
        this.won = true;
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
    },
  }
};
</script>

<style scoped>
h1 {
  color: var(--primary-color-light);
}

.panel{
  background-color: var(--primary-color-light);
  width: 80%;
  margin: 0 auto;
  box-shadow: 0px 1px 7px 0px #888;
  margin-bottom: 30px;
  padding: 40px 20px 50px 20px;
}

.boardWrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
}

.footer {
  position: absolute;
  bottom: -49px;
  right: -22px;
   font-weight: bold;
  margin: 0px 20px 10px 20px;
  color: var(--primary-color-dark);
}
</style>