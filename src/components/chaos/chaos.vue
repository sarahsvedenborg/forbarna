<template>
  <div>
    <h1>Bokstavkaos</h1>
    <!--     <div v-else>
      <div class="panel" ref="boardRef">
        <div v-if="!won">
          <div class="boardWrapper">
            <DriftingCard
              v-for="(card, i) in cards"
              :key="i"
              :parentRef="$refs"
              :isFound="card.isFound"
            >
              <Card :card="card" :pairCheck="pairCheck"></Card>
            </DriftingCard>
          </div>
        </div>
        <VictoryMessage v-else message="Du fanget alle parene!" />
        <p class="footer" v-if="!won">Par funnet: {{ pairsFoundCounter }}</p>
      </div>
    </div>-->
    <ChaosMenu v-if="!selectedWords" :categories="groupsByCategory" :selectSet="(name) => setWords(name)"/>
    <div class="panel" v-else>
      <p class="category">
        Kategori:
        <span>{{selectedGroupName}}</span> (på engelsk)
      </p>
      <p class="result">
        Du har klart
        <span>{{result}}</span> ord
      </p>
      <ChaosTask :word="selectedWords[currentWordIndex]" v-if="!won"/>
      <ChaosAnswer :word="selectedWords[currentWordIndex]" :guessedCorrectly="() => result++" v-if="!won"/>
    </div>
    <VictoryMessage v-if="won" message="Du klarte alle ordene i denne gruppen!"/>
  </div>
</template>

<script>
import ChaosTask from "./ChaosTask";
import ChaosAnswer from "./ChaosAnswer";
import ChaosMenu from "./ChaosMenu";
import VictoryMessage from "../shared/VictoryMessage";
import { getWords, getCategories } from "./words.js";

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
  return groupsByCategory
};

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
      selectedCategory: '',
      selectedGroupName: ''
    };
  },
  methods: {
    setWords(name){
      this.selectedGroupName = name
      const groups = getWords()
      for (let i = 0; i < groups.length; i++) {
        if(groups[i].name == name) {
          this.selectedWords = groups[i].values
        }
      }
    }
  },
  watch:{
    result: function(){
      if(this.currentWordIndex == this.selectedWords.length) this.won = true
      else this.currentWordIndex++
    }
  }
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
  min-height: 50vh;
}

.category {
  position: absolute;
  top: 0;
  right: 15px;
  font-weight: bold;
}

.category span {
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
}

.boardWrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
}

.footer {
  position: absolute;
  bottom: 0px;
  right: 0px;
  font-weight: bold;
  margin: 0px 20px 10px 20px;
  color: var(--primary-color-dark);
}
</style>