<template>
  <div>
    <b-card no-body>
      <b-embed
        type="iframe"
        aspect="16by9"
        :src="this.video.embed"
        allowfullscreen></b-embed>
      <div class="mt-2 px-2">
        <span>por </span><b-link 
            :to="{ name: 'psyPage', params: { 'page': ownerPage } }"> 
            <strong v-b-tooltip.hover.top title="visitar perfil">{{ ownerName }}</strong>
        </b-link>
        <b-card-text>
          <strong>{{ this.video.title }}</strong><br />
          {{ this.video.description }}
        </b-card-text>
      </div>
      <template #footer>
        <small class="text-muted">Postado em {{ transformDate }}</small>
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
  }
};
</script>

<style lang="scss">
.short-video-description{
  display: flex;
  flex-direction: column;
}
</style>
