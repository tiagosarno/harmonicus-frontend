<template>
  <b-container fluid class="mt-2">
    <b-row align-v="end" class="mb-4">
      <b-col md="3" class="menu">
        <img src="@/assets/harmonicus.png" :height="sizeLogo" class="logo" />
      </b-col>
      <b-col md="5" class="menu">
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
        Plataforma facilitadora para a realização de
        <strong>terapias on-line</strong>. Conte com um acervo relevante de cursos, vídeos e artigos
        desenvolvidos por nossos profissionais.
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
