<template>
  <div>
    <div class="container-form mb-4">      
        <b-input 
          v-model="valueSearch"
          placeholder="Digite para pesquisar.."
          @keypress.enter="searchArticles"
        />
        <b-button class="ml-2" 
          variant="outline-dark"
          @click="searchArticles">Pesquisar</b-button>
        <b-button class="ml-2" 
          variant="outline-danger"
          v-b-tooltip.hover title="Limpar formulário de pesquisa"
          @click="clearSearch">Limpar</b-button>
    </div>
    <b-alert show variant="danger" v-if="results == 0">
        Nenhum artigo encontrado</b-alert>
    <h5 class="mb-4 text-center no-user-select" v-if="results == 1">
      <b-badge variant="primary" class="p-2">
        Exibindo {{ results }} resultado</b-badge></h5>
    <h5 class="mb-4 text-center no-user-select" v-if="results > 1">
      <b-badge variant="primary" class="p-2">
        Exibindo {{ results }} resultados</b-badge></h5>
    <b-card-group columns v-if="results > 0">
      <Item 
        v-for="item in articles" :key="item.id"
        :article="item" />
    </b-card-group>
  </div>
</template>

<script>
import Item from './Item.vue'
export default {
  props: ['type'],
  components: { Item },
  data() {
    return {
      valueSearch: null,
      results: 0,
      articles: [],
    }
  },
  created() {
    this.getRandomArticles()    
  },
  methods: {
    getRandomArticles() {
      this.$http.get(`/article/random/9999999`)
        .then(res => {
          this.articles = []
          if(res.data.length == 0) {
            this.results = 0
          }
          res.data.map((item) => {
            this.results = res.data.length
            this.articles.push({
              id: item.id,
              id_psychologist: item.id_psychologist,
              status: item.status,
              title: item.title,            
              file: item.file,  
              created: item.created_at,
              description: item.description
            })
          })        
        })
    },
    clearSearch() {
      this.valueSearch = ''
      this.getRandomArticles()
    },
    searchArticles() {      
      if (this.valueSearch != '') {
        this.$http.post(`/article/search`,{
          'like': true,
          'key': 'title',
          'value': this.valueSearch,
          'key2': 'description',
          'value2': this.valueSearch,
          'key3': 'tags',
          'value3': this.valueSearch
        })
          .then(res => {
            this.articles = []
            if(res.data.length == 0) {
              this.results = 0
            }
            res.data.map((item) => {
              this.results = res.data.length
              this.articles.push({
                id: item.id,
                id_psychologist: item.id_psychologist,
                status: item.status,
                title: item.title,
                file: item.file,  
                created: item.created_at,
                description: item.description
              })
            })        
          })
      }
      else {
        this.clearSearch()
      }
    },
  }
}
</script>

<style></style>