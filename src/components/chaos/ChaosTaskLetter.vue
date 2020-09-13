<template>
  <div
    @click="() => letterGuessed(letter)"
    :class="{letter: true, invisible: !letter.visible}"
    :style="placement"
    v-if="letter.value != ' '"
  >{{letter.value}}</div>
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
    letter: {
      type: Object,
    },
    letterGuessed: {
      type: Function,
    },
  },
  data() {
    return {
      position: randomPos(),
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