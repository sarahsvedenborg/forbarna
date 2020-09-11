<template>
  <div style="text-transform: uppercase" class="answer" ref="answerContainer">
    <div
      v-for="(letter, i) in word.length"
      :key="`${word + i}`"
      :id="`${word + i}`"
      :data-index="i"
      :data-isWhite="word[letter-1] == ' '"
      :class="{answerSlot: true, space: word[letter-1] == ' '}"
      @dragover.prevent
      @drop.prevent="drop"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    word: {
      type: String
    },
    guessedCorrectly: {
      type: Function
    }
  },
  methods: {
    initializeGuess() {
      let guess = new Array(this.word.length);
      for (let i = 0; i < this.word.length; i++) {
        if (this.word[i] == " ") {
          guess[i] = " ";
        }
      }
      return guess;
    },
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
      for (let i = 0; i < this.$refs.answerContainer.children.length; i++) {
        const child = this.$refs.answerContainer.children[i];
        if(child.dataset.iswhite == "true") continue
        if (child.children.length == 0) return false;
      }
      return true;
    },
    checkWin() {
      let guess = "";
      for (let i = 0; i < this.$refs.answerContainer.children.length; i++) {
        if (this.$refs.answerContainer.children[i].dataset.iswhite == "true") continue;
        guess += this.$refs.answerContainer.children[i].children[0].innerHTML;
      }
      if (guess.toLowerCase() == this.word.toLowerCase().replace(/\s+/g, '')) this.guessedCorrectly();
    }
  }
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
}
.space {
  visibility: hidden;
}
</style>