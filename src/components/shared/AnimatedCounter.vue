<template>
  <p class="result" :class="placement">
    Du har klart
    <span ref="counterRef">{{result}}</span>
    {{counterType}}
  </p>
</template>

<script>
export default {
  props: {
    counterType: {
      type: String,
    },
    result: {
      type: Number,
    },
    placement: {
        type: String
    }
  },
  methods: {
    animateCounter() {
      this.$refs.counterRef.style.fontSize = "3em";
      setTimeout(() => {
        this.$refs.counterRef.style.fontSize = "medium";
      }, 1000);
    },
  },
  watch: {
      result(){
          this.animateCounter()
      }
  }
};
</script>

<style scoped>
.result {
  position: absolute;
  font-weight: bold;
}

.topRight {
   top: 0;
  right: 0;
  padding: 10px;
  margin: 0px;
}

.bottomRight {
  bottom: 0;
  right: 15px;
}

.result span {
  color: var(--color-bloodorange);
  transition: font-size 0.5s;
}
@keyframes emphasize {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(2);
  }
}
</style>