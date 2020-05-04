<template>
  <tr class="inputRow">
    <td class="rowHeading">Nytt par</td>
    <td v-for="j in Number(cardsInPair)" :key="j+'a'" :ref="'input'">
      <input :placeholder="'Verdi på kort ' + j" v-model="cardPair[j-1]" type="text" />
    </td>
    <td>
      <button class="confirmButton" @click="click">Add</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    cardsInPair: {
      type: Number
    },
    addCardPair: {
      type: Function
    }
  },
  data() {
    return {
      cardPair: new Array(this.cardsInPair)
    };
  },
  methods: {
      click() {
          this.addCardPair(this.cardPair)
          this.cardPair = new Array(this.cardsInPair)
          this.$refs.input[0].firstElementChild.focus()
    }
  }
};
</script>

<style scoped>

input {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 15px;
  padding: 5px 10px;
  margin: 10px;
  border-radius: 2em;
  border: 2px solid gray;
}

input:focus {
  outline: none;
  border-radius: 2em;
  border: 2px solid lightskyblue;
  box-shadow: inset 0px 0px 6px 1px lightskyblue;
}

.rowHeading {
  font-weight: bold;
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
</style>