<template>
  <div :style="position" ref="driftingCardRef" :class="isFound ? 'found' : 'notFound'">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    parentRef: {
      type: Object
    },
    isFound: {
      type: Boolean
    }
  },
  created() {
    const dx = -100 + 200 * Math.random();
    const dy = -100 + 200 * Math.random();
    const h = Math.sqrt(dx * dx + dy * dy);
    this.dx = dx / h * 3;
    this.dy = dy / h * 3;
    this.moveCard();
  },
  mounted(){
     let boundary = {
      top: this.parentRef.boardRef.getBoundingClientRect().top,
      left: this.parentRef.boardRef.getBoundingClientRect().left,
      bottom:
        this.parentRef.boardRef.getBoundingClientRect().top +
        this.parentRef.boardRef.getBoundingClientRect().height -
        this.$refs.driftingCardRef.getBoundingClientRect().height,
      right:
        this.parentRef.boardRef.getBoundingClientRect().left +
        this.parentRef.boardRef.getBoundingClientRect().width -
        this.$refs.driftingCardRef.getBoundingClientRect().width
    };
    this.boundary = boundary 
  },
  updated() {
    if (this.isFound) {
      this.stopMoving();
    }
  },
  beforeDestroy() {
    this.stopMoving();
  },
  data() {
    return {
      xDirection: 3,
      yDirection: 5,
      moving: true,
      counter: 0,
      interval: null,
      xPos: 0,
      yPos: 0,
      dx: 0,
      dy: 0,
      boundary: null
    };
  },
  computed: {
    position() {
      return { transform: `translate(${this.xPos}px, ${this.yPos}px)` };
    }
  },
  methods: {
    updatePosition() {
      if (
        this.$refs.driftingCardRef.getBoundingClientRect().x <= this.boundary.left ||
        this.$refs.driftingCardRef.getBoundingClientRect().x >= this.boundary.right
      ) {
        this.dx *= -1;
      }
      if (
        this.$refs.driftingCardRef.getBoundingClientRect().y <= this.boundary.top ||
        this.$refs.driftingCardRef.getBoundingClientRect().y >= this.boundary.bottom
      ) {
        this.dy *= -1;
      }
      this.xPos += this.dx;
      this.yPos += this.dy;
    },
    moveCard() {
      this.interval = setInterval(() => {
        this.updatePosition();
      },80);
    },
    stopMoving() {
      clearInterval(this.interval);
    }
  }
};
</script>

<style scoped>
.found{
  z-index: 0;
}

.notFound{
  z-index: 1;
}
</style>