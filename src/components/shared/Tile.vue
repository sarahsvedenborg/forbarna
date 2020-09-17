<template>
  <div class="tile">
    <img :src="src" />
    <label>{{name}}</label>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    src: {
      type: String,
    },
  },
};
</script>

<style scoped>
.tile {
  width: 200px;
  height: 200px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 7px 0px #888;
  margin: 1em;
  margin-bottom: 1em;
}

img {
  width: 125px;
}

label {
  margin-top: 20px;
  font-weight: bold;
}
</style>