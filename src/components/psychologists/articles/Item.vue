<template>
  <div>
    <b-card
        border-variant="secondary"
        align="center">
        <b-card-text>
          <div class="ma-2 mt-2 ml-2 description">
            <h4>Título do Artigo</h4>
            <span class="small mb-2">Postado em 15/07/2021</span>
            <span>Breve descrição do artigo...</span>
          </div>
        </b-card-text>
        <b-card-footer>
          <b-button
            variant="danger"
            @click="downloadArticle('teste.pdf')">
            DOWNLOAD PDF</b-button>          
          </b-card-footer>
    </b-card>
  </div>
</template>

<script>
export default {
  methods: {
    downloadArticle(file){
      console.log(file)
    }
  }
};
</script>

<style lang="scss">
.description {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.text-link{ color: white; }
</style>
