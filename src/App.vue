<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "App",
    components: {},
    data() {
      return {
        clockSize: 500
      }
    },
    created() {
      this.updateClockSize()
    },
    methods: {
      clockChanged(ev) {
        console.log(ev)
      },
      updateClockSize() {
        this.clockSize = Math.min(window.innerWidth, window.innerHeight * 0.9)
      }
    },
    mounted() {
      const vm = this;
      window.addEventListener("resize", () => {
        vm.updateClockSize();
      })
    }
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
