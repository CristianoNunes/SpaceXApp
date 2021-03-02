<template>
  <div id="app">
    <div class="md-layout md-gutter md-alignment-center">
      <Card v-for="launch in launches" :key="launch.id" :launch="launch" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Card from './components/Card';
export default {
  name: 'App',
  data: () => {
    return {
      launches: [],
    }
  },
  components: {
    Card,
  },
  async created() {
    const { data } = await axios.get('https://api.spacexdata.com/v4/launches/upcoming');
    data.forEach(launch => {
      this.launches.push(launch);
    });
  }
}
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
