<template>
  <div class="chaosTask"  @drop.prevent="drop" @dragover.prevent ref="TaksContainer">
  <ChaosTaskLetter v-for="(letterIndex) in word.length" :letter="word[letterIndex-1]" :id="`${word + 'task' + (letterIndex-1)}`" :index="letterIndex" :key="letterIndex"/>
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