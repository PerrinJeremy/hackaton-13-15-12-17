<template>
    <div>
        <el-button type="warning"  @click="simulate()">Calculer le gain potentiel de vos investisments</el-button>
        <br>
        <br>
        <div class="table">
        <el-input class="gain"placeholder="saisir une année " v-model="end" type="text" style="width: 25%"></el-input>
        <div v-if="isAppear">
        <el-table :data="simulation" style="width: 100%">
            <el-table-column prop="name" label="Produit Détenus" width="350">
            </el-table-column>
            <el-table-column prop="cumulatedAmount" label="Gains Cumulés" width="350">
            </el-table-column>
        </el-table>
       <!--  <tr v-for="prod of simulation" ><p>{{prod.name}}
            </p><td v-for="item of prod.totalAccumulatedAmount">{{item}}
                </td><td v-for="item of prod.cumulatedAmount">{{item}}</td></tr> -->
        </div>
       </div>
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
            this.isAppear=true
            this.$store.dispatch('LOAD_SIMULATION', this.end)
        }
    },
    data() {
        return {
            isAppear:false,
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
.placeholder {
    text-color: black;
}
.table {
    margin-left:20%;
}
.gain{
    margin-right:25%
}
</style>