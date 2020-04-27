<template>
  <div>
    <p>
      Velkommen til ForBarna.no! Her kan du lære om klokka!
    </p>
    <LearnTheClock/>
    <router-link to="/memory">Test Memo</router-link>
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