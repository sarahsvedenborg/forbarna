<template>
  <div id="app">
    <NavBar v-if="this.$router.currentRoute.path != '/'"/>
    <router-view/>
  </div>
</template>

<script>
  import {defaultCache} from "./common/AudioCache";
  import NavBar from './components/shared/NavBar'

  export default {
    name: "App",
    components: {NavBar},
    mounted() {
      defaultCache.bootstrapElement(document.body);
      console.log("route", this.$router.currentRoute)
    }
  };
</script>

<style>
body{
  margin: 0px;
}
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
