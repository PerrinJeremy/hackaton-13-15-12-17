<template>
  <table class="el-table">
    <tbody>
      <tr class="el-table__row" v-for="asset of assets" @click="select(asset)">
        <td>{{asset.name}}</td>
        <td>{{asset.rate}}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { mapState } from 'vuex';
import store from '../store';

export default {
  name: 'assetlist',
  computed: {
    assets: () => store.state.assets
  },
  data() {
    return {
      newAsset: {
        idUser: 2,
        idAssetModel: '',
        name: '',
        amount: '2000',
        rate: '',
        start: null,
        end: null
      }
    }
  },
  methods: {
    select(asset) {
      console.log('ok');
      this.newAsset.idAsset=asset.idAsset,
      this.newAsset.idAssetModel=asset.idAssetModel,
      this.newAsset.name=asset.name,
      this.newAsset.rate=asset.rate
      console.log(this.newAsset)
      this.$store.dispatch('ADD_ASSET',this.newAsset)
    }
  }
};
</script>
<style>
table {
  margin-top: 30px;
}

.cell {
  text-align: center;
}
</style>