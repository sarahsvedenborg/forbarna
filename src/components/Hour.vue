<template>
  <div v-bind:style="{color: '#' + color}">{{number}}</div>
</template>

<script>
const colours = [
  "B300AB",
  "8200CF",
  "3B00FF",
  "0084E2",
  "00EC1C",
  "BEFF00",
  "F2FF00",
  "FEEC00",
  "FF9F00",
  "FF5100",
  "FF0000",
  "FE006D"
];
export default {
  name: "Hour",
  props: {
    number: {
      type: Number,
      default: 1
    }
  },
  computed: {
    color() {
      return colours[this.number - 1];
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Itim&display=swap");
div {
  font-size: 55px;
  font-weight: bold;
  font-family: "Itim", cursive;
}
</style>