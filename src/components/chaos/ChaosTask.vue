<template>
  <div class="chaosTask"  @drop.prevent="drop" @dragover.prevent ref="taskContainer">
  <ChaosTaskLetter 
  v-for="(letterIndex) in word.length" 
  :letter="word[letterIndex-1]" 
  :id="`${word + 'task' + (letterIndex-1)}`" 
  :index="letterIndex" 
  :key="`${word + 'task' + (letterIndex-1)}`"
  :ref="`${word + 'task' + (letterIndex-1)}`"/>
</div>
</template>

<script>
import ChaosTaskLetter from './ChaosTaskLetter'

export default {
  components:{ChaosTaskLetter},
  props: {
    word: {
      type: String
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