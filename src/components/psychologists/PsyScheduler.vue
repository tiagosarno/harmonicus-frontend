<template>
    <div class="se-psy-scheduler">
        <div class="se-psy-tabs">
            <div class="se-psy-tab-1" 
              @click="activateTab(1)"
              :class="styleCSSTab1">Agenda</div>
            <div class="se-psy-tab-2" 
              @click="activateTab(2)"
              :class="styleCSSTab2">Biografia</div>
        </div>
        <div class="se-psy-content-tabs">Content Tabs</div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      activateTab1: true
    }
  },
  computed: {
    styleCSSTab1(){
      return {
        bg1: !this.activateTab1,
        txt1: !this.activateTab1,
        bg2: this.activateTab1,
        txt2: this.activateTab1
      }
    },    
    styleCSSTab2(){
      return {
        bg1: this.activateTab1,
        txt1: this.activateTab1,
        bg2: !this.activateTab1,
        txt2: !this.activateTab1
      }
    }    
  },
  methods: {
    activateTab(id){
      if(id == 1) { 
        console.log('tab1')
        this.activateTab1 = true        
      }
      else{ 
        console.log('tab2')
        this.activateTab1 = false
      }
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
  width: 40%;
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
  width: 40%;
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
  border-radius: 0px 10px 10px 10px;
  padding: 10px;
}
.bg1{ background-color: #F7F7F7; }
.bg1:hover{ background-color: #e3e3e3; }
.txt1{ 
  color: #333; 
  font-weight: 600;
  font-size: 1.2rem;
  user-select: none;
}

.bg2{ background-color: #023770; }
.bg2:hover{ background-color: #002a58; }
.txt2{ 
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
  }
}
</style>