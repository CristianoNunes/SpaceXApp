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
        <md-toolbar class="md-transparent" md-elevation="0">Menu</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>flight</md-icon>
              <router-link to="/">
                <span class="md-list-item-text">Future Launches</span>
              </router-link>
          </md-list-item>

          <md-list-item>
            <md-icon>flight_land</md-icon>
            <router-link to="/pastlaunche">
              <span class="md-list-item-text linkMenu">Past Launches</span>
            </router-link>
          </md-list-item>

          <md-list-item>
            <md-icon>history_edu</md-icon>
            <router-link to="/HistoricalEvents">
              <span class="md-list-item-text">Historical Events</span>
            </router-link>
          </md-list-item>

          <md-list-item>
            <md-icon :md-src="rocket" />
            <router-link to="/Rockets">
              <span class="md-list-item-text">Rockets</span>
            </router-link>
          </md-list-item>
        </md-list>
      </md-app-drawer>
        
      <md-app-content>
        
        <router-view path="$router.key" />

      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  
  data: () => {
    return {
      menuVisible: false,
      rocket: require('./assets/rocket-icon.svg'),
    }
  },
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
</style>
