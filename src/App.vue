<template>
  <div id="app">
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <Card />
      </div>
    </div>
  </div>
</template>

<script>
import Card from './components/Card';
export default {
  name: 'App',
  components: {
    Card,
  }
}
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
