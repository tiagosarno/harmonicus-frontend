<template>
  <div>
    <hr />
    <div class="container-search-psy">
      <PsyAvatar />
      <PsyData />
      <PsyStatistics />
      <PsyScheduler />    
    </div>    
  </div>  
</template>

<script>
import PsyAvatar from '../components/psychologists/PsyAvatar.vue'
import PsyData from '../components/psychologists/PsyData.vue'
import PsyStatistics from '../components/psychologists/PsyStatistics.vue'
import PsyScheduler from '../components/psychologists/PsyScheduler.vue'

export default {
  components: { PsyAvatar, PsyData, PsyStatistics, PsyScheduler }
}
</script>

<style lang="scss" scoped>
.container-search-psy{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex: 1;
}

@media screen and (max-width: 768px){
  .container-search-psy{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1;
  }
}
</style>