<template>
  <div class="card" :class="{faceUp: card.isFaceUp, found: card.isFound}" @click="flip">
    <p>{{ value }}</p>
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
    faceUp(){
      return {'border':'5px solid green'}
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
  position: relative;
  border: 5px solid red;
  width: 100px;
  height: 100px;
  color: black;
  font-weight: 500;
  padding: 5px;
  border-radius: 15px;
  background-color: white;
  margin: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: none;
}

@media screen and (max-width: 450px) {
  .card {
    width: 70px;
    height: 70px;
  }

  .card p {
    font-size: smaller;
  }
}

.faceUp {
  border: 5px solid var(--color-green);
  background-color: var(--color-green);
  box-shadow: 0 4px 8px 0 rgba(50,205,50, 0.2), 0 6px 20px 0 rgba(50,205,50, 0.19);
}
.found {
  background-color: #eee;
  border-color: #B5B5B5;
  box-shadow: none;
}
</style>