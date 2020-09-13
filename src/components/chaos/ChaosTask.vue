<template>
  <div class="chaosTask"  @drop.prevent="drop" @dragover.prevent ref="taskContainer">
  <ChaosTaskLetter 
  v-for="(letterIndex) in word.length" 
  :letter="word[letterIndex-1]" 
  :id="`${wordAsString + 'task' + (letterIndex-1)}`" 
  :index="letterIndex" 
  :key="`${wordAsString + 'task' + (letterIndex-1)}`"
  :ref="`${wordAsString + 'task' + (letterIndex-1)}`"
  :letterGuessed="letterGuessed"/>
</div>
</template>

<script>
import ChaosTaskLetter from './ChaosTaskLetter'

export default {
  components:{ChaosTaskLetter},
  props: {
    wordAsString: {
      type: String
    },
    word: {
      type: Array
    },
    letterGuessed: {
      type: Function
    }
  },
  data() {
    return {
      positions: []
    };
  },
  methods: {
    drop(e){
      const letter = document.getElementById(
        e.dataTransfer.getData("letterId")
      );
      letter.parentElement.removeChild(letter)
      this.$refs.taskContainer.appendChild(letter)
    }
  }
};
</script>

<style scoped>
.chaosTask {
  position: relative;
  width: 100%;
  height: 50vh;
}
</style>