<template>
  <div>
    <div class="background">
      <h1>Velkommen til</h1>
      <img class="logoImage" src="/img/ForBarnaLogo.png" />
    </div>
    <div class="activitySelectionPanel">
      <router-link to="/lær/klokka">
      Lær klokka
        <div class="activityTile">
          <img src="/img/clockThumbnail.png">
        </div>
      </router-link>
      <router-link to="/memory">
      Finn parene
        <div class="activityTile">
<img src="/img/MemoryThumbnail.png">
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.background {
  width: 100%;
  background-color: #29b6f6;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

h1 {
  color: white;
}
.logoImage {
  position: absolute;
  bottom: -20%;
  width: 40%;
}

@media screen and (max-width: 600px){
  .background{
    height: 10vh;
  }
  .logoImage{
   bottom: -25%;
  }
}

.activitySelectionPanel {
  margin: 15% 10%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.activityTile {
  width: 8em;
  height: 8em;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
}

.activityTile p {
  width: 3em;
  color: black;
}

.activityTile img {
  height: inherit;
}

a {
  text-decoration: none;
  color: black;
  font-size: larger;
}
</style>