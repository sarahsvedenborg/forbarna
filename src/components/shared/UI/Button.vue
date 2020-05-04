<template>
    <button @click="action()">
        <slot />
    </button>
</template>

<script>
export default {
    props: {
        action: {
            type: Function
        }
  }
    
}
</script>

<style scoped>
button {
  border-radius: 20px;
  background-color:#29b6f6;
  border: none;
  color: white;
  font-weight: bold;
  height: 3em;
    width: 100px;
    font-size: 1.2em;
    cursor: pointer;
}
</style>