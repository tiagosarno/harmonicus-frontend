<template>
  <b-container class="mt-3" fluid>
    <component :is="component" />    
  </b-container>
</template>

<script>
import { userAccess } from '@/global'
import PsyFormProfile from './psychologist/FormProfile.vue'
import PatientFormProfile from './patient/FormProfile.vue'

export default {
  components: { PsyFormProfile, PatientFormProfile },
  data() {
    return {
      component: null,
    }
  },
  created() {
    const _access = localStorage.getItem(userAccess)
    const jsonUserAccess = JSON.parse(_access)
    if(jsonUserAccess.type == 'psychologist') {
      this.component = 'PsyFormProfile'
    }
    else if(jsonUserAccess.type == 'patient') {
      this.component = 'PatientFormProfile'
    }
  }
}
</script>

<style>

</style>