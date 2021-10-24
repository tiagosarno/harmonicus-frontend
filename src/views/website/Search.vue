<template>
  <b-container fluid>
    <b-card>
      <b-card-title>
        <h3>458 profissionais no momento</h3>
      </b-card-title>
      <b-card-body>
        <ItemsSearchPsychologists v-for="(item,i) in resultSearch" :key="i" />
      </b-card-body>
      <b-card-footer class="text-center">
        <span>Paginação de Resultados</span>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="my-table"
          size="lg"
          align="fill"
        ></b-pagination>
      </b-card-footer>
    </b-card>
  </b-container>
</template>

<script>
import ItemsSearchPsychologists from '../../components/ItemsSearchPsychologists.vue'
export default {
  components: { ItemsSearchPsychologists },
  data(){
    return{
      currentPage: 1,
      rows: 10,
      perPage: 10,
      resultSearch: [
        { value: 1, text: 'a' },
        { value: 1, text: 'a' },
        { value: 1, text: 'a' },
      ]
    }
  }
}
</script>

<style>

</style>