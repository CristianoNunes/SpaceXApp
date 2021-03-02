<template>
  <div class="main">
    <span class="md-display-1 titleAlign">Home - Future Launches</span>
    <div class="container">
      <Card v-for="launch in launches" :key="launch.id" :launch="launch" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Card from '../components/Card';
export default {
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
  .main {
    display: flex;
    flex-direction: column;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
  }
  .titleAlign {
    align-self: center;
    margin-top: 10px;
  }
</style>