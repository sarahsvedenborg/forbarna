<template>
  <div class="menu">
    <div class="columnWrapper">
      <div v-for="subject in subjects" :key="subject" class="column">
          <h3>{{subject}}</h3>
          <ul>
              <li v-for="set in setsMetadata" :key="set.name" @click="selectSet(set.name)" :class="set.category != subject ? 'remove' : ''">{{ set.name }}</li>
          </ul>
          </div>
    </div>
  </div>
</template>
<script>
import {SetCategoryEnum} from '../../common/enums.js'
export default {
  props: {
    setsMetadata: {
      type: Array
    },
    selectSet: {
      type: Function
    }
  },
  data() {
    return {
      subjects: [SetCategoryEnum.ENGELSK, SetCategoryEnum.MATTE, SetCategoryEnum.ANDRE]
    };
  }
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
  color: var(--primary-color-dark)
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
h3{
    color: var(--primary-color-dark)
}
li:nth-of-type(6n+1){
    background-color: var(--color-orange)
}
li:nth-of-type(6n+2){
    background-color: var(--color-red)
}
li:nth-of-type(6n+3){
    background-color: var(--color-purple)
}
li:nth-of-type(6n+4){
    background-color: var(--color-green)
}
li:nth-of-type(6n+5){
    background-color: var(--color-yellow)
}
li:nth-of-type(6n+6){
    background-color: var(--color-blue)
}
</style>