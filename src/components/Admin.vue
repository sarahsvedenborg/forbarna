<template>
  <div>
    <div class="adminWrapper">
      <AdminNavBar :itemClicked="(selectedApp) => {selectedTab = selectedApp}" />
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
  }
};
</script>

<style scoped>
.adminWrapper {
  display: flex;
  flex-direction: row;
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
  color: rgba(0, 0, 0, 0.3);
  margin: 0 auto;
}
</style>