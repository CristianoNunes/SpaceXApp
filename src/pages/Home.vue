<template>
  <div class="main">
    <span class="md-display-1 titleAlign">Home - Future Launches</span>
    <div class="divSearch">
      <input type="text" class="searchInput" placeholder="Pesquisar por lançamento" v-model="search" />
      <md-button class="md-raised md-primary" @click="resultSearch">Search</md-button>
    </div>
    <div class="container">
      <Card v-for="launch in filteredLaunchs" :key="launch.id" :launch="launch" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Card from '../components/Card';
export default {
  data: () => {
    return {
      search: '',
      filteredLaunchs: [],
      launches: [],
    }
  },
  components: {
    Card,
  },
  methods: {
    resultSearch: function() {
      this.filteredLaunchs = this.launches;
      if(this.search == '' || this.search == ' '){
        return this.filteredLaunchs = this.launches;
      }else {
        return this.filteredLaunchs = this.launches.filter(launche => launche.name.match(this.search));
      }
    }
  },
  async created() {
    const { data } = await axios.get('https://api.spacexdata.com/v4/launches/upcoming');
    data.forEach(launch => {
      this.launches.push(launch);
    });
    this.filteredLaunchs = this.launches;
  }
}
</script>

<style>
  .main {
    align-items: center;
    display: flex;
    flex-direction: column;
  }
  .titleAlign {
    align-self: center;
    margin-top: 10px;
  }
  .divSearch {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 78%;
  }
  .searchInput {
    height: 40px;
    border: 1px solid black;
    border-radius: 20px;
    padding-left: 15px;
    width: 100%;
  }
  .searchInput:focus {
    height: 40px;
    border: 1px solid blue;
    border-radius: 20px;
    padding-left: 15px;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
  }
  
</style>