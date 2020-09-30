<template>
  <div
    v-if="alwaysOpen"
    class="card"
    :class="{selected: card.isFaceUp, foundOverlap: card.isFound}"
    @click="flip"
  >
    <p>{{ value }}</p>
  </div>
  <div v-else class="card" :class="{faceDown: !card.isFaceUp, found: card.isFound}" @click="flip">
    <img v-if="card.isFaceUp" :src="card.value" />
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    card: {
      type: Object,
    },
    pairCheck: {
      type: Function,
    },
    alwaysOpen: {
      type: Boolean,
    },
  },
  data() {
    return {
      flipped: this.card.isFaceUp,
      value: this.card.value,
    };
  },
  methods: {
    flip() {
      if (!this.card.isFaceUp) {
        this.card.isFaceUp = true;
        this.pairCheck(this.card);
      }
    },
  },
};
</script>

<style scoped>
.card {
  border: 5px solid red;
  width: 80px;
  height: 80px;
  color: black;
  font-weight: 500;
  border-radius: 15px;
  background-color: white;
  margin: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card img{
  width: inherit;
  object-fit: fill;
  border-radius: 10px;

}

@media screen and (max-width: 450px) {
  .card {
    width: 65px;
    height: 65px;
  }

  .card p {
    font-size: smaller;
  }
}

.selected {
  border: 5px solid var(--color-green);
  background-color: var(--color-green);
  box-shadow: 0 4px 8px 0 rgba(50, 205, 50, 0.2),
    0 6px 20px 0 rgba(50, 205, 50, 0.19);
}

.faceUp {
  background-color: white;
}

.faceDown {
  background-color: red;
}
.found {
  background-color: white;
  opacity: 0.5;
  border-color: grey;
}

.foundOverlap {
  background-color: #eee;
  border-color: #b5b5b5;
  box-shadow: none;
}
</style>