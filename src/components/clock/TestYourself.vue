<template>
  <div>
    <h1>Test deg selv!</h1>
    <p>Finn klokka <span>{{ clockString(timeToFind) }}</span><img src="/img/VolumeOn.svg" style="width: 2em; height: 2em; cursor: pointer" @click="playHint"></p>
    <p v-if="correctGuesses > 0">Du har klart {{correctGuesses}} klokkeslett!</p>
    <Clock
        :play-sounds="false"
        :start-time="new Date(1, 1, 1, 0, 0)"
        @clock-changed="checkTime"
    />
    <router-link to="/lær/klokka">Øv mer.</router-link>
  </div>
</template>

<script>
  import Clock from "./Clock";
  import {clockSounds} from "./ClockSounds";

  const minuteStr = [
      "",
      "fem over",
      "ti over",
      "kvart over",
      "ti på halv",
      "fem på halv",
      "halv",
      "fem over halv",
      "ti over halv",
      "kvart på",
      "ti på",
      "fem på"
  ];
  const hourStr = [
      "tolv",
      "ett",
      "to",
      "tre",
      "fire",
      "fem",
      "seks",
      "syv",
      "åtte",
      "ni",
      "ti",
      "elleve"
  ];

  export default {
    name: "TestYourself",
    components: {Clock},
    data() {
      return {
        timeToFind: this.randomTime(),
        correctGuesses: 0
      }
    },
    methods: {
      randomTime() {
        return {
          h: Math.floor(Math.random() * 12),
          m: Math.floor(Math.random() * 60 / 5) * 5
        }
      },
      checkTime(time) {
        const timeToFind = JSON.parse(JSON.stringify(this.timeToFind));
        console.log({expected: timeToFind, actual: time})
        if (time.h === timeToFind.h && time.m === timeToFind.m) {
          this.success();
          this.timeToFind = this.randomTime();
        }
      },
      success() {
        alert("Godt jobba! Prøv en til!");
        this.correctGuesses++;
      },
      clockString(time) {
        return minuteStr[time.m/5] + " " + ( time.m > 15 ? hourStr[(time.h + 1) % 12] : hourStr[time.h])
      },
      playHint() {
        clockSounds.play(this.timeToFind);
      }

    }
  }
</script>

<style scoped>
  span {
    font-weight: bold;
    color: red;
  }
</style>