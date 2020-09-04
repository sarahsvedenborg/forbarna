<template>
  <div>
    <h1>Test deg selv!</h1>
    <div class="wrapper">
    <h2>Finn klokka <span>{{ clockString(timeToFind) }}</span><img src="/img/icons/Ear.svg" style="width: 2em; height: 2em; cursor: pointer; marginBottom: -10px" @click="playHint"></h2>
    <p class="counter">Du har klart <strong>{{correctGuesses}}</strong> klokkeslett!</p>
    <Clock
        :play-sounds="false"
        :start-time="new Date(1, 1, 1, 0, 0)"
        @clock-changed="checkTime"
    />
    <router-link to="/lær/klokka"><Button buttonType="primary">Øv mer</Button></router-link>
    </div>
  </div>
</template>

<script>
  import Clock from "./Clock";
  import Button from "../shared/UI/Button";
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
    components: {Clock, Button},
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
p {
  font-weight: bold;
}
strong {
  color: var(--color-bloodorange)
}
  span {
    font-weight: bold;
    color: red;
  }
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
  padding: 10px 20px 20px 20px;
  position: relative;
}

.counter {
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  margin: 0px;
}
</style>