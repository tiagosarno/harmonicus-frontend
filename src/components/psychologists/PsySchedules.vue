<template>
  <div class="psy-schedules">
    <b-form-radio-group
        id="form-btn-hour"
        name="form-btn-hour"
        button-variant="outline-primary"
        size="sm"
        v-model="selectedHour"
        :options="optionsHours"
        plain
      ></b-form-radio-group>
  </div>
</template>

<script>
export default {
  data(){
    return{
      selectedHour: null,
        optionsHours: [
          { value: '14:00', html: '<strong>14:00</strong>' },
          { value: '15:00', html: '<strong>15:00</strong>' },
          { value: '16:00', html: '<strong>16:00</strong>' },
          { value: '17:00', html: '<strong>17:00</strong>' },
          { value: '18:00', html: '<strong>18:00</strong>' },
          { value: '19:00', html: '<strong>19:00</strong>' },
          { value: '20:00', html: '<strong>20:00</strong>' },
        ]
    }
  }
}
</script>

<style>

</style>