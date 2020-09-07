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
    </div> -->
    <div class="panel">
      <p class="category">Kategori: <span>Engelske farger</span></p>
      <p class="result">Du har klart <span>{{result}}</span> ord</p>
<ChaosTask :word="word"/>
<ChaosAnswer :word="word" :guessedCorrectly="() => result++"/>
    </div>
  </div>
</template>

<script>
import ChaosTask from "./ChaosTask";
import ChaosAnswer from "./ChaosAnswer";

export default {
  name: "Chaos",
  components: { ChaosTask, ChaosAnswer },
  data() {
    return {
      word: 'Purple',
      result: 0
    };
  },
  methods: {
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

.category{
  position: absolute;
  top: 0;
  right: 15px;
  font-weight: bold;
}

.category span{
  color: var(--color-bloodorange);
}

.result{
  position: absolute;
  bottom: 0;
  right: 15px;
  font-weight: bold;
}

.result span{
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