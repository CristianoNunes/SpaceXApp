<template>
  <div class="card-expansion">
    <md-card>
      <md-card-media>
        <img :src="launch.links.patch.small" alt="Rocket">
      </md-card-media>

      <md-card-header>
        <div class="md-title">{{launch.name}}</div>
        <div class="md-subhead">Data</div>
      </md-card-header>

      <md-card-expand>
        <md-card-actions md-alignment="space-between">
          <div>
            <md-button>Action</md-button>
          </div>

          <md-card-expand-trigger>
            <md-button>Details</md-button>
          </md-card-expand-trigger>
        </md-card-actions>

        <md-card-expand-content>
          <md-card-content>
            {{launch.details}}
          </md-card-content>
        </md-card-expand-content>
      </md-card-expand>
    </md-card>
  </div>
</template>

<script>
export default {
  props: ["launch"]
}
</script>

<style>

</style>