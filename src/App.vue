<template>
  <div id="app">
    <Asset/>
  </div>
</template>

<script>
import Asset from './components/Asset';
import AssetList from './components/AssetList';

export default {
  name: 'app',
  components: {
    Asset,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
