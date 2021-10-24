<template>
  <b-container fluid>
    
    <b-card-group deck class="mt-3">
      <b-card no-body :class="{'mr-2': applyMargin}">
        <b-card-body>
          <Search />
        </b-card-body>
      </b-card>      
    </b-card-group>

    <b-card-group deck class="mt-3">
      <b-card no-body :class="{'mr-2': applyMargin}">
        <b-card-body>
          <Wellcome />
        </b-card-body>
      </b-card>
      <b-card no-body :class="{'ml-2': applyMargin}">
        <b-card-body>          
          <WhoIsHarmonicus />
        </b-card-body>
      </b-card>
    </b-card-group>

  </b-container>
</template>

<script>
import Wellcome from "../../components/Wellcome.vue";
import WhoIsHarmonicus from "../../components/WhoIsHarmonicus.vue";
import Search from './Search.vue';

export default {
  components: { Wellcome, WhoIsHarmonicus, Search },
  data() {
    return {
      classBox: [],
      classBoxRight: 'mr-2',
      classBoxLeft: 'ml-2',
      bsContainerWidth: window.innerWidth
    };
  },
  computed: {
    applyMargin() {
      if (this.bsContainerWidth <= 768) {                
        console.log("Device mobile");
        return false
      } else if (this.bsContainerWidth <= 950) {
        console.log("Device small");
        return false
      } else if (this.bsContainerWidth <= 1170) {
        console.log("Device medium");
        return true
      } else {        
        console.log("Device large");
        return true
      }
    }
  }
};
</script>

<style lang="scss">
.internal {
  display: flex;
  height: 650px;
  width: 100%;
  margin-top: 10px;
}
</style>
