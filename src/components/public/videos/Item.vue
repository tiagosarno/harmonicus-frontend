<template>
  <div>
    <b-card no-body>
      <b-embed
        type="iframe"
        aspect="16by9"
        :src="this.video.embed"
        allowfullscreen></b-embed>
      <div class="mt-2 px-2">
        <span class="no-user-select">por </span><b-link 
            :to="{ name: 'psyPage', params: { 'page': ownerPage } }"> 
            <strong v-b-tooltip.hover.top title="visitar perfil">{{ ownerName }}</strong>
        </b-link>
        <h6>
          <b-badge 
            variant="info" class="mr-1 p-2 no-user-select"
            v-for="item in themes" :key="item.key">{{ item.value}}</b-badge></h6>
        <b-card-text>
          <strong>{{ this.video.title }}</strong><br />
          {{ this.video.description }}
        </b-card-text>
      </div>
      <template #footer>
        <small class="text-muted no-user-select">Postado em {{ transformDate }}</small>
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ['video'],
  data() {
    return {
      ownerName: null,
      ownerPage: null,
      themes: [],
    }
  },
  computed: {
    transformDate() {
      return new Date(this.video.created).toLocaleDateString()
    }
  },
  created(){
    this.$http.get(`/psychologist/${this.video.id_psychologist}`, {})
      .then(psyRes => {
        this.ownerName = psyRes.data.name,
        this.ownerPage = psyRes.data.harmonicus_page              
      })
    this.$http.post(`/mediathemes/search`, {
      'key': 'id_video',
      'value': this.video.id
    })
      .then(res => {
        res.data.map((item) => {
          console.log(item.id_theme)
          if(item.id_theme > 0) {
            this.$http.get(`/themes/${item.id_theme}`, {})
              .then(result => {                
                this.themes.push({
                  'key': result.data.id,
                  'value': result.data.description
                })
              })
          }
        })
      })
  }
};
</script>

<style lang="scss">
.short-video-description{
  display: flex;
  flex-direction: column;
}
</style>
