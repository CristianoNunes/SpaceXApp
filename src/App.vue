<template>
  <div id="app" class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Space X API</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <div class="container">  
          <Card v-for="launch in launches" :key="launch.id" :launch="launch" />
        </div>
      </md-app-content>
    </md-app>
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
      menuVisible: false,
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

<style scoped>
  .md-app {
    max-height: 100vh;
    border: 1px solid rgba(#000, .12);
  }
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

</style>

