<template>
  <div style="text-transform: uppercase" class="answer">
    <div
      v-for="(letter, i) in word.length"
      :key="`${word + i}`"
      :id="`${word + i}`"
      :data-index="i"
      class="answerSlot"
      @dragover.prevent
      @drop.prevent="drop"
    >
    </div>
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
  data() {
    return {
      currentGuess: new Array(this.word.length)
    };
  },
  methods: {
    drop(e) {
      const letter = document.getElementById(
        e.dataTransfer.getData("letterId")
      );
      this.currentGuess[e.target.dataset.index] = letter.innerHTML;

      letter.style = {
        //    "color": "red",
        //   "padding-bottom": "10px",
        //display: "block"
      };
      /*   letter.style.position = 'relative'
            letter.style.top = '0'
            letter.style.left = '0'
            letter.style.paddingBottom = '10px'
            letter.style.display = 'block' */
      
     
     e.target.appendChild(letter);

      if (this.isFull()) this.checkWin();
    },
    isFull() {
      for (let i = 0; i < this.currentGuess.length; i++) {
        if (typeof this.currentGuess[i] != "string") return false;
      }
      return true;
    },
    checkWin() {
      let guessedString = this.currentGuess.reduce((tot, num) => {
        return tot.concat(num);
      });
      if (guessedString.toLowerCase() == this.word.toLowerCase()) {
        this.guessedCorrectly();
      }
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
</style>