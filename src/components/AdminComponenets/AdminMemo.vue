<template>
  <div class="adminMemo">
    <div class="exsistingCards" v-if="!creatingNewSet">
      <ul>
        <h2>Eksisterende sett</h2>
        <li>
          <button class="confirmButton" @click="() => creatingNewSet = true">
            <font-awesome-icon :icon="['fas','plus']" size="sm" />Nytt sett
          </button>
        </li>
        <li v-for="(set, i) in sets" :key="i">
          {{ set.name }}
          <font-awesome-icon
            :icon="['fas','trash']"
            @click="() => triggerDelete(set.name)"
            class="deleteIcon"
            :style="{ color: '#414141' }"
          />
        </li>
      </ul>
    </div>
    <CreateSetForm v-else :setCreated="() => {creatingNewSet = false}" />
  </div>
</template>

<script>
import CreateSetForm from "./CreateSetForm.vue";
import { getSetsMetadata } from "../memo/sets.js";
import { deleteSet } from "../memo/sets.js";
/* import * as firebase from "firebase/app"; */

export default {
  components: {
    CreateSetForm
  },
  created(){
    console.log("adminMemo created")
/* console.log("result", firebase.database().ref('setNames').set({
    x: getSetsMetadata()
  })); */
  },
  data() {
    return {
      creatingNewSet: false,
      sets: getSetsMetadata()
    };
  },
  methods: {
    triggerDelete(setName) {
      deleteSet(setName)
    },
  }
};
</script>

<style scoped>
.exsistingCards {
  display: flex;
  flex-direction: row;
}

ul {
  list-style: none;
  padding: 0px;
}

li {
  border: 1px solid #414141;
  border-radius: 15px;
  position: relative;
  width: 200px;
  padding: 3px;
  margin: 5px;
}

li:nth-child(1) {
  border: 0px;
}
li:nth-child(2) {
  border: 0px;
}

.deleteIcon {
  position: absolute;
  right: 10px;
  cursor: pointer;
}

.confirmButton {
  background-color: #29b6f6;
  border-radius: 2em;
  padding: 5px 10px;
  color: white;
  border: 0px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  height: 2em;
  width: 200px;
  border: 1px solid#29b6f6;
}
</style>