<template>
    <el-table :data="assets" style="width: 100%">
        <el-table-column prop="name" label="Produit financier" width="350">
        </el-table-column>
        <el-table-column prop="rate" label="Taux d'intérêt (%)" width="180">
        </el-table-column>
        <el-table-column prop="ratioRisk" label="Risque">
        </el-table-column>
    </el-table>
    <!-- <div class="">
        <table class="table">
            <thead>
                <tr>
                    <th>Asset Proposal</th>
                    <th>Taux d'intérêt</th>
                    <th>Risque</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in assets">
                    <td>{{item.name}}</td>
                    <td>{{item.rate}} %</td>
                    <td>{{item.ratioRisk}}</td>
                </tr>
            </tbody>
        </table>
    </div> -->
</template>
<script>
import { mapState } from 'vuex';

export default {
    name: 'assetlist',
    computed: {
        assets() {
            console.log(this.$store.state.assets)
        return this.$store.state.assets;
        },
    },
};
</script>
<style>
</style>