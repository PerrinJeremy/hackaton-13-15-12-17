<template lang="html">
  <div id="assets">
     <Navbar />
    <div class="columns">
      <div class="column is-half">
        <div class="notification">
        </div>
        <el-row>
          <el-col :span="12"><Model /></el-col>
          <el-col :span="12"><UserAssets /></el-col>
        </el-row> 
        <br>
        <div class="situation">
<div>
  <h4>Situation Idéale au vue de vos souhaits</h4>
<el-progress :text-inside="true" :stroke-width="18" :percentage="10" text-inside="Compte Courant"></el-progress><span>Compte Courant</span>
<el-progress :text-inside="true" :stroke-width="18" :percentage="20" status="success"></el-progress><span>Epargne Disponible</span>
<el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress><span>Placements</span>
<el-progress :text-inside="true" :stroke-width="18" :percentage="20" status="warning"></el-progress><span>Biens Materiel</span>
</div>
<div ><h4>Votre Situation Actuelle</h4>
<el-progress :text-inside="true" :stroke-width="18" :percentage="60" ></el-progress><span>Compte Courant</span>
<el-progress :text-inside="true" :stroke-width="18" :percentage="40" status="success"></el-progress><span>Epargne Disponible</span>
<el-progress :text-inside="true" :stroke-width="18" :percentage="0" status="exception"></el-progress><span>Placements</span>
<el-progress :text-inside="true" :stroke-width="18" :percentage="0" status="warning"></el-progress><span>Biens Materiel</span>
</div>

        <div class="vide">vide</div>
        <simulation></simulation>
      </div>
    </div>
    <br>
    <div class ="footer">
      <img class="logo" src="../assets/amf-logo.jpg" alt="amf"  margin-top="10"width="70" height="50">
      <img class="logo1" src="../assets/acpr.png" alt="amf"  margin-top="10"width="70" height="50">
      <img class="logo2" src="../assets/Logo-Orias-2013(1).jpg" alt="amf"  margin-top="10"width="70" height="50">
    </div>
  </div>
  </div>
</template>
<script>
import AssetList from "../components/AssetList";
import UserAssets from "../components/UserAssets";
import store from "../store";
import Navbar from "../components/Navbar";
import Simulation from "../components/Simulation";
import footer from "../components/footer";
import progressiveBar from "../components/progressiveBar";
import Model from "../components/Model";


export default {
  name: "assets",
  components: {
    AssetList,
    UserAssets,
    Simulation,
    Navbar,
    footer,
    progressiveBar,
    Model
  },
  mounted: function() {
    this.$store.dispatch('LOAD_ASSETS_LIST');
    this.$store.dispatch('LOAD_USER_ASSETS_LIST');
  },
};
</script>
<style>
.vide{
height: 20px;
color:white;

}
.footer {
  height:70px;
  width:auto;
  background-color:#36abd7;
}
.logo{
  margin-top:10px;
  margin-left:200px;
  margin-right:200px;
}
.logo1{
  margin-top:10px;
  margin-left:200px;
  margin-right:200px;
}
.logo2{
  margin-top:10px;
  margin-left:200px;
  margin-right:200px;
}
.situation{
  margin-top:400px;
}
</style>