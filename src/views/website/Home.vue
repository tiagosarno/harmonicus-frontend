<template>
  <b-container fluid class="mt-3">
    <b-card-group deck>
      <b-card no-body>
        <b-card-body>
          <ShortVideos />
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-body>
          <Wellcome />
        </b-card-body>
      </b-card>
    </b-card-group>

    <b-card-group deck class="mt-3">
      <b-card no-body>
        <b-card-body>          
          <ShortArticles />
        </b-card-body>
      </b-card>
      <b-card no-body>
        <b-card-body>
          <WhoIsHarmonicus />
        </b-card-body>
      </b-card>
    </b-card-group>
  </b-container>
</template>

<script>
import ShortArticles from "../../components/articles/ShortArticles.vue"
import ShortVideos from "../../components/videos/ShortVideos.vue"
import Wellcome from '../../components/Wellcome.vue'
import WhoIsHarmonicus from '../../components/WhoIsHarmonicus.vue'

export default {
  components: { ShortArticles, ShortVideos, Wellcome, WhoIsHarmonicus },
};
</script>

<style lang="scss">
.internal {
  display: flex;
  height: 650px;
  width: 100%;
  margin-top: 10px;
}
</style>
