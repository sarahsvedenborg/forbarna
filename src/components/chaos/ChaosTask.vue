<template>
  <div class="chaosTask">
    <div
      class="letter"
      :style="position(i)"
      :ref="'letter'+(i+1)"
      :id="'letter'+(i+1)"
      v-for="(letterIndex,i) in word.length"
      :key="letterIndex"
      draggable
     
      @dragstart="dragStart"
      @dragover.stop
    >{{word[letterIndex-1]}}</div>
  </div>
</template>

<script>
const panelWidth = 700;
const panelHeight = 200;
const randomPos = () => {
  const randX = Math.floor(panelWidth * Math.random());
  const randY = Math.floor(panelHeight * Math.random());
  return { x: randX, y: randY };
};
export default {
  props: {
    word: {
      type: String
    }
  },
  created() {
    for (let i = 0; i < this.word.length; i++) {
      this.positions.push(randomPos());
    }
  },
  data() {
    return {
      positions: [],
    };
  },
  methods: {
    position(index) {
      return {
        position: "absolute",
        left: `${this.positions[index].x}px`,
        top: `${this.positions[index].y}px`
      };
    },
    dragStart(e) {
        e.dataTransfer.setData('letterId', e.target.id)
      setTimeout(() => {
          e.target.style.display = 'none'
      }, 0);
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
.letter {
  text-transform: uppercase;
  font-weight: bold;
  font-size: xx-large;
  color: var(--primary-color-dark);
  cursor: pointer;
}
</style>