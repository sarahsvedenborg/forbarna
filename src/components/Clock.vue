<template>
  <div class="clock">
    <div
      class="hourHand hand"
      v-bind:style="{ 
        transform: 'rotate(' + hourRotation + 'deg)'
        }"
    />
    <div
      class="minuteHand hand"
      v-bind:style="{ 
        transform: 'rotate(' + minuteRotation + 'deg)'
        }"
      v-on:drag="dragMinute"
      v-on:dragstart="dragStartM"
      draggable
    />
    <div class="clockCenter" v-on:click="rotate">
      <Hour
        v-for="n in 12"
        v-bind:key="n"
        v-bind:style="{transform: 'translate(' + hourNumberPosX(n) + 'px , ' + hourNumberPosY(n) +   'px )'}"
        v-bind:number="n"
        class="hour"
      />
    </div>
  </div>
</template>

<script>
import Hour from "./Hour.vue";
const blankImage = new Image();

export default {
  name: "Clock",
  props: {
    deg: {
      type: Number,
      default: 0
    }
  },
  components: {
    Hour
  },
  computed: {
    minuteRotation() {
      return (this.minutes * 360) / 60;
    },
    hourRotation() {
      return ((this.hours + this.minutes / 60.0) * 360) / 12;
    }
  },
  data() {
    return {
      minutes: 0,
      dt: 0,
      hours: 0,
      clockWidth: 500
    };
  },
  methods: {
    rotate() {
      this.minutes += 5;
      if (this.minutes >= 60) {
        this.hours = (this.hours + 1) % 12;
      }
      this.minutes %= 60;
    },
    hourNumberPosX(i) {
      return (
        (this.clockWidth / 2 - 30) *
        Math.cos((2 * Math.PI * i) / 12 - Math.PI / 2)
      );
    },

    hourNumberPosY(i) {
      return (
        (this.clockWidth / 2 - 30) *
        Math.sin((2 * Math.PI * i) / 12 - Math.PI / 2)
      );
    },
    dragMinute(event) {
      event.preventDefault();
      if (event.x == 0 && event.y == 0) return;
      var x = event.layerX;
      var y = event.layerY - this.clockWidth / 2;
      let angle = Math.atan2(y, x) + 2.5 * Math.PI;

      let newMinutes = Math.floor((angle / (2 * Math.PI)) * 60) % 60;
      newMinutes = Math.round(newMinutes / 5.0) * 5;

      if (this.minutes <= 15 && newMinutes >= 45) {
        this.hours--;
      } else if (this.minutes >= 45 && newMinutes <= 15) {
        this.hours++;
      }

      this.minutes = newMinutes;
    },
    dragStartM(dragEvent) {
      dragEvent.dataTransfer.setDragImage(blankImage, 0, 0);
    }
  }
};
</script>

<style scoped>
.clock {
  border-radius: 50%;
  background-color: white;
  border: 5px solid black;
  width: 500px;
  height: 500px;
  margin: 0 auto;
  position: relative;
}

.clockCenter {
  border-radius: 50%;
  background-color: black;
  border: 5px solid black;
  width: 50px;
  height: 50px;
  transform: translate(225px, 225px);
  transform-origin: center center;
}

.hand {
  width: 10px;
  border-radius: 10px;
  background-color: lightblue;
  transform-origin: bottom center;
  position: absolute;
  cursor: pointer;
}

.minuteHand {
  height: 230px;
  top: 25px;
  left: 250px;
}

.hourHand {
  height: 115px;
  top: 145px;
  left: 250px;
}

.hour {
  transform-origin: center;
  top: 0px;
  left: 0px;
  position: absolute;
}
</style>