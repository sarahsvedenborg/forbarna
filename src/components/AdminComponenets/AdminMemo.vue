<template>
  <div class="adminMemo">
    <h2>{{creatingNewSet ? 'Nytt sett med kort' : 'Eksisterende sett'}}</h2>
    <div class="panel">
      <ul v-if="!creatingNewSet">
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

      <CreateSetForm v-else :setCreated="() => {creatingNewSet = false}" />
    </div>
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
  created() {
    console.log("adminMemo created");
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
      deleteSet(setName);
    }
  }
};
</script>

<style scoped>
.adminMemo {
  width: 100%;
}
h2 {
  color: var(--primary-color-light);
}
.panel {
  background-color: var(--primary-color-light);
  width: 80%;
  margin: 0 auto;
  box-shadow: 0px 1px 7px 0px #888;
  margin-bottom: 30px;
  padding: 20px;
  display: flex;
  justify-content: center;
  height: 65vh;
}
.exsistingCards {
  background-color: var(--primary-color-light);
  width: 80%;
  margin: 0 auto;
}

ul {
  list-style: none;
  padding: 0px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: inherit;
  height: inherit;
}

li {
  border: 1px solid #414141;
  border-radius: 15px;
  position: relative;
  width: 200px;
  padding: 3px;
  margin: 5px;
  font-weight: bold;
}

li:nth-child(1) {
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