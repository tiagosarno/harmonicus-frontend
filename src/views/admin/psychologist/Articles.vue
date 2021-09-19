<template>
  <b-container class="mt-3" fluid>
    <b-card class="mb-4" bg-variant="outline-dark" text-variant="dark" title="">
      <h3>Meus Artigos</h3>
      <hr />
      <b-button 
        :variant="variantNewArticleButton"
        @click="NewArticle">{{ textNewArticleButton }}</b-button>
      <FormNewArticle v-if="showNewArticle" />
    </b-card>
    <ItemsArticles type="admin" />
  </b-container>
</template>

<script>
import ItemsArticles from '@/components/psychologists/articles/ItemsArticles.vue'
import FormNewArticle from '@/components/psychologists/FormNewArticle.vue'
import bus from '@/bus'

export default {
  components: { ItemsArticles, FormNewArticle },
  data() {
    return {
      showNewArticle: false,
      variantNewArticleButton: 'primary',
      textNewArticleButton: 'Novo Vídeo',
      aricleEmbed: null
    }
  },
  created(){
    bus.$on('hideFormNewArticle', booleanData => {
      console.log('event..hideFormNewArticle', booleanData)
      this.showNewArticle = booleanData
      this.NewArticle()
    })
  },  
  methods: {
    NewArticle() {
      if(this.showNewArticle == false) {
        this.showNewArticle = true
        this.variantNewArticleButton = 'outline-dark'
        this.textNewArticleButton = 'Cancelar inclusão do novo vídeo'
      }
      else {
        this.showNewArticle = false
        this.variantNewArticleButton = 'primary'
        this.textNewArticleButton = 'Novo Vídeo'
      }
    }
  }
}
</script>

<style>

</style>