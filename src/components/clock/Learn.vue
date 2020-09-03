<template>
  <div>
    <h1>Lær klokka</h1>
    <div class="wrapper">
      <div class="muteIcon">
        <MuteButton :muted="muted" @toggle="onMuteUnmute" :style="{width: '50px', height: '50px'}" />
        </div>
      <p>Dra på viserne for å høre hva klokka er.</p>
      <Clock :start-time="new Date()" :play-sounds="!muted" />
      <router-link to="/testdegselv/klokka"><button class="button">Test deg selv</button></router-link>
    </div>
  </div>
</template>

<script>
import Clock from "./Clock";
import MuteButton from "./MuteButton";
export default {
  name: "LearnTheClock",
  components: { MuteButton, Clock },
  data() {
    return {
      muted: false
    };
  },
  methods: {
    onMuteUnmute(muteEvent) {
      this.muted = muteEvent.muted;
    }
  }
};
</script>

<style scoped>
h1 {
  color: var(--primary-color-light);
}
.wrapper {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  background-color: var(--primary-color-light);
  width: 80%;
  margin: 0 auto;
  box-shadow: 0px 1px 7px 0px #888;
  margin-bottom: 30px;
  padding: 40px 20px 50px 20px;
  position: relative;
}

.button {
  background-color: var(--color-fuksia);
  color: var(--primary-color-light);
  padding: 10px 30px;
  border-radius: 20px;
  font-weight: bold;
  border: 0px;
  font-size: large;
  cursor: pointer;
}

.muteIcon {
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 10px;
}

</style>