<template>
  <div
    class="letter"
    :style="placement"
    :ref="id"
    :id="id"
    draggable
    @dragstart="dragStart"
    @dragover.stop
    @dragend="dragend"
    v-if="letter != ' '"
  >{{letter}}</div>
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
      type: String
    },
    id: {
      type: String
    },
    index: {
      type: Number
    }
  },
  data() {
    return {
      position: randomPos()
    };
  },
  computed: {
    placement() {
      return {
        position: "absolute",
        left: `${this.position.x}px`,
        top: `${this.position.y}px`
      };
    }
  },
  methods: {
    dragStart(e) {
      e.dataTransfer.setData("letterId", this.id);
      setTimeout(() => {
        e.target.style.display = "none";
      }, 0);
    },
    dragend(e) {
      e.target.style.left = e.layerX + "px";
      e.target.style.top = e.layerY + "px";
      e.target.style.display = "inline";
    }
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
</style>