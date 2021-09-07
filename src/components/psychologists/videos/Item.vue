<template>
  <div>
    <b-card>
      <b-card-title 
        :title="title"
        class="text-right">
        <b-button
          variant="outline-dark"
          size="sm"
          v-b-tooltip.hover
          v-if="this.video.status == 0"
          class="mr-2"
          title="Este vídeo aguarda por moderação para ser publicado na plataforma">
          Aguardando Moderação
        </b-button>
        <b-button
          variant="success"
          size="sm"
          v-b-tooltip.hover
          v-else
          class="mr-2"
          title="Vídeo aprovado! Este vídeo está sendo divulgado para todos.">
          Vídeo Publicado
        </b-button>
        <b-button
          @click="deleteVideo"
          variant="outline-danger"
          size="sm"
          v-b-tooltip.hover
          v-if="this.video.status > 0"          
          title="Excluir Vídeo">
          <b-icon-trash></b-icon-trash> Excluir
        </b-button>
      </b-card-title>
      <b-embed
        type="iframe"
        aspect="16by9"
        :src="this.video.embed"
        allowfullscreen></b-embed>
      <div class="mt-2">        
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
    }
  },
  computed: {
    transformDate() {
      return new Date(this.video.created).toLocaleDateString()
    }
  },  
  methods: {
    deleteVideo() {
      if(confirm('Tem certeza que deseja remover definitivamente este vídeo?')) {
        console.log(this.video.id)
        this.$http.delete(`/video/${this.video.id}`, {})
          .then(() => {
            this.$toasted.global.defaultSuccess({ 
                msg: 'Vídeo removido com sucesso!'
            })
          })
          .catch(res => {
            this.$toasted.global.defaultError({ 
                msg: 'Problemas ao remover vídeo. Error: ' + res
            })
          })
      }
    }
  }
};
</script>

<style lang="scss">
.short-video-description{
  display: flex;
  flex-direction: column;
}
</style>
