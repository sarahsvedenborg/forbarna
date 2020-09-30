<template>
  <div class="menu">
    <div class="columnWrapper">
      <div v-for="category in Object.keys(categories)" :key="category" class="column">
        <h3>{{category}}</h3>
        <ul>
          <li
            v-for="group in categories[category]"
            :key="group.name"
            @click="selectSet(group.name)"
          >{{ group.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    categories: {
      type: Object,
    },
    selectSet: {
      type: Function,
    },
  },
};
</script>
<style scoped>
.remove {
  display: none;
}
.menu {
  font-size: larger;
}
.menu ul {
  padding: 0px;
}
.menu li {
  list-style: none;
  font-size: small;
  margin: 10px auto;
  border-radius: 30px;
  padding: 15px 5px;
  width: 150px;
  text-transform: uppercase;
  background-color: white;
  cursor: pointer;
  font-weight: bold;
  color: var(--primary-color-dark);
}
@media screen and (max-width: 700px) {
  .menu {
    font-size: medium;
  }

  .menu li{
    margin: 10px auto;
    width: 80px;
    padding: 8px 10px;
    font-size: x-small;
  }
}
.columnWrapper {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
}
.column {
  width: 20%;
  background-color: white;
  box-shadow: 0px 1px 7px 0px #888;
  margin: 20px;
}
h3 {
  color: var(--primary-color-dark);
}
li:nth-of-type(6n + 1) {
  background-color: var(--color-lime);
}
li:nth-of-type(6n + 2) {
  background-color: var(--color-orange);
}
li:nth-of-type(6n + 3) {
  background-color: var(--color-blue);
}
li:nth-of-type(6n + 4) {
  background-color: var(--color-pink);
}
li:nth-of-type(6n + 5) {
  background-color: var(--color-yellow);
}
li:nth-of-type(6n + 6) {
  background-color: var(--color-purple);
}
</style>