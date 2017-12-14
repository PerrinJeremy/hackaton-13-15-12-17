<template lang="html">
  <div id="assets">
    <div class="columns">
      <div class="column is-half">
        <div class="notification">
          Asset List
        </div>
        <el-row>
          <el-col :span="12"><AssetList /></el-col>
          <el-col :span="12"><UserAssets /></el-col>
        </el-row> 
        <simulation /> 
      </div>
    </div>
  </div>
</template>
<script>
import AssetList from './AssetList';
import UserAssets from './UserAssets';
import Simulation from './Simulation';

import store from '../store';

export default {
  name: 'assets',
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