<template>
  <div>
    <h2>Lag nytt sett med kort til memory-spillet</h2>
    <form class="newDeckForm">
      <label for="deckName">Navn på nytt sett</label>
      <input id="deckName" type="text" v-model="name" />
      <label for="deckName">Skal kortene i et par være like eller forskjellige?</label>
      <input type="radio" v-model="type" value="identical" />Like
      <input type="radio" v-model="type" value="different" />Forskjellige
      <label for="deckName">Antall kort i et "par"?</label>
      <input id="deckName" type="number" v-model="cardNum" />
    </form>
    <div class="cardValuesTable" v-if="true">
      <h3>Fyll inn kortverdiene i settet: {{ name }}</h3>
      <table>
        <tr>
          <td class="rowHeading">Par 1</td>
          <td>
            <input placeholder="Verdi på kort 1" />
          </td>
          <td>
            <input type="text" placeholder="Verdi på kort 2" />
          </td>
        </tr>
        <tr>
          <td class="rowHeading">Par 2</td>
          <td>
            <input placeholder="Verdi på kort 1" />
          </td>
          <td>
            <input type="text" placeholder="Verdi på kort 2" />
          </td>
        </tr>
      </table>
    </div>
    <!--   
           <form class="cardValues" v-if="true">   
        <div class="column">
       <h3>Kort 1 i {{ name }}</h3>
        <input id="c1a" type="text" />
        <input id="c2a" type="text" />
      </div>
      <div>
        <h3>Kort 2 i {{ name }}</h3>
        <input id="c1a" type="text" />
        <input id="c2a" type="text" />
      </div> 
    </form>-->
    <button @click="saveCards" v-if="necessaryInformation">Lagre kort</button>
    <p>Settets navn: {{ name }}</p>
    <p>Par i settet er: {{ type }}</p>
    <p>Hvert "par" i settet besår av: {{ cardNum }} kort</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      type: "",
      cardNum: 2
    };
  },
  computed: {
    necessaryInformation() {
      return this.name != "" && this.type != "" && this.cardNum != 0;
    }
  },
  methods: {
    saveCards(e) {
      e.preventDefault;
      return {
        type: this.type,
        name: this.name,
        values: []
      };
    }
  }
};
</script>

<style scoped>
.newDeckForm {
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  margin: 0 auto;
}
.cardValues {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.cardValuesTable {
  margin-top: 5em;
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
  border-radius: 10px;
  /* box-shadow: none; */
  border: 1px solid gray;
}

button {
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
</style>