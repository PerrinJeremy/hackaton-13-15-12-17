<template>
    <table class="el-table">
        <tbody>
            <tr class="el-table__row" v-for="userasset of userassets" @click="remove(userasset)">
                <td>{{userasset.name}}</td>
                <td>{{userasset.rate}}</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import { mapState } from 'vuex';

export default {
    name: 'userAssetlist',
    computed: {
        userassets() {
            return this.$store.state.userassets;
        },
    },
    methods: {
        remove(asset) {
            this.$store.dispatch('REMOVE_ASSET',asset.idAsset)
        }
    }
};

</script>
<style>
table {
    margin-top: 30px;
}
</style>
