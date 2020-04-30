<template>
  <div>
    <h2>Lag nytt sett med kort til memory-spillet</h2>
    <h3>Steg 1: Informasjon om settet</h3>
    <form class="newDeckForm" v-if="!necessaryInformation">
      <div class="inputElement">
        <label for="deckName">Navn på nytt sett</label>
        <br />
        <input id="deckName" type="text" v-model="name" />
      </div>
      <div class="inputElement">
        <label>Skal kortene i et par være like eller forskjellige?</label>
        <br />
        <input type="radio" v-model="type" value="identical" />Like
        <input type="radio" v-model="type" value="different" />Forskjellige
      </div>
      <div class="inputElement">
        <label for="cardsInPair">Antall kort i et "par"?</label>
        <br />
        <input id="cardsInPair" type="number" min="2" max="3" v-model="cardsInPair" />
      </div>
    </form>
    <!--       <button class="proceedButton" /><br> -->

 <!--    <div class="basicInfoSummary" v-else>
      <span>Edit</span>
      <strong>{{ name }}</strong> har
      <strong>{{ type == 'identical' ? 'identiske' : 'forskjellige'}}</strong> par med
      <strong>{{ cardsInPair }}</strong> kort i hvert "par"
    </div> -->
    <h3>Steg 2: Fyll inn kortverdiene i settet</h3>
    <div class="cardValuesTable" v-if="true">
      <!--    <h3>Fyll inn kortverdiene i settet {{ name }}</h3> -->
      <table>
        <tr v-for="i in numPairs" :key="i">
          <td class="rowHeading">Par {{ i }}</td>
          <td v-for="j in Number(cardsInPair)" :key="j+'a'">
            <input :placeholder="'Verdi på kort ' + j" v-model="cards[i-1][j-1]" type="text" />
          </td>
        </tr>
      </table>
    </div>
    <button class="confirmButton" @click="saveCards" v-if="necessaryInformation">Lagre kort</button>
    <div>
      ---for testing---
      <p>Settets navn: {{ name }}</p>
      <p>Par i settet er: {{ type }}</p>
      <p>Hvert "par" i settet besår av: {{ cardsInPair }} kort</p>
      <table>
        <tr v-for="(row, i) in cards" :key="i">
          <td v-for="(cell, j) in cards[i]" :key="j">{{ cards[i][j] }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { addSet } from "./memo/sets.js";
export default {
  data() {
    return {
      name: "",
      type: "",
      cardsInPair: 2,
      cards: new Array(10).fill(0).map(() => new Array(2).fill("")), //Shold use numPairs and cardsInPair instead. Or put this is computed, but that does not work to attacj v-model to.
      numPairs: 3,
    };
  },
  computed: {
    necessaryInformation() {
      return this.name != "" && this.type != "" && this.cardsInPair != 0;
    }
    /* cards() {
        return new Array(this.numPairs).fill(0).map(() => new Array(this.cardsInPair).fill(""))
    } */
  },
  methods: {
    saveCards(e) {
      e.preventDefault;
       addSet({
        type: this.type,
        name: this.name,
        cardsInPair: this.cardsInPair,
        values: this.cards
      }); 
    },
  }
};
</script>

<style scoped>
.newDeckForm {
  display: flex;
  flex-direction: column;
  width: 70%;
  justify-content: center;
  margin: 0 auto;
}

.inputElement {
  margin: 1em;
}

.proceedButton {
  width: 30px;
  height: 30px;
  /*  border-radius: 50%; */
  border: 0px;
  padding: 20px;
  background-color: white;
  color: yellow;
  background-image: url("/img/ArrowIcon.svg");
  background-size: cover;
}

.proceedButton img {
  height: inherit;
}

.basicInfoSummary {
  position: relative;
  border: 2px solid #29b6f6;
  width: 80%;
  padding: 1em;
  border-radius: 10px;
  margin: 30px auto;
  /*    animation-name: fadeIn;
  animation-duration: 2s; */
}

.basicInfoSummary span {
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
  font-size: 12px;
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
  /* box-shadow: none; */
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
}

.rowHeading {
  font-weight: bold;
}

/* @keyframes fadeIn {
  from {opacity: 0;}
  to {opacity:1;}
} */
</style>