<template>
  <div class="main">
    <span class="md-display-1 titleAlign">Rockets</span>
    <div class="divSearch">
      <input type="text" class="searchInput" placeholder="Rocket search" v-model="search" />
      <md-button class="md-raised md-primary" @click="resultSearch">Search</md-button>
    </div>
    <div class="container">
      <CardRocket v-for="rocket in filteredRockets" :key="rocket.id" :rocket="rocket" />
    </div>
  </div>
</template>

<script>
import CardRocket from '../components/CardRocket';
import { api } from '../services/api';

export default {
  data: () => {
    return {
      search: '',
      filteredRockets: [],
      rockets: [],
    }
  },
  components: {
    CardRocket,
  },
  methods: {
    resultSearch: function() {
      this.filteredRockets = this.rockets;
      if(this.search == '' || this.search == ' '){
        return this.filteredRockets = this.rockets;
      }else {
        return this.filteredRockets = this.rockets.filter(rocket => rocket.name.match(this.search));
      }
    }
  },
  async created() {
    const { data } = await api.get('rockets');
    data.forEach(rocket => {
      this.rockets.push(rocket);
    });
    this.filteredRockets = this.rockets;
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