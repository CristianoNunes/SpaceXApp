<template>
  <a :href="history.links.article" target="_blank">
  <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">{{history.title}}</div>
          <div class="md-subhead">Date: {{historyDate}}</div>
        </md-card-header>

        <md-card-content class="with-text">
          {{history.details}}
        </md-card-content>

        <md-card-actions class="btnBottom">
          <md-button>Article</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
  </a>
</template>

<script>
import moment from 'moment';
export default {
props: ["history"],
computed: {
  historyDate: function() {
      return moment(this.history.event_date_utc).format("MM/DD/YYYY");
    },
}
}
</script>

<style scoped>
  .md-card {
    width: 320px;
    height: 300px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
  .with-text {
    overflow: hidden;
    position: relative;
    line-height: 1.4em;
    max-height: 6em; 
    text-align: justify;    
  }
  .with-text:before {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .btnBottom {
    margin-top: 40px;
  }
</style>