<template>
  <div>
    <b-card-title>
      <strong>Vídeoteca</strong>&nbsp;
      <b-badge pill>Acervo atual {{ counterVideos }} vídeos</b-badge>
    </b-card-title>
    <b-card-body>
      <Item
        v-for="item in video" :key="item"
        :video="item" />
    </b-card-body>
    <b-card-footer>
      <b-link 
        :to="{ name: 'videos' }">
        ver todos <b-icon-chevron-double-right></b-icon-chevron-double-right>
      </b-link>
    </b-card-footer>
  </div>
</template>

<script>
import Item from './Item.vue'

export default {
  data(){
    return {
      video: [],
      counterVideos: 0
    }
  },
  components: { Item },
  created(){
    this.$http.get(`/video/random/1`)
      .then(res => {        
        res.data.map((item) => {
          this.video.push({
            id: item.id,
            id_psychologist: item.id_psychologist,
            status: item.status,
            title: item.title,
            embed: item.video,
            created: item.created_at,
            description: item.description            
          })          
        })        
      })

    this.$http.get(`/video/fullcount`).then(res => 
      this.counterVideos = res.data
    )
  }
}
</script>

<style></style>