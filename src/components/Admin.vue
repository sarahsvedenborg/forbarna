<template>
  <div>
    <!-- <h2>Apper å administrere</h2> -->
    <div class="adminWrapper">
      <AdminNavBar :itemClicked="(selectedApp) => {selectedTab = selectedApp}"/>
      <div class="appAdmin">
        <AdminMemo v-if="selectedTab == 'CreateSet'" />
        <div v-else class="defaultAdminPanel">Velg en app å administrere</div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminMemo from "./AdminComponenets/AdminMemo";
import AdminNavBar from "./AdminComponenets/AdminNavBar";

export default {
  components: {
    AdminMemo,
    AdminNavBar
  },
  data() {
    return {
      selectedTab: ""
    };
  },
  computed: {},
  watch: {},
  methods: {
    logTest() {
      console.log("clicked");
    },
    sayHi() {
      console.log("hi");
    }
  }
};
</script>

<style scoped>
.adminWrapper {
  display: flex;
  flex-direction: row;
}
nav {
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.tab {
  border: 1px solid blue;
  border-radius: 10px 0px 0px 10px;
}

.active {
  border-right: 0px;
}

.appAdmin {
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.defaultAdminPanel {
  font-size: xx-large;
  font-weight: 700;
  color: rgba(200, 200, 200, 0.9);
}
</style>