<template>
  <div :class="{flashConfirmation: true, 'correct': correct, 'incorrect': !correct}">
    <span v-if="correct">👍 Flott!</span>
    <span v-else>👎 Prøv igjen!</span>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String
    },
    correct: {
      type: Boolean
    }
  }
};
</script>
<style scoped>
.flashConfirmation {
  position: absolute;
  font-size: xx-large;
  font-weight: bold;
  top: 400px;
  left: 600px;
  animation-duration: 3s;
  animation-timing-function: ease-out;
}

.correct {
  color: var(--color-purple);
  animation-name: correct;
}

.incorrect {
  color: black;
  animation-name: incorrect;
}

@keyframes correct {
  from {
    transform: translate(0px, 0px);
    opacity: 1;
  }
  to {
    transform: translate(400px, -100px);
    opacity: 0;
  }
}

@keyframes incorrect {
  from {
    transform: translate(0px, 0px);
    opacity: 1;
  }
  to {
    transform: translate(0px, 1000px);
    opacity: 0;
  }
}
</style>