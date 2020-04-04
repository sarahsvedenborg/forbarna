<template>
  <div>
    <Clock :start-time="new Date()"/>
    <hr>
    <router-link to="/testdegselv/klokka">Test deg selv!</router-link>
  </div>
</template>

<script>
  import Clock from "./Clock";
  export default {
    name: "LearnTheClock",
    components: {Clock}
  }
</script>

<style scoped>

</style>