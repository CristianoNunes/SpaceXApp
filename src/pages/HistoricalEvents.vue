<template>
  <div class="main">
    <span class="md-display-1 titleAlign">Historical Events</span>
    <div class="container">
      <CardHistory v-for="history in historys" :key="history.id" :history="history" />
    </div>
  </div>
</template>

<script>
import CardHistory from '../components/CardHistory';
import { api } from '../services/api';

export default {
  data: () => {
    return {
      historys: [],
    }
  },
  components: {
    CardHistory,
  },
  async created() {
    const { data } = await api.get('history');
    data.forEach(history => {
      this.historys.push(history);
    });
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
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
  }
  
</style>