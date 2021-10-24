<template>
  <b-container fluid>
    <b-card>
      <b-card-title>Artigos <b-badge pill>Acervo total {{ counter }} artigos</b-badge></b-card-title>      
      <b-card-body>        
        <ItemsArticles />
      </b-card-body>
    </b-card>
  </b-container>
</template>

<script>
import ItemsArticles from '../../components/public/articles/ItemsArticles.vue'
export default {
  data(){
    return {
      counter: 0
    }
  },
  components: { ItemsArticles },
  created() {
    this.$http.get(`/article/fullcount`).then(res => 
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