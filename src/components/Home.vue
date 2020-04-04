<template>
  <div>
    <p>
      Velkommen til ForBarna.no! Her kan du lære om klokka!
    </p>
    <LearnTheClock/>
  </div>
</template>

<script>
  import LearnTheClock from "./clock/Learn";
  export default {
    name: "Home",
    components: {LearnTheClock}
  }
</script>

<style scoped>

</style>