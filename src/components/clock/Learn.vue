<template>
  <div>
    <Clock :start-time="new Date()" :play-sounds="!muted" />
    <hr>
    <router-link to="/testdegselv/klokka">Test deg selv!</router-link>
    <MuteButton :muted="muted" @toggle="onMuteUnmute" :style="{width: '100px', height: '100px'}"/>
  </div>
</template>

<script>
  import Clock from "./Clock";
  import MuteButton from "./MuteButton";
  export default {
    name: "LearnTheClock",
    components: {MuteButton, Clock},
    data() {
      return {
        muted: false
      }
    },
    methods: {
      onMuteUnmute(muteEvent) {
        this.muted = muteEvent.muted;
      }
    }
  }
</script>

<style scoped>

</style>