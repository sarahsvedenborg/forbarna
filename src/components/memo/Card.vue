<template>
  <div class="card" :class="{faceUp: card.isFaceUp, found: card.isFound}" @click="flip">
    <p v-if="card.isFaceUp">{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    card: {
      type: Object
    },
    pairCheck: {
      type: Function
    }
  },
  data() {
    return {
      flipped: this.card.isFaceUp,
      value: this.card.value
    };
  },
  methods: {
    faceUp() {
      return {
        "background-color": "red"
      };
    },
    faceDown() {
      return {
        "background-color": "white"
      };
    },
    flip() {
      if (!this.card.isFaceUp) {
        this.card.isFaceUp = true;
        this.pairCheck(this.card);
      }
    }
  }
};
</script>

<style scoped>
.card {
  border: 2px solid red;
  width: 100px;
  height: 100px;
  color: black;
  border-radius: 5px;
  background-color: red;
  margin: 5px;
}
.faceUp {
  background-color: white;
}

.faceDown {
  background-color: red;
}
.found {
  visibility: hidden;
}
</style>