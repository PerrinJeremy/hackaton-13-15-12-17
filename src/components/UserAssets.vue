<template>
    <div class="">
        <table class="table">
            <thead>
                <tr>
                    <th>Produit financier</th>
                    <th>Montant</th>
                    <th>Taux d'intérêt</th>
                    <th>Risque</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="userItem in userassets">
                    <td>{{userItem.name}}</td>
                    <td>{{userItem.amount}} €</td>
                    <td>{{userItem.rate*100}} %</td>
                    <td>{{userItem.idAssetCategory}}</td>
                </tr>
            </tbody>
        </table>
    </div>
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
};

</script>
<style>
table {
    margin-top: 30px;
}
</style>
