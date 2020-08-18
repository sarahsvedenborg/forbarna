<template>
  <div class="tabWrapper">
    <div class="tabs">
      <div
        :class="openTab == 1 ? 'tab selected' : 'tab notSelected'"
        @click="openTab = 1"
      >Metadata</div>
      <div
        :class="openTab == 2 ? 'tab selected' : 'tab notSelected'"
        @click="openTab = 2"
      >Kortverdier</div>
    </div>
    <div class="tabPanel">
      <slot name="tab1" v-if="openTab == 1"></slot>
      <slot name="tab2" v-else></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    openTabProp: {
      type: Number
    }
  },
  updated() {
    console.log("openTab", this.openTab)
  },
  data() {
    return {
      openTab: this.openTabProp
    };
  }
};
</script>

<style scoped>
.tabWrapper {
  margin: 0 auto;
}

.tabNumber {
  text-transform: uppercase;
  text-decoration: underline;
  font-weight: bold;
}

.tabs {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.tab {
  /*   border: 1px solid black;  */
  padding: 10px;
  width: 50%;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 10px 10px 0px 0px;
  cursor: pointer;
}
.selected {
  /*  background-color:  #29b6f6; */
  color: white;
  border: 1px solid #29b6f6;
 /*  border-bottom: 0px; */
 background-color: #29b6f6;
}

.notSelected {
  border: 1px solid #29b6f6;
}

.tabPanel {
  border: 1px solid #29b6f6;
  border-top: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>