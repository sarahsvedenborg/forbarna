<template>
  <div>
    <div class="exsistingCards" v-if="!creatingNewSet">
      <ul>
        <li>
          <strong>Eksisterende sett</strong>
        </li>
        <li v-for="(setName, i) in sets" :key="i">
          {{ setName }}
          <span class="deleteIcon" @click="triggerDelete">X</span>
        </li>
      </ul>
      <Button :action="() => creatingNewSet = true">Lag nytt</Button>
    </div>
    <CreateSetForm v-else :setCreated="() => {creatingNewSet = false}" />
  </div>
</template>

<script>
import CreateSetForm from "./CreateSetForm.vue";
import { getSetNames } from "../memo/sets.js";
import Button from "../shared/UI/Button";

export default {
  components: {
    CreateSetForm,
    Button
  },
  data() {
    return {
      creatingNewSet: false,
      sets: getSetNames()
    };
  },
  methods: {
    triggerDelete() {
      alert(
        "Er du sikker på at du vil slette dette settet? Handlingen kan ikke angres."
      );
    }
  }
};
</script>

<style scoped>
h2 {
  border-bottom: 1px solid black;
}
.exsistingCards {
  display: flex;
  flex-direction: row;
  align-items: center;
}

ul {
  list-style: none;
}

li {
  border: 1px solid blue;
  border-radius: 15px;
  position: relative;
  width: 200px;
  padding: 3px;
  margin: 5px;
}

 li:nth-child(1) {
  border: 0px;
}

/* li:nth-last-child(1) {
  border: 0px;
} */

.deleteIcon {
  position: absolute;
  right: 10px;
  cursor: pointer;
}
</style>