<template>
  <div>
    <b-card-group columns>
      <Item 
        v-for="item in videos" :key="item"
        :video="item" />
    </b-card-group>
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
      videos: []
    }
  },
  created() {
    const _access = localStorage.getItem(userAccess)
    this.userId = JSON.parse(_access)

    this.$http.get(`/video/random/9999999`)
      .then(res => {
        res.data.map((item) => {
          this.videos.push({
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
  }
}
</script>

<style></style>