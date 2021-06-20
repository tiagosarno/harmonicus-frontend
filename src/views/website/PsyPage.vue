<template>
  <b-container fluid>
    <b-card>
      <b-card-title>Dr. Rui Barbosa da Costa e Sousa</b-card-title>
      <b-card-body>
        <div>
          <div class="psy-container">
            <PsyAvatar link="no" />
            <PsyData showName="no" />
            <PsyStatistics link="no" />
            <PsyScheduler />    
          </div>
          <div class="mt-4">
            <b-tabs content-class="mt-3">
              <b-tab 
                title="Biografia" 
                active><PsyBiography /></b-tab>
              <b-tab 
                title="Artigos, Vídeos e muito mais..">
                <p><PsyContent /></p></b-tab>
            </b-tabs>
          </div>
        </div>
      </b-card-body>
    </b-card>
  </b-container>
</template>

<script>
import PsyAvatar from '../../components/psychologists/PsyAvatar.vue'
import PsyData from '../../components/psychologists/PsyData.vue'
import PsyStatistics from '../../components/psychologists/PsyStatistics.vue'
import PsyScheduler from '../../components/psychologists/PsyScheduler.vue'
import PsyBiography from '../../components/psychologists/PsyBiography.vue'
import PsyContent from '../../components/psychologists/PsyContent.vue'

export default {
    components: { 
      PsyAvatar, 
      PsyStatistics, 
      PsyData, 
      PsyScheduler, 
      PsyBiography,
      PsyContent
    },
    mounted() {
        this.$store.commit('changeShowSearch', false)
    },
    destroyed() {
        this.$store.commit('changeShowSearch', true)
    }
}
</script>

<style>
.psy-container{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex: 1;
}
</style>