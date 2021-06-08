<template>
  <b-list-group class="se-psy-statistics">
    <b-list-group-item>
      <b-badge variant="secondary" pill>5698</b-badge>
      Avaliações
      <b-icon-star-fill font-scale="0.8" 
        variant="warning"></b-icon-star-fill>
      <b-icon-star-fill font-scale="0.8"
        variant="warning"></b-icon-star-fill>
      <b-icon-star-fill font-scale="0.8"
        variant="warning"></b-icon-star-fill>
      <b-icon-star-fill font-scale="0.8"
        variant="warning"></b-icon-star-fill>
      <b-icon-star-fill font-scale="0.8"
        variant="warning"></b-icon-star-fill>
    </b-list-group-item>
    <b-list-group-item>
      <b-icon-people-fill></b-icon-people-fill>
      Atendimentos
      <b-badge variant="secondary" pill>+ 500</b-badge>
    </b-list-group-item>
    <b-list-group-item 
      v-b-tooltip.hover.bottom
      title="Ver Vídeos"
      :to="{ name: 'videos', params: {psy: '12345'} }"
      action>
      <b-icon-youtube></b-icon-youtube>
      Vídeos Publicados
      <b-badge variant="secondary" pill>3</b-badge>
    </b-list-group-item>
    <b-list-group-item 
      v-b-tooltip.hover.bottom
      title="Ver Artigos"
      :to="{ name: 'articles', params: {psy: '12345'} }"
      action>
      <b-icon-newspaper></b-icon-newspaper>
      Artigos Publicados
      <b-badge variant="secondary" pill>1</b-badge>
    </b-list-group-item>
  </b-list-group>
</template>

<script>
export default {

}
</script>

<style scoped>
.se-psy-statistics{
  width: 22%;
  margin: 10px;
}
@media screen and (max-width: 768px){
  .se-psy-statistics{    
    width: 100%;
    padding: 0px;
    margin: 0px;
  }
}
</style>