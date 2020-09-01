<template>
  <div>
    <div class="header">
      <h1>Velkommen til</h1>
      <img src="/img/forBarnaLogo.png" />
    </div>
    <div class="activitySelectionPanel">
      <router-link v-for="app in apps" :key="app.name" :to="app.path">
        <Tile :name="app.name" :src="app.img" />
      </router-link>
    </div>
  </div>
</template>

<script>
import Tile from "./shared/Tile";

export default {
  name: "Home",
  components: { Tile },
  data() {
    return {
      apps: [
        {
          name: "Lær klokka",
          img: "/img/clockThumbnail.png",
          path: "/lær/klokka"
        },
        {
          name: "Finn parene",
          img: "/img/MemoryThumbnail.png",
          path: "/memory"
        }
      ]
    };
  }
};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
}

.header h1 {
  color: var(--primary-color-light);
}
.header img {
  width: 40%;
}

.activitySelectionPanel {
  margin: 10%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
/* This styles the label inside a router-link */
a {
  text-decoration: none;
  color: var(--primary-color-dark);
  font-size: larger;
}
</style>