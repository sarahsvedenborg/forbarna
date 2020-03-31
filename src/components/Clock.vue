<template>
  <div>
    <div
      ref="clock"
      class="clock"
      :style="{
        width: clockSize + 'px',
        height: clockSize + 'px'
    }"
      @touchmove.prevent="touchDragMinute"
      @touchend="playSound"
    >
    <div>
          <Hour v-for="i in 12" :key="i" :number="i.toString()" :clockSize="clockSize" :style="hourNumberPosStyle(i)"/>
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
        <img src="/img/HourHand.svg" />
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
        @dragend="playSound"
        draggable
      >
        <img src="/img/MinuteHand.svg" />
      </div>
      <div class="clockCenter"/>
      
    </div>
  </div>
</template>


<script>
import Hour from "./Hour.vue"

const blankImage = new Image();

const timeTag = (h, m) => {
  return `${String(h).padStart(2, "0")}${String(m).padStart(2, "0")}`;
};

const audioMap = {};
for (let h = 0; h < 12; h++) {
  for (let m = 0; m < 60; m += 5) {
    let tag = timeTag(h, m);
    audioMap[tag] = new Audio(`/audio/${tag}.mp3`);
  }
}

export default {
  name: "Clock",
  props: {
    clockSize: {
      type: Number,
      default: 500
    }
  },
  data() {
    return {
      minutes: 0,
      hours: 0,
      romans: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"]
    };
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
    },
    minuteHand() {
      let h = (this.clockSize / 2) * 0.7;
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
  methods: {
    rotate() {
      this.minutes += 5;
      if (this.minutes >= 60) {
        this.hours = (this.hours + 1) % 12;
      }
      this.minutes %= 60;
    },
    hourNumberPosStyle(i) {
        const r = 0.75*(this.clockSize / 2 - 30)
        const theta = (2 * Math.PI * i) / 12 - Math.PI / 2
      return {
          position: "absolute",
          left: this.clockSize/2 + r * Math.cos(theta) + "px",
          top: this.clockSize/2 + r * Math.sin(theta) + "px"
      }
    },
    hourNumberPosY(i) {
      return (
        (this.clockSize / 2 - 30) *
        Math.sin((2 * Math.PI * i) / 12 - Math.PI / 2)
      );
    },
    toClockCoord(handle) {
        console.log(this.$refs.clock.style)
        return {
            x: handle.clientX - this.clockSize/2 - this.$refs.clock.getBoundingClientRect().left,
            y: handle.clientY - this.clockSize/2 - this.$refs.clock.getBoundingClientRect().top,
        }
    },
    dragMinute(event) {
      event.preventDefault();
      event.dataTransfer.setDragImage(blankImage, 0, 0);
      if (event.x == 0 && event.y == 0) return;
      this.updateMinute(this.toClockCoord(event))
    },
    touchDragMinute(touchEvent) {
        const touch = touchEvent.touches[0]
        this.updateMinute(this.toClockCoord(touch))
    },
    updateMinute(coords) {
      let angle = Math.atan2(coords.y, coords.x) + 2.5 * Math.PI;

      let newMinutes = Math.floor((angle / (2 * Math.PI)) * 60) % 60;
      newMinutes = Math.round(newMinutes / 5.0) * 5;
      newMinutes %= 60;

      if (this.minutes <= 15 && newMinutes >= 45) {
        this.hours = (this.hours + 11) % 12;
      } else if (this.minutes >= 45 && newMinutes <= 15) {
        this.hours = (this.hours + 1) % 12;
      }

      this.minutes = newMinutes;
    },
    dragStartM(dragEvent) {
      dragEvent.dataTransfer.setDragImage(blankImage, 0, 0);
    },
    playSound: async function() {
      let tag = timeTag(this.hours, this.minutes);
      let soundToPlay = audioMap[tag];
      while (soundToPlay.readyState != HTMLMediaElement.HAVE_ENOUGH_DATA) {
        await new Promise(r => setTimeout(r, 10));
      }
      audioMap[tag].play();
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
}

html,
body {
  overflow: hidden;
}

.hour {
  transform-origin: center;
  top: 0px;
  left: 0px;
  position: absolute;
}
</style>