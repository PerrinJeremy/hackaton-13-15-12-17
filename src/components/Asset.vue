<template lang="html">
  <div id="assets">
     <Navbar />
    <div class="columns">
      <div class="column is-half">
        <div class="notification">
        </div>
        <AssetList />
        <UserAssets />
      </div>
    </div>
    <footer></footer>
  </div>
</template>
<script>
import AssetList from "../components/AssetList";
import UserAssets from "../components/UserAssets";
import store from "../store";
import Navbar from "../components/Navbar";

export default {
  name: "assets",
  components: {
    AssetList,
    UserAssets,
    Navbar,
  },
  mounted: function() {
    this.$store.dispatch("LOAD_ASSETS_LIST");
    this.$store.dispatch("LOAD_USER_ASSETS_LIST");
  }
};
</script>