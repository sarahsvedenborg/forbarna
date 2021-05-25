<template>
  <div class="message">
    <h2>Gratulerer!</h2>
    <h3>{{message}}</h3>
    <div>
      <img src="/img/golden_crown.jpg" width="300px" />
    </div>
    <router-link to="/">
      <Button buttonType="primary">Nytt spill</Button>
    </router-link>
  </div>
</template>

<script>
import Button from "./UI/Button";
export default {
    components: {
        Button
    },
    props:{
        message: {
            type: String
        }
    }
};
</script>

<style scoped>
.message{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;
}

.message h2{
color: var(--primary-color-dark);
}

.message img{
  width: 300px;
  transform: scale(0.5);
  animation-name: grow;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  margin-bottom: 30px;
}

@media screen and (max-width: 700px) {
.message{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
}

.message h2, .message h3{
color: var(--primary-color-dark);
font-size: medium;
margin: 10px;
}

.message img{
  width: 100px;
  transform: scale(0.5);
  animation-name: grow;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  margin-bottom: 30px;
}
}

@keyframes grow {
  from {transform: scale(0.5);}
  to {transform: scale(1);}
}
</style>