<template>
  <div :class="`activityTile ${size}`" @click="selectTab">
    <img :src="src" />
  </div>
</template>

<script>
export default {
    props: {
    src: {
      type: String
    },
    size: {
        type: String
    },
    selectTab: {
        type: Function
    }
  },
};
</script>

<style scoped>
.activityTile {
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  cursor: pointer;
}

.activityTile p {
  width: 3em;
  color: black;
}

.activityTile img {
  height: inherit;
}

.small {
    width: 5em;
    height: 5em;
}

.medium {
    width: 8em;
    height: 8em;
}
</style>