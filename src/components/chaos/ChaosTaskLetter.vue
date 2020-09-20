<template>
  <div
    @click="() => letterGuessed(letter)"
    :class="{letter: true, invisible: !letter.visible}"
    :style="placement"
    v-if="letter.value != ' '"
  >{{letter.value}}</div>
</template>

<script>
const randomPos = (width, height) => {
  const randX = Math.floor(width/1.5 * Math.random());
  const randY = Math.floor(height/3 * Math.random());
  return { x: randX, y: randY };
};
export default {
  props: {
    letter: {
      type: Object,
    },
    letterGuessed: {
      type: Function,
    },
    width: {
      type: Number
    },
     height: {
      type: Number
    }
  },
  data() {
    return {
      position: randomPos(this.width, this.height),
    };
  },
  computed: {
    placement() {
      return {
        position: "absolute",
        left: `${this.position.x}px`,
        top: `${this.position.y}px`,
      };
    },
  }
};
</script>

<style scoped>
.letter {
  text-transform: uppercase;
  font-weight: bold;
  font-size: xx-large;
  color: var(--primary-color-dark);
  cursor: pointer;
}
.invisible {
  visibility: hidden;
}
</style>