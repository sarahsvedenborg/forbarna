<template>
  <div class="chaosTask"  @drop.prevent="drop" @dragover.prevent ref="TaskContainer">
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
  updated(){
    console.log("Element updated, word: ", this.$refs['TaskContainer'])
  },
  methods: {
    drop(e){
      //console.log("parent", e.dataTransfer.getData("parent"))
      console.log("parent", e.target.parentElement)
      //let parent = e.dataTransfer.getData("parent")
      //this.$refs.taskContainer.appendChild(e.dataTransfer.getData())
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