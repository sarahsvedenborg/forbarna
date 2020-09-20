<template>
  <div style="text-transform: uppercase" class="answer" ref="answerContainer">
    <div
      v-for="(letter, i) in word.length"
      :key="`${wordAsString + i}`"
      :data-isWhite="word[letter-1].value == ' '"
      :class="{answerSlot: true, space: word[letter-1].value == ' '}"
    >
      <div
        v-if="currentGuess[i] != null"
        class="letter"
        @click="guessedLetterRemoved(currentGuess[i])"
      >{{currentGuess[i].value}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    wordAsString: {
      type: String,
    },
    word: {
      type: Array,
    },
    currentGuess: {
      type: Array,
    },
    guessedCorrectly: {
      type: Function,
    },
    guessedLetterRemoved: {
      type: Function,
    },
  },
  updated() {
    if (this.isFull()) this.checkWin();
  },
  methods: {
    isFull() {
      for (let i = 0; i < this.currentGuess.length; i++) {
        if (this.currentGuess[i] == null) return false;
      }
      return true;
    },
    checkWin() {
      let guess = "";
      for (let i = 0; i < this.currentGuess.length; i++) {
        if (this.currentGuess[i] == null) continue;
        guess += this.currentGuess[i].value;
      }
      if (guess.toLowerCase() == this.wordAsString.toLowerCase()){
        this.guessedCorrectly();
      }
    },
  },
};
</script>

<style scoped>
.answer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
}
.answerSlot {
  border-bottom: 5px solid black;
  height: 2em;
  width: 50px;
  margin: 0px 10px;
  padding-bottom: 5px;
  cursor: pointer;
}
.space {
  visibility: hidden;
}
.letter {
  text-transform: uppercase;
  font-weight: bold;
  font-size: xx-large;
  color: var(--primary-color-dark);
}
</style>