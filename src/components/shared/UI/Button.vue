<template>
  <button @click="action ? action : null" :class="buttonType">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    action: {
      type: Function,
      required: false
    },
    buttonType: {
      type: String
    },
  }
};
</script>

<style scoped>
button {
  padding: 10px 30px;
  border-radius: 20px;
  font-weight: bold;
  border: 0px;
  cursor: pointer;
}

.primary {
  background-color: var(--color-fuksia);
  color: var(--primary-color-light);
  font-size: large;
}
</style>