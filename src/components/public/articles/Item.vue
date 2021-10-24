<template>
  <div>
    <b-card
        border-variant="secondary"
        align="center">
        <b-card-text>
          <div class="mt-2 text-left">
            <h4>{{ this.article.title }}</h4>
            <span class="no-user-select">por </span>
            <b-link 
              :to="{ name: 'psyPage', params: { 'page': ownerPage } }"> 
              <strong v-b-tooltip.hover.top title="visitar perfil">{{ ownerName }}</strong>
            </b-link>
            <small class="text-muted no-user-select">, postado em {{ transformDate }}</small>     
            <h6>
              <b-badge 
                variant="info" class="mr-1 p-2 no-user-select"
                v-for="item in themes" :key="item.key">{{ item.value}}</b-badge></h6>
            <p><span>{{ this.article.description }}</span></p>
          </div>
        </b-card-text>
        <b-card-footer>
          <b-button
            variant="danger"
            @click="downloadArticle(article.file)">
            DOWNLOAD PDF</b-button>
          </b-card-footer>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ['article'],
  data() {
    return {
      ownerName: null,
      ownerPage: null,
      themes: [],
    }
  },  
  computed: {
    transformDate() {
      return new Date(this.article.created).toLocaleDateString()
    }
  },
  methods: {
    downloadArticle(file){
      console.log(file)
    }
  },
  created(){
    this.$http.get(`/psychologist/${this.article.id_psychologist}`, {})
      .then(psyRes => {
        this.ownerName = psyRes.data.name,
        this.ownerPage = psyRes.data.harmonicus_page              
      })
    this.$http.post(`/mediathemes/search`, {
      'key': 'id_article',
      'value': this.article.id
    })
      .then(res => {
        res.data.map((item) => {
          console.log(item.id_theme)
          if(item.id_theme > 0) {
            this.$http.get(`/themes/${item.id_theme}`, {})
              .then(result => {                
                this.themes.push({
                  'key': result.data.id,
                  'value': result.data.description
                })
              })
          }
        })
      })
  }
};
</script>

<style lang="scss"></style>
