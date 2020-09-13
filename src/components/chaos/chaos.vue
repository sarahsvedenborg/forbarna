<template>
  <div>
    <h1>Bokstavkaos</h1>
    <ChaosMenu
      v-if="!selectedWords"
      :categories="groupsByCategory"
      :selectSet="(name) => setWords(name)"
    />
    <div class="panel" v-else>
      <div v-if="!won">
        <p class="category">
          Kategori:
          <span>{{selectedGroupName}}</span> (på engelsk)
        </p>
        <p class="result">
          Du har klart
          <span ref="counter">{{result}}</span> ord
        </p>
        <ChaosTask
          :word="word"
          :wordAsString="selectedWords[currentWordIndex]"
          v-if="displayTask"
          :letterGuessed="letterGuessed"
        />
        <ChaosAnswer
          :wordAsString="selectedWords[currentWordIndex]"
          :word="word"
          :currentGuess="currentGuess"
          :guessedCorrectly="() => result++"
          :guessedLetterRemoved="guessedLetterRemoved"
          v-if="displayTask"
        />
      </div>
      <VictoryMessage v-else message="Du klarte alle ordene i denne gruppen!" />
    </div>
  </div>
</template>

<script>
import ChaosTask from "./ChaosTask";
import ChaosAnswer from "./ChaosAnswer";
import ChaosMenu from "./ChaosMenu";
import VictoryMessage from "../shared/VictoryMessage";
import { getWords, getCategories } from "./words.js";
import { shuffle } from "../../utils.js";

const createGroupsByCategory = () => {
  let groupsByCategory = {};
  const categoryNames = getCategories();
  for (let i = 0; i < categoryNames.length; i++) {
    let name = categoryNames[i];
    groupsByCategory[name] = [];
  }
  let wordGroups = getWords();

  for (let i = 0; i < wordGroups.length; i++) {
    groupsByCategory[wordGroups[i].category].push(wordGroups[i]);
  }
  return groupsByCategory;
};

class LetterClass {
  constructor(value, visible, indexInWord, indexInGuess) {
    this.value = value;
    this.visible = visible;
    this.indexInWord = indexInWord;
    this.indexInGuess = indexInGuess;
  }
  isEqualTo = (secondCard) => {
    return this.comparator == secondCard.comparator;
  };
}

export default {
  name: "Chaos",
  components: { ChaosTask, ChaosAnswer, ChaosMenu, VictoryMessage },
  data() {
    return {
      result: 0,
      selectedWords: null,
      groupsByCategory: createGroupsByCategory(),
      currentWordIndex: 0,
      won: false,
      selectedCategory: "",
      selectedGroupName: "",
      displayTask: true,
      word: [],
      currentGuess: [],
    };
  },
  methods: {
    initializeWord() {
      const word = this.selectedWords[this.currentWordIndex];
      let newWord = [];
      for (let i = 0; i < word.length; i++) {
        newWord.push(new LetterClass(word[i], true, i, null));
      }
      this.word = newWord;
    },
    initializeGuess() {
      const currentWord = this.selectedWords[this.currentWordIndex];
      let guess = new Array(currentWord.length);
      for (let i = 0; i < currentWord.length; i++) {
        if (currentWord[i] == " ") {
          guess[i] = new LetterClass(" ", true, i, i);
        }
      }
      this.currentGuess = guess;
    },
    setWords(name) {
      this.selectedGroupName = name;
      const groups = getWords();
      for (let i = 0; i < groups.length; i++) {
        if (groups[i].name == name) {
          let shuffledWords = shuffle(groups[i].values);
          this.selectedWords = shuffledWords.slice(0, 8);
        }
      }
    },
    animateCounter() {
      this.$refs.counter.style.fontSize = "3em";
      setTimeout(() => {
        this.$refs.counter.style.fontSize = "medium";
      }, 1000);
    },
    letterGuessed(letter) {
      let newGuess = new Array(...this.currentGuess);
      letter.visible = false;
      for (let i = 0; i < newGuess.length; i++) {
        if (newGuess[i] == null) {
          newGuess[i] = letter;
          letter.indexInGuess = i
          break;
        }
      }
      this.currentGuess = newGuess;
    },
    guessedLetterRemoved(letter) {
      let newGuess = [...this.currentGuess];
      newGuess[letter.indexInGuess] = null;
      letter.indexInGuess = null
      letter.visible = true
      this.currentGuess = newGuess;
    },
    resetGuess() {
      this.initializeGuess();
      this.initializeWord();
    },
  },
  watch: {
    result: function () {
      if (this.currentWordIndex == this.selectedWords.length - 1)
        this.won = true;
      else {
        this.displayTask = false;
        this.animateCounter();
        setTimeout(() => {
          this.displayTask = true;
        }, 1000);
        this.currentWordIndex++;
        this.resetGuess();
      }
    },
    selectedWords: function () {
      this.initializeGuess();
      this.initializeWord();
    },
  },
};
</script>

<style scoped>
h1 {
  color: var(--primary-color-light);
}

.panel {
  position: relative;
  background-color: var(--primary-color-light);
  width: 80%;
  margin: 0 auto;
  box-shadow: 0px 1px 7px 0px #888;
  margin-bottom: 30px;
  padding: 40px 20px 50px 20px;
  min-height: 60vh;
}

.category {
  position: absolute;
  top: 0;
  right: 15px;
  font-weight: bold;
}

.category span {
  display: inline-block;
  color: var(--color-bloodorange);
  text-transform: uppercase;
}

.result {
  position: absolute;
  bottom: 0;
  right: 15px;
  font-weight: bold;
}

.result span {
  color: var(--color-bloodorange);
  transition: font-size 0.5s;
}

.boardWrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
}
@keyframes emphasize {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(2);
  }
}
</style>