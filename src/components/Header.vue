<template>
  <b-container fluid>
    <b-row align-v="end" class="mb-4">
      <b-col md="3">
        <img src="@/assets/harmonicus.png" :height="sizeLogo" class="logo" />
      </b-col>
      <b-col md="5">
        <b-row>
          <b-col>
            <strong class="t-slogan">O Equilíbro</strong><br />
            <span class="t-slogan">do seu bem estar</span>            
          </b-col>
        </b-row>
      </b-col>
      <b-col md="4" class="menu" align-self="center">
        <Menu />
      </b-col>
    </b-row>
    <b-alert show variant="info">
      <span>A sua plataforma on-line para consultas 
        psicológicas, acervo em vídeos e artigos desenvolvido por nossos psicólogos e muito mais..</span>
    </b-alert>
    <Search />
  </b-container>
</template>

<script>
import Menu from "./Menu.vue";
import Search from "./Search.vue";

export default {
  components: { Menu, Search },
  data() {
    return {
      sizeLogo: 200,
    };
  },
};
</script>

<style lang="scss">
.logo {
  margin-left: 10px;
}
.slogan {
  display: flex;
}
.t-slogan {
  font-size: 3.2rem;
  color: #023770;
}

@media screen and (max-width: 768px) {  
  .t-slogan {
    font-size: 1.5rem;
    color: #023770;
  }
}
</style>
