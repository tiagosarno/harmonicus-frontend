<template>
  <div id="app">
    <Header v-if="!renderAdmin" />
    <NavBarAdmin v-else />
    <router-view/>
    <Footer v-if="!renderAdmin" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import NavBarAdmin from '@/components/NavBarAdmin.vue'

export default {
  data() {
    return {
      
    }
  },
  components: { Header, Footer, NavBarAdmin },
  computed: mapGetters({
    renderAdmin: 'renderAdmin'
  }),
}
</script>

<style lang="scss">
  @import 'styles/_custom.scss';  
</style>