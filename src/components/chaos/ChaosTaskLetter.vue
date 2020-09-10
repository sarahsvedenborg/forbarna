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
/*   beforeUpdate(){
      this.position = randomPos()
      console.log("element", this.placement)
      this.$refs[this.id].style = this.placement
  }, */
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
      e.dataTransfer.setData("letterIndex", this.index);
      e.dataTransfer.setData("parent", e.target.parentElement)
      setTimeout(() => {
        e.target.style.display = "none";
      }, 0);
    },
    dragend(e) {
      //TODO: look at this
      //console.log("e", e);
      e.target.style.left = e.layerX + "px";
      //console.log("y:", e.target.style.top);
      e.target.style.top = e.layerY + "px";
      e.target.style.display = "block";
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