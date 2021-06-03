<template>
  <div>
    <b-card-title>
      <strong>Vídeoteca</strong> <span>últimos adicionados <b-badge pill>154 vídeos</b-badge></span>
    </b-card-title>
    <b-card-body>
      <Item />
      <Item class="mt-2"/>
    </b-card-body>
    <b-card-footer>
      <b-link 
        :to="{ name: '' }">
        ver todos <b-icon-chevron-double-right></b-icon-chevron-double-right>
      </b-link>
    </b-card-footer>
  </div>
</template>

<script>
import Item from './Item.vue'

export default {
  components: { Item }
}
</script>

<style>

</style>