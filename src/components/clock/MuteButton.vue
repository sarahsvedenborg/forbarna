<template>
  <div>
    <div id="muteButton" :class="classes" @click="toggle"></div>
  </div>
</template>

<script>
  export default {
    name: "MuteButton",
    props: {
      startMuted: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        muted: this.startMuted
      }
    },
    computed: {
      classes() {
        return {
          muted: this.muted,
          unmuted: !this.muted
        }
      }
    },
    methods: {
      toggle() {
        this.muted = !this.muted;
        this.$emit("toggle", {muted: this.muted})
      }
    }
  }
</script>

<style scoped>
  #muteButton {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }

  .unmuted {
    background-image: url("/img/icons/VolumeOnPurple.svg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .muted {
    background-image: url("/img/icons/VolumeOffPurple.svg");
    background-repeat: no-repeat;
    background-size: cover;
  }

</style>