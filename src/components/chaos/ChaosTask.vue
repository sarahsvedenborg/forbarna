<template>
  <div class="chaosTask" @drop.prevent="drop" @dragover.prevent ref="taskContainer">
    <ChaosTaskLetter
      v-for="(letterIndex) in word.length"
      :letter="word[letterIndex-1]"
      :key="`${wordAsString + 'task' + (letterIndex-1)}`"
      :letterGuessed="letterGuessed"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script>
import ChaosTaskLetter from "./ChaosTaskLetter";

export default { 
  components: { ChaosTaskLetter },
  props: {
    wordAsString: {
      type: String,
    },
    word: {
      type: Array,
    },
    letterGuessed: {
      type: Function,
    }
  },
  data() {
    return {
      positions: [],
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
};
</script>

<style scoped>
.chaosTask {
  position: relative;
  width: 100%;
  height: 50vh;
}
</style>