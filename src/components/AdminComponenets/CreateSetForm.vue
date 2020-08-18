<template>
  <div>
    <h2>Nytt sett med kort</h2>
    <div class="newDeckTopBar">
      <div class="inputDeckName">
        <label for="deckName">Navn på sett</label>
        <input id="deckName" type="text" v-model="name" />
      </div>
      <button class="confirmButton" @click="saveCards" :disabled="!necessaryInformation">Lagre kort</button>
    </div>
    <div class="stepWrapper" v-if="editingBasicInfo">
      <form class="newDeckForm">
        <div class="inputElement">
          <label>Er kortene i et par like eller forskjellige?</label>
          <br />
          <input type="radio" v-model="type" :value="typeEnums.IDENTICAL" />Like
          <input type="radio" v-model="type" :value="typeEnums.DIFFERENT" />Forskjellige
        </div>
        <div class="inputElement">
          <label for="cardsInPair">Antall kort i et "par"?</label>
          <br />
          <input
            id="cardsInPair"
            type="number"
            min="2"
            max="3"
            v-model="cardsInPair"
            :disabled="type == typeEnums.IDENTICAL"
          />
        </div>
        <div
          class="proceedButton"
          @click="editingBasicInfo = false"
          :style="setupInformation ? 'visibility: visible' : 'visibility: hidden'"
        >
          <font-awesome-icon :icon="['fas','arrow-right']" :style="{color: '#29b6f6'}" />
        </div>
      </form>
    </div>
    <div class="stepWrapper" v-else>
      <div class="cardValuesTable">
        <table>
          <CardPairInput :cardsInPair="Number.parseInt(cardsInPair)" :addCardPair="addCardPair" />
          <tr v-for="i in cards.length" :key="i">
            <td>Par {{ i }}</td>
            <td v-for="j in Number(cardsInPair)" :key="j+'a'">
              <input v-model="cards[i-1][j-1]" type="text" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { addSet } from "../memo/sets.js";
import { SetTypeEnum } from "../../common/enums.js";
import CardPairInput from "./CardPairInput";

export default {
  components: {
    CardPairInput
  },
  props: {
    setCreated: {
      type: Function
    }
  },
  data() {
    return {
      name: "",
      type: "",
      cardsInPair: 2,
      cards: [],
      typeEnums: SetTypeEnum,
      editingBasicInfo: true,
      openTab: 1
    };
  },
  computed: {
    setupInformation() {
      return this.type != "";
    },
    necessaryInformation() {
      return this.name != "" && this.setupInformation;
    }
  },
  watch: {
    type: function(val) {
      if (val == SetTypeEnum.IDENTICAL) {
        this.cardsInPair = 1;
      } else if (val != SetTypeEnum.IDENTICAL && this.cardsInPair == 1) {
        this.cardsInPair = 2;
      }
    }
  },
  methods: {
    saveCards(e) {
      e.preventDefault;
      addSet({
        type: this.type,
        name: this.name,
        cardsInPair: this.type == SetTypeEnum.IDENTICAL ? 2 : this.cardsInPair,
        values: this.stripEmptyCards()
      });
      this.setCreated();
    },
    stripEmptyCards() {
      let cardsInSet = [];
      for (let pairIndex = 0; pairIndex < this.cards.length; pairIndex++) {
        let pairIsValid = true;
        for (
          let cardIndex = 0;
          cardIndex < this.cards[pairIndex].length;
          cardIndex++
        ) {
          if (typeof this.cards[pairIndex][cardIndex] !== "string") {
            pairIsValid = false;
          }
        }
        if (pairIsValid) {
          cardsInSet.push(this.cards[pairIndex]);
        }
        pairIsValid = true;
      }
      return cardsInSet;
    },
    addCardPair(cardPair) {
      const deepCopy = JSON.parse(JSON.stringify(cardPair));
      this.cards.push(deepCopy);
    }
  }
};
</script>

<style scoped>
.newDeckTopBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.newDeckForm {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  font-size: larger;
}

.inputElement {
  margin: 1em;
}

.stepWrapper {
  box-shadow: 0px 5px 10px 1px #ccc;
  float: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0em 3em;
  min-height: 70vh;
}

.proceedButton {
  margin-top: 1em;
  margin-bottom: 2em;
  width: 25px;
  height: 25px;
  padding: 10px;
  border-radius: 50%;
  border: 2px solid #29b6f6;
  cursor: pointer;
  transform: scale(1, 1);
  transition: all 0.5s;
}

.proceedButton:hover {
  transform: scale(1.5, 1.5);
  transition: all 1s;
}

.proceedButton img {
  width: inherit;
  object-fit: contain;
  transform: scale(1, 1);
  transition: transform 0.5s;
}

.proceedButton img {
  height: inherit;
  transform: rotate(-90deg);
}

.cardValues {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.cardValuesTable {
  margin-top: 2em;
}

.cardValuesTable table {
  margin: 0 auto;
}

.cardValues div {
  display: flex;
  flex-direction: column;
}

input {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 15px;
  padding: 5px 10px;
  margin: 10px;
  border-radius: 2em;
  border: 1px solid gray;
}

input:focus {
  outline: none;
  border-radius: 2em;
  border: 1px solid lightskyblue;
  box-shadow: inset 0px 0px 6px 1px lightskyblue;
}

.confirmButton {
  background-color: #29b6f6;
  border-radius: 2em;
  padding: 5px 10px;
  color: white;
  border: 0px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  height: 2em;
}

.confirmButton:disabled {
  background-color: grey;
  opacity: 0.7;
}

.rowHeading {
  font-weight: bold;
}

.hintButton {
  display: flex;
  flex-direction: column;
}

.hidden {
  visibility: hidden;
}
</style>