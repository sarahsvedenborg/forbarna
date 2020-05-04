<template>
  <div class="tabWrapper">
      <div class="tabs">
      <div :class="true ? 'tab selected' : 'tab'">Steg 1: Informasjon om settet</div>
      <div :class="false ? 'tab selected' : 'tab notSelected'">Steg 2: Fyll inn kortverdiene i settet</div>
    </div>
      <div class="tabPanel">
    <slot name="tab1"></slot>
    <slot name="tab2"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    isOpen: {
        type: Boolean
    }
  }
};
</script>

<style scoped>
.tabWrapper {
    width: 80%;
    margin: 0 auto;
}

.tabNumber{
    text-transform: uppercase;
    text-decoration: underline;
    font-weight: bold;
}

.tabs{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.tab{
/*   border: 1px solid black;  */
  padding: 10px;
  width: 50%;
  font-weight: bold;
  text-transform: uppercase;
}
.selected{
 /*  background-color:  #29b6f6; */
  color:black;
  border: 1px solid #29b6f6;
  border-bottom: 0px;
}

.notSelected {
    border-bottom: 1px solid #29b6f6;
}

.tabPanel {
    border: 1px solid #29b6f6;
    border-top: 0px;
    display: flex;
    flex-direction: row;
}
</style>