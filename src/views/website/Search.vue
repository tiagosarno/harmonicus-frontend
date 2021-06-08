<template>
  <b-container fluid>
    <b-card>
      <b-card-title>
        <h3>Foram encontrados <span class="small">(458 psicólogos)</span></h3>
      </b-card-title>
      <b-card-body>
        <ItemsSearchPsychologists v-for="(item,i) in resultSearch" :key="i" />
      </b-card-body>
      <b-card-footer class="text-center">
        <b-button 
          variant="primary">mostrar mais<b-icon-arrow-down></b-icon-arrow-down>
        </b-button>
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
      resultSearch: [
        { value: 1, text: 'a' },
      ]
    }
  }
}
</script>

<style>

</style>