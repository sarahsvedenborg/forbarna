<template>
  <div ref="clockWrapper" id="clockwrapper">
    <div
      ref="clock"
      class="clock"
      :style="{
        width: clockSize + 'px',
        height: clockSize + 'px'
    }"
      @touchmove.prevent="touchDragMinute"
      @touchend="commitTime"
      @dragover="updateMousePosition"
      @click="commitTime"
    >
      <div>
        <Hour
          v-for="i in 12"
          :key="i"
          :number="i.toString()"
          :clockSize="clockSize"
          :style="hourNumberPosStyle(i)"
        />
      </div>
      <div
        ref="hourHandRef"
        class="hand"
        :style="[
      hourHand, 
      { 
        transform: `translate(-50%, 0) rotate(${hourRotation}deg)`
      }]"
      >
        <img src="/img/HourHand.svg" alt />
      </div>
      <div
        ref="minuteHandRef"
        class="hand"
        :style="[
      minuteHand, 
      { 
        transform: `translate(-50%, 0) rotate(${minuteRotation}deg)`
      }]"
        @dragstart="dragStartM"
        @drag="dragMinute"
        @dragend="commitTime"
        draggable="true"
      >
        <img alt src="/img/MinuteHand.svg" />
      </div>
      <div class="clockCenter" />
    </div>
  </div>
</template>


<script>
import Hour from "./Hour.vue";
import ResizeSensor from "css-element-queries/src/ResizeSensor";
import { clockSounds } from "./ClockSounds";

const blankImage = new Image();

export default {
  name: "Clock",
  props: {
    playSounds: {
      type: Boolean,
      default: true
    },
    startTime: {
      type: Date,
      default: new Date(1, 1, 1, 0, 0, 0, 0)
    }
  },
  data() {
    return {
      clockSize: 400,
      time: {
        m: this.startTime.getMinutes() % 60,
        h: this.startTime.getHours() % 12
      },
      audioMap: {},
      audioPlayer: null,
      mousePos: { clientX: 0, clientY: 0 }
    };
  },
  components: {
    Hour
  },
  computed: {
    minuteRotation() {
      return (this.time.m * 360) / 60;
    },
    hourRotation() {
      return ((this.time.h + this.time.m / 60.0) * 360) / 12;
    },
    minuteHand() {
      let h = (this.clockSize / 2) * 0.64;
      let t = this.clockSize / 2 - h;

      return {
        height: h + "px",
        top: t + "px",
        left: this.clockSize / 2 + "px"
      };
    },
    hourHand() {
      let h = (this.clockSize / 2) * 0.4;
      let t = this.clockSize / 2 - h;

      return {
        height: h + "px",
        top: t + "px",
        left: this.clockSize / 2 + "px"
      };
    }
  },
  mounted() {
    this.updateClockSize();
    new ResizeSensor(this.$refs.clockWrapper, this.updateClockSize);
  },
  methods: {
    updateClockSize() {
      const clockRect = this.$refs.clockWrapper.getBoundingClientRect();
      this.clockSize = Math.min(clockRect.width, clockRect.height);
    },
    hourNumberPosStyle(i) {
      const r = 0.72 * (this.clockSize / 2 - 30);
      const theta = (2 * Math.PI * i) / 12 - Math.PI / 2;
      return {
        position: "absolute",
        left: this.clockSize / 2 + r * Math.cos(theta) + "px",
        top: this.clockSize / 2 + r * Math.sin(theta) + "px"
      };
    },
    toClockCoord(handle) {
      return {
        x:
          handle.clientX -
          this.clockSize / 2 -
          this.$refs.clock.getBoundingClientRect().left,
        y:
          handle.clientY -
          this.clockSize / 2 -
          this.$refs.clock.getBoundingClientRect().top
      };
    },
    dragMinute(event) {
      event.preventDefault();
      event.dataTransfer.setDragImage(blankImage, 0, 0);

      let clientCoords = event;
      if (event.x === 0 && event.y === 0) {
        if (this.mousePos) {
          clientCoords = this.mousePos;
        } else {
          return;
        }
      }

      this.updateMinute(this.toClockCoord(clientCoords));
    },
    touchDragMinute(touchEvent) {
      const touch = touchEvent.touches[0];
      this.updateMinute(this.toClockCoord(touch));
    },
    updateMinute(coords) {
      let angle = Math.atan2(coords.y, coords.x) + 2.5 * Math.PI;

      let newMinutes = Math.floor((angle / (2 * Math.PI)) * 60) % 60;
      newMinutes = Math.round(newMinutes / 5.0) * 5;
      newMinutes %= 60;

      if (this.time.m <= 15 && newMinutes >= 45) {
        this.time.h = (this.time.h + 11) % 12;
      } else if (this.time.m >= 45 && newMinutes <= 15) {
        this.time.h = (this.time.h + 1) % 12;
      }

      if (this.time.m !== newMinutes) {
        clockSounds.preloadProximity({
          h: this.time.h,
          m: newMinutes
        });
      }

      this.time.m = newMinutes;
    },
    dragStartM(dragEvent) {
      dragEvent.dataTransfer.setDragImage(blankImage, 0, 0);
    },
    updateMousePosition(event) {
      this.mousePos = {
        clientX: event.clientX,
        clientY: event.clientY
      };
    },
    commitTime: function() {
      this.$emit("clock-changed", { h: this.time.h, m: this.time.m });
      if (this.playSounds && this.time.m % 5 === 0) {
        clockSounds.play(this.time);
      }
    }
  }
};
</script>

<style scoped>
.clock {
  background-image: url("/img/ClockBackground.svg");
  background-size: 100%;

  object-fit: cover;
  margin: 0 auto;
  position: relative;
}

.clockCenter {
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  background-color: #4a4a4a;
  border: 5px solid #4a4a4a;
  width: 5%;
  height: 5%;
  transform: translate(-50%, -50%);
}

.hand {
  transform-origin: bottom center;
  position: absolute;
  cursor: pointer;
}

.hand > img {
  height: 100%;
  width: auto;
  pointer-events: none;
  user-select: none;
}
</style>