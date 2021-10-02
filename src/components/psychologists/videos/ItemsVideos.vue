<template>
  <div>
    <b-card-group columns v-if="showVideos">
      <Item 
        v-for="item in videos" :key="item"
        :video="item" />
    </b-card-group>
    <b-card class="size-card" v-else>
      <b-alert show variant="danger" class="text-center">Você não possui nenhum vídeo até o momento</b-alert>
    </b-card>
  </div>
</template>

<script>
import Item from './Item.vue'
import { userAccess } from '@/global'
export default {
  props: ['type'],
  components: { Item },
  data() {
    return {
      videos: [],
      showVideos: false
    }
  },
  created() {   
    const _access = localStorage.getItem(userAccess)
    this.userId = JSON.parse(_access)
    this.$http.post(`/video/search`,{
      'id_psychologist': this.userId.id
    })
      .then(res => {
        res.data.map((item) => {
          this.videos.push({
            id: item.id,
            status: item.status,
            title: item.title,
            embed: item.video,
            created: item.created_at,
            description: item.description
          })
        })        
      })
  }
}
</script>

<style>
.size-card {
  height: 100vw;
}
</style>