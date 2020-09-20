<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import { defaultCache } from "./common/AudioCache";
import NavBar from "./components/shared/NavBar";

export default {
  name: "App",
  components: { NavBar },
  mounted() {
    defaultCache.bootstrapElement(document.body);
    console.log("route", this.$router.currentRoute);
  },
};
</script>

<style>
html {
  background: url("/img/background.svg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  --color-pink: #f6307c;
  --color-fuksia: #be27ad;
  --color-purple: #6f2fef;
  --color-blue: #258ce1;
  --color-green: #28f54e;
  --color-lime: #abff07;
  --color-yellow: #fdf300;
  --color-orange: #ff9d00;
  --color-bloodorange: #fc6138;
  --color-red: #fb3535;
  --primary-color-light: #fff;
  --primary-color-dark: #000;
}
body {
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1 {
  color: var(--primary-color-light);
  margin-top: 0px;
}
</style>
