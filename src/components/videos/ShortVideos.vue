<template>
  <div>
    <b-card-title>
      <strong>Vídeoteca</strong> <b-badge pill>Acervo atual 154 vídeos</b-badge>
    </b-card-title>
    <b-card-body>
      <Item box="no" footer="yes" />
    </b-card-body>
    <b-card-footer>
      <b-link 
        :to="{ name: 'videos' }">
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