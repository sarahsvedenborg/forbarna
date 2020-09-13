<template>
  <div style="text-transform: uppercase" class="answer" ref="answerContainer">
    <div
      v-for="(letter, i) in word.length"
      :key="`${wordAsString + i}`"
      :id="`${wordAsString + i}`"
      :data-index="i"
      :data-isWhite="word[letter-1].value == ' '"
      :class="{answerSlot: true, space: word[letter-1].value == ' '}"
      @dragover.prevent
      @drop.prevent="drop"
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
    drop(e) {
      const letter = document.getElementById(
        e.dataTransfer.getData("letterId")
      );
      letter.setAttribute("data-placed", "true");
      letter.style = {
        //    "color": "red",
        //   "padding-bottom": "10px",
        //display: "block"
      };
      e.target.appendChild(letter);

      if (this.isFull()) this.checkWin();
    },
    isFull() {
      return this.fullFromDrag() || this.fullFromClick();
    },
    checkWin() {
      if (this.wonByClick() || this.wonByDrag()) {
        this.guessedCorrectly();
      }
    },
    fullFromDrag() {
      for (let i = 0; i < this.$refs.answerContainer.children.length; i++) {
        const child = this.$refs.answerContainer.children[i];
        if (child.dataset.iswhite == "true") continue;
        if (child.children.length == 0) return false;
      }
      return true;
    },
    fullFromClick() {
      for (let i = 0; i < this.currentGuess.length; i++) {
        if (this.currentGuess[i] == null) return false;
      }
      return true;
    },
    wonByDrag() {
      let guess = "";
      for (let i = 0; i < this.$refs.answerContainer.children.length; i++) {
        if (this.$refs.answerContainer.children[i].dataset.iswhite == "true")
          continue;
        guess += this.$refs.answerContainer.children[i].children[0].innerHTML;
      }
      return guess.toLowerCase() == this.wordAsString.toLowerCase();
    },
    wonByClick() {
      let guess = "";
      for (let i = 0; i < this.currentGuess.length; i++) {
        if(this.currentGuess[i] == null) continue
        guess += this.currentGuess[i].value;
      }
      return guess.toLowerCase() == this.wordAsString.toLowerCase();
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