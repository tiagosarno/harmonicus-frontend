<template>
  <b-container class="mt-3" fluid>
    <b-card class="mb-4" bg-variant="outline-dark" text-variant="dark" title="">
      <h3>Meus Vídeos</h3>
      <hr />
      <b-button 
        :variant="variantNewVideoButton"
        @click="NewVideo">{{ textNewVideoButton }}</b-button>
      <FormNewVideo v-if="showNewVideo" />
    </b-card>
    <ItemsVideos type="admin" />
  </b-container>
</template>

<script>
import ItemsVideos from '@/components/psychologists/videos/ItemsVideos.vue'
import FormNewVideo from '@/components/psychologists/FormNewVideo.vue'
import bus from '@/bus'

export default {
  components: { ItemsVideos, FormNewVideo },
  data() {
    return {
      showNewVideo: false,
      variantNewVideoButton: 'primary',
      textNewVideoButton: 'Novo Vídeo',
      videoEmbed: null
    }
  },
  created(){
    bus.$on('hideFormNewVideo', booleanData => {
      console.log('event..hideFormNewVideo', booleanData)
      this.showNewVideo = booleanData
      this.NewVideo()
    })
  },  
  methods: {
    NewVideo() {
      if(this.showNewVideo == false) {
        this.showNewVideo = true
        this.variantNewVideoButton = 'outline-dark'
        this.textNewVideoButton = 'Cancelar inclusão do novo vídeo'
      }
      else {
        this.showNewVideo = false
        this.variantNewVideoButton = 'primary'
        this.textNewVideoButton = 'Novo Vídeo'
      }
    }
  }
}
</script>

<style>

</style>