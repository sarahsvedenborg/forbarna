<template>
  <div id="app">
    <NavBar/>
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
html { 
  background: url('/img/background.svg') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  --color-pink: #F6307C;
  --color-fuksia: #BE27AD;
  --color-purple: #6F2FEF;
  --color-blue: #258CE1;
  --color-green: #28F54E;
  --color-lime: #ABFF07;
  --color-yellow: #FDF300;
  --color-orange: #FF9D00;
  --color-bloodorange: #FC6138;
  --color-red: #FB3535;
  --primary-color-light: #fff;
  --primary-color-dark: #000;
}
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
