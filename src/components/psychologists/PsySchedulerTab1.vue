<template>
  <div class="psy-container-scheduler">
    <span>Escolha uma data para conferir os horários disponíveis.</span>
    <PsySchedulerDates />
    <div class="mt-2">
      <span>Horários disponíveis para </span>
      <strong>Terça-feira 14/05/2021</strong>
    </div>
    <div class="psy-container-scheduler-footer">      
      <PsySchedules />
      <div class="psy-scheduler-buttons">
        <b-button variant="secondary mr-2">Cancelar</b-button>
        <b-button variant="primary"
          @click="registerSchedule">Agendar</b-button>
      </div>
      <b-modal ref="my-modal" 
        hide-footer 
        title="Confirmação de Consulta">
        <PsyFormRegistration />
      </b-modal>
    </div>
  </div>
</template>

<script>
import PsySchedulerDates from './PsySchedulerDates.vue'
import PsySchedules from './PsySchedules.vue'
import PsyFormRegistration from './PsyFormRegistration.vue'

export default {
  components: { PsySchedulerDates, PsySchedules, PsyFormRegistration },
  methods: {
    registerSchedule(){
      this.$refs['my-modal'].show()
    }
  }
}
</script>

<style>
.psy-container-scheduler{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.psy-scheduler-days{
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.psy-container-scheduler-footer{
  display: flex;
  flex-direction: row;
  width: 100%;
}
.psy-schedules{
  display: flex;
  flex-wrap: wrap;
  width: 60%;
}
.psy-scheduler-buttons{
  display: flex;
  flex-direction: row;
  width: 40%;
  justify-content: flex-end;
  align-items: flex-end;
}
</style>