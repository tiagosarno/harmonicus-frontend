<template>
  <div class="psy-scheduler-days">
    <b-button size="sm" 
      class="text-center mr-2" 
      variant="outline-secondary">
      <b-icon-chevron-double-left></b-icon-chevron-double-left>
    </b-button>

    
      <b-form-radio-group
        id="form-btn-date"
        name="form-btn-date"
        button-variant="outline-primary"
        size="sm"
        v-model="selectedDate"
        :options="optionsDate"
        buttons
      ></b-form-radio-group>
    

    <b-button size="sm" 
      class="text-center mr-1" 
      variant="outline-secondary">
      <b-icon-chevron-double-right></b-icon-chevron-double-right>
    </b-button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      classVariant: 'outline-secondary',
      selectedDate: null,
        optionsDate: [
          { value: '12/05', html: '<strong>DOM</strong><br />12/05' },
          { value: '13/05', html: '<strong>SEG</strong><br />13/05' },
          { value: '14/05', html: '<strong>TER</strong><br />14/05' },
          { value: '15/05', html: '<strong>QUA</strong><br />15/05' },
          { value: '16/05', html: '<strong>QUI</strong><br />16/05', disabled: true },
          { value: '17/05', html: '<strong>SEX</strong><br />17/05' },
          { value: '18/05', html: '<strong>SAB</strong><br />18/05' },
        ],      
    }
  }
}
</script>

<style>

</style>