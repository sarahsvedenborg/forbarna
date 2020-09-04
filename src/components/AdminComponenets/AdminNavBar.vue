<template>
  <div class="navContainer">
    <div
      v-for="item in navItems"
      :key="item.appName"
      :class="item.appName == selected ? 'navElement selected' : 'navElement'"
      @click="click(item.appName)"
    >
      <img :src="item.image" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemClicked: {
      type: Function
    }
  },
  data() {
    return {
      navItems: [
        {
          image: "/img/MemoryThumbnail.png",
          appName: "CreateSet"
        },
        {
          image: "/img/clockThumbnail.png",
          appName: "Clock"
        }
      ],
      selected: ""
    };
  },
  methods: {
    click(appName) {
      this.selected = appName;
      this.itemClicked(appName);
    }
  }
};
</script>

<style scoped>
.navContainer {
  border: 2px solid grey;
  border-radius: 10px;
  background-color: var(--primary-color-light);
}

.navElement {
  border-radius: 10px;
  width: 50px;
  height: 50px;
  padding: 5px;
  cursor: pointer;
}

.navElement img {
  height: inherit;
}

.selected {
  background-color: yellow;
}
</style>