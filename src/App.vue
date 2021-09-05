<template>
  <div id="app">
    <Header v-if="renderAdmin.show === false" />
    <NavBarAdmin v-else />
    <router-view/>
    <Footer v-if="!renderAdmin.show" />
  </div>
</template>

<script>
import { userKey, userAccess } from '@/global'
import { mapGetters } from 'vuex'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import NavBarAdmin from '@/components/NavBarAdmin.vue'

export default {
  data() {
    return {
      validatingToken: true
    }
  },
  components: { Header, Footer, NavBarAdmin },
  computed: mapGetters({
    renderAdmin: 'renderAdmin'
  }),
  methods: {
    async validateToken() {
      this.validatingToken = true
      const json = localStorage.getItem(userKey)
      const userData = JSON.parse(json)      

      const _access = localStorage.getItem(userAccess)
      const jsonUserAccess = JSON.parse(_access)

      console.log(jsonUserAccess.type)

      if(!userData && !jsonUserAccess) {
        this.$store.commit('changeRenderAdmin', {
          show: false,
          type: null
        })
      }
      else{
        this.$http.defaults.headers.common['Authorization'] = `Bearer ${userData.access_token}`
        this.$store.commit('changeRenderAdmin', {
          show: true,
          type: jsonUserAccess.type
        })
      }
      this.validatingToken = false
    }
  },
  created() {
    this.validateToken()
  }
}
</script>

<style lang="scss">
  @import 'styles/_custom.scss';  
</style>