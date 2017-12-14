<template lang="html">
  <div id="assets">
    <div class="columns">
      <div class="column is-half">
        <div class="notification">
          Asset List
        </div>
        <AssetList />
        <UserAssets />
      </div>
    </div>
  </div>
</template>
<script>
import AssetList from '../components/AssetList';
import UserAssets from '../components/UserAssets';
import store from '../store';

export default {
  name: 'assets',
  components: {
    AssetList,
    UserAssets,
  },
  mounted: function () {
    this.$store.dispatch('LOAD_ASSETS_LIST');
    this.$store.dispatch('LOAD_USER_ASSETS_LIST');
  },
};
</script>