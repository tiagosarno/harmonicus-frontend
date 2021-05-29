<template>
  <div>
    <b-card no-body class="overflow-hidden">
      <b-row no-gutters>
        <b-col md="6">
          
            <b-link 
              tag="router-link" 
              :to="{ name: 'signUp' }">              
              <img src="@/assets/videos/v2.png" 
                width="260"
                v-b-tooltip.hover
                title="Assistir" />
            </b-link>
          
        </b-col>
        <b-col md="6">
          <div class="ma-2 mt-2 ml-2 short-video-description">
            <b-link 
              tag="router-link" 
              :to="{ name: 'signUp' }">
              <strong v-b-tooltip.hover.top title="Assistir">Título do Vídeo</strong>
            </b-link>
            <span class="small mb-2">por: <b-link 
              tag="router-link" 
              :to="{ name: 'signUp' }">
              <strong v-b-tooltip.hover.top title="visitar perfil">Rosane M M Rocha</strong>
            </b-link></span>
            <span>Breve descrição do vídeo...</span>          
          </div>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  
};
</script>

<style lang="scss">
.short-video-description{
  display: flex;
  flex-direction: column;
}
</style>
