<template>
  <div class="card-expansion">
    <md-card class="md-elevation-8">
      <md-card-media>
        <img :src="rocket.flickr_images[0]" alt="Rocket" class="imgRocket" />
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{rocket.name}}</div>
        <div class="md-subhead">Company: {{rocket.company}}</div>
        <div class="md-subhead">Type: {{rocket.type}}</div>
        <div class="md-subhead">First Flight: {{firstFlightDate}}</div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <md-card-expand-trigger>
            <md-button>Details</md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>
            {{changeDetails}}
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  props: ["rocket"],
  computed: {
    // changeSrcImg: function() {
    //   const rocketImg = require('../assets/rocket.png');
    //   if(!this.rocket.links.patch.small){
    //     return rocketImg;
    //   }
    //   return this.launch.links.patch.small;
    // },
    changeDetails: function() {
      if(!this.rocket.description){
        return 'Without description';
      }
      return this.rocket.description;
    },
    firstFlightDate: function() {
      return moment(this.rocket.first_flight).format("MM/DD/YYYY");
    }
  }
}
</script>\

<style scoped>
  .card-expansion {
    height: 50%;
  }

  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
  .imgRocket {
    height: 300px;
    width: 100%;
  }
</style>