<template>
  <div>
    <b-card-group columns>
      <Item box="yes" footer="yes" v-for="i in 9" :key="i" />
    </b-card-group>
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