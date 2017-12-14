<template>
    <div>
        <input v-model="end" type="text">
        <button @click="simulate()">SIMULER</button>
        <el-table :data="simulation" style="width: 100%">
            <el-table-column prop="name" label="Produit financier" width="350">
            </el-table-column>
            <el-table-column prop="cumulatedAmount" label="Produit financier" width="350">
            </el-table-column>
        </el-table>
        <tr v-for="prod of simulation"><p>{{prod.name}}</p><td v-for="item of prod.totalAccumulatedAmount">{{item}}</td><td v-for="item of prod.cumulatedAmount">{{item}}</td></tr>
    </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
    name: 'simulation',
    computed: {
        simulation() {
            console.log(this.$store.state.simulation);
            return this.$store.state.simulation;
        },
    },
    methods: {
        simulate() {
            console.log('ok');
            console.log(this.end);
            this.$store.dispatch('LOAD_SIMULATION', this.end)
        }
    },
    data() {
        return {
            end: '',
        }
    },
}
</script>
<style>
table {
    margin-top: 30px;
}

.cell {
    text-align: center;
}
</style>