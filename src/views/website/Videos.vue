<template>
  <b-container fluid>
    <b-card>
      <b-card-title class="no-user-select">Vídeos <b-badge pill>Acervo total {{ counter }} vídeos</b-badge></b-card-title>      
      <b-card-body>        
        <ItemsVideos />
      </b-card-body>
    </b-card>
  </b-container>
</template>

<script>
import ItemsVideos from '@/components/public/videos/ItemsVideos.vue'
export default {
  data(){
    return {
      counter: 0
    }
  },
  components: { ItemsVideos },
  created() {
    this.$http.get(`/video/fullcount`).then(res => 
      this.counter = res.data
    )
  }
}
</script>

<style>
.container-form {
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}
.item-select-form {
  display: flex;
  width: 24%;
  min-width: 300px;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
}
.item-input-form {
  display: flex;
  width: 24%;
  min-width: 300px;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
}
</style>