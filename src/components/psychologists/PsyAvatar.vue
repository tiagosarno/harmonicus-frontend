<template>
  <div class="se-psy-avatar">
    <b-avatar
      src="https://www.psitto.com.br/wp-content/uploads/2025/12/psicologo-mauricio-dornelas-300x300.jpeg"
      class="mr-3"
      size="9rem"
      button
      v-if="link == 'yes'"
      @click="onClick"
      v-b-tooltip.hover title="visitar perfil"></b-avatar>
    <b-avatar
      src="https://www.psitto.com.br/wp-content/uploads/2025/12/psicologo-mauricio-dornelas-300x300.jpeg"
      class="mr-3"
      size="9rem"      
      v-else></b-avatar>
  </div>
</template>

<script>
export default {
  props: ['link']
}
</script>

<style scoped>
.se-psy-avatar{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 13%;
  height: 250px;
}
@media screen and (max-width: 768px){
  .se-psy-avatar{
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
  } 
}
</style>