<template>
  <div>
    <h2>Nytt sett med kort</h2>
    <div class="newDeckTopBar">
     <div class="inputDeckName">
            <label for="deckName">Navn på sett</label>
            <input id="deckName" type="text" v-model="name" />
          </div>
          <button class="confirmButton" @click="saveCards" :disabled="!necessaryInformation"></button>
          </div>

<!--     <Tabs :title="'test tittel'" :openTabProp="openTab">
      <template v-slot:tab1> -->
        <div class="stepWrapper">
        <form class="newDeckForm" v-if="editingBasicInfo">
         <!--  <div class="inputElement">
            <label for="deckName">Navn på sett</label>
            <br />
            <input id="deckName" type="text" v-model="name" />
          </div> -->
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
           <div class="proceedButton" @click="editingBasicInfo = False" v-if="necessaryInformation">
            <img src="/img/ArrowDown.svg" />
          </div>
        </form>
          </div>
<!--       </template>
      <template v-slot:tab2> -->
        <div class="stepWrapper" v-if="!editingBasicInfo">
          <div class="cardValuesTable">
            <table>
              <tr v-for="i in numPairs" :key="i">
                <td class="rowHeading">Par {{ i }}</td>
                <td v-for="j in Number(cardsInPair)" :key="j+'a'">
                  <input :placeholder="'Verdi på kort ' + j" v-model="cards[i-1][j-1]" type="text" />
                </td>
              </tr>
            </table>
          </div>
          <button class="confirmButton" @click="saveCards" :disabled="!necessaryInformation"></button>
        </div>
<!--       </template>
    </Tabs> -->
  </div>
</template>

<script>
import { addSet } from "../memo/sets.js";
import { SetTypeEnum } from "../../common/enums.js";
//import Tabs from "../shared/UI/Tabs.vue";

export default {
/*   components: {
    Tabs
  }, */
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
      numPairs: 10, //Dette er bare et vilkårlig tall. Alle par må ikke fylles ut, men det går ikke an å lage flere enn disse nå. Hva burde default være?
      typeEnums: SetTypeEnum,
      editingBasicInfo: true,
      openTab: 1
    };
  },
  computed: {
    necessaryInformation() {
      return this.name != "" && this.type != "";
    },
    cards() {
      return new Array(this.numPairs)
        .fill(0)
        .map(() => new Array(this.cardsInPair).fill([]));
    }
  },
  watch: {
    type: function(val) {
      if (val == SetTypeEnum.IDENTICAL) {
        this.cardsInPair = 1;
      } else {
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
      this.setCreated()
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
  }
};
</script>

<style scoped>
.newDeckTopBar {
  display: flex;
  justify-content: space-between;
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

/* .proceedButton img:hover {
  transform: translate(0px, 3px) scale(1.3, 1.3);
  transition: transform 1s;
} */

.proceedButton img {
  height: inherit;
  transform: rotate(-90deg)
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
  border-radius: 10px;
  border: 1px solid gray;
}

.confirmButton {
  background-color: #29b6f6;
  border-radius: 15px;
  padding: 0.75em;
  color: white;
  border: 0px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
      margin: 10px 0px 20px 0px;
}

.confirmButton::after {
  content: "Lagre kort";
}

.confirmButton:disabled {
  background-color: grey;
  opacity: 0.7;
}

.confirmButton:disabled:hover::after {
  content: "Du må fylle inn nødvendig informasjon før du kan lagre kort.";
}

.rowHeading {
  font-weight: bold;
}
</style>