<template lang="html">
  <div id="assets">
     <Navbar />
    <div class="columns">
      <div class="column is-half">
        <div class="notification">
        </div>
        <el-row>
          <el-col :span="12"><AssetList /></el-col>
          <el-col :span="12"><UserAssets /></el-col>
        </el-row> 
        <simulation /> 
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
import Simulation from "../components/Simulation";

export default {
  name: "assets",
  components: {
    AssetList,
    UserAssets,
    Simulation
  },
  mounted: function() {
    this.$store.dispatch('LOAD_ASSETS_LIST');
    this.$store.dispatch('LOAD_USER_ASSETS_LIST');
  },
};
</script>