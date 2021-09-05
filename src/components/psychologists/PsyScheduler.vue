<template>
    <div class="se-psy-scheduler">
        <div class="se-psy-tabs">
            <div class="se-psy-tab-1 bg-scheduler txt-scheduler">Agendar Consulta</div>
        </div>
        <div class="se-psy-content-tabs">
          <PsySchedulerTab1 />
        </div>
    </div>
</template>

<script>
import PsySchedulerTab1 from './PsySchedulerTab1.vue'

export default {
  components: { PsySchedulerTab1 },
  data(){
    return{
      
    }
  }
}
</script>

<style scoped>
.se-psy-scheduler{
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 250px;
  padding: 0px 0px 0px 5px;
}
.se-psy-tabs{
  width: 100%;
  display: flex;
  flex-direction: row;
}
.se-psy-tab-1{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  border-radius: 10px 10px 0px 0px;
  border-left: 1px solid #CCC;
  border-top: 1px solid #CCC;
  border-right: 1px solid #CCC;
}
.se-psy-content-tabs{
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #f7f7f7;
  border: 1px solid #CCC;
  border-radius: 0px 0px 10px 10px;
  padding: 10px;
  overflow: auto;
}

.bg-scheduler{ background-color: #023770; }
.txt-scheduler{ 
  color: white; 
  font-weight: 600;
  font-size: 1.2rem;
  user-select: none;
}
@media screen and (max-width: 768px){
  .se-psy-scheduler{
    margin-top: 15px;
    width: 100%;
  }
  .se-psy-tab-1{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 45px;
    border-radius: 10px 10px 0px 0px;
    border-left: 1px solid #CCC;
    border-top: 1px solid #CCC;
    border-right: 1px solid #CCC;
    cursor: pointer;
  }
  .se-psy-tab-2{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 45px;
    border-radius: 10px 10px 0px 0px;
    border-top: 1px solid #CCC;
    border-right: 1px solid #CCC;
    cursor: pointer;
  }
  .se-psy-content-tabs{
    display: flex;
    width: 100%;
    height: 100%;
    background-color: #f7f7f7;
    border: 1px solid #CCC;
    border-radius: 0px 0px 10px 10px;
    padding: 10px;
    overflow: auto;
  }
}
</style>