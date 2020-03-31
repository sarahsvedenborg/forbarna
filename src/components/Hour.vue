<template>
  <div :style="hourStyle">{{number}}</div>
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
      type: String,
      default: "1"
    },
    clockSize: {
        type: Number,
        default: 50 
    }

  },
  computed: {
    hourStyle() {
      return {
          color: "#" + colours[this.number - 1],
          fontSize: 0.12*this.clockSize + "px"
      }
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Itim&display=swap");
div {
  font-weight: bold;
  font-family: "Itim", cursive;
  transform: translate(-50%, -50%)
}
</style>