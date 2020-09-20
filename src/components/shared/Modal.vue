<template>
  <div class="overlay">
    <div class="modal">
      <slot />
      <Button buttonType="confirm" :action="close">OK</Button>
    </div>
  </div>
</template>

<script>
import Button from "./UI/Button";
export default {
  components: { Button },
  props: {
    close: {
      type: Function,
    },
  },
  data() {
    return {
      invisible: false,
    };
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(100, 100, 100, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}
.modal {
  padding: 5%;
  border-radius: 20px;
  background: white;
  color: var(--primary-color-dark);
  z-index: 3;
}
</style>