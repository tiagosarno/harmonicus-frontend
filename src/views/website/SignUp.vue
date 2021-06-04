<template>
  <b-container fluid>
    <b-alert id="form-alert-register" show variant="secondary" class="mt-3 mb-1">
      <div v-if="component == 'FormPatient'">
        <RegisterPatient />
      </div>
      <div v-else>
        <RegisterPsychologist />
      </div>
    </b-alert>
    <b-card>      
      <b-card-body>
        <component :is="component" />
      </b-card-body>
    </b-card>
  </b-container>
</template>

<script>
import FormPatient from "./FormPatient.vue";
import FormPsychologist from "./FormPsychologist.vue";
import RegisterPatient from '../../components/statics/RegisterPatient.vue'
import RegisterPsychologist from '../../components/statics/RegisterPsychologist.vue'

export default {
  props: ['component'],
  data() {
    return {
      
    };
  },
  components: { 
    FormPatient, 
    FormPsychologist, 
    RegisterPatient, 
    RegisterPsychologist 
  },
};
</script>

<style lang="scss"></style>
