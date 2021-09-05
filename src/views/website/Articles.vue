<template>
  <b-container fluid>
    <b-card>
      <b-card-title>Artigos <b-badge pill>Acervo atual 6.230 registros</b-badge></b-card-title>      
      <b-card-body>
        <div class="container-form mb-4">
          <b-form-select
            class="mr-2"
            v-model="frmAge"
            :options="ageOptions"></b-form-select>
          <b-form-input
            class="mr-2"
            placeholder="Pesquisar"></b-form-input>
          <b-button>Filtrar</b-button>
        </div>
        <ItemsArticles />
      </b-card-body>
    </b-card>
  </b-container>
</template>

<script>
import ItemsArticles from '../../components/public/articles/ItemsArticles.vue'
export default {
  components: { ItemsArticles }
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