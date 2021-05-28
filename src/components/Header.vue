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
        <MenuUser v-if="authenticated" />
        <Menu v-else />
      </b-col>
    </b-row>
    <b-alert show variant="success">
        Plataforma para a realização de
        terapias on-line. Conte com um acervo relevante de cursos, vídeos e artigos
        desenvolvidos por nossos profissionais.
    </b-alert>
    <Search />
  </b-container>
</template>

<script>
import Menu from "./Menu.vue";
import MenuUser from "./MenuUser.vue";
import Search from "./Search.vue";

export default {
  components: { Menu, MenuUser, Search },
  data() {
    return {
      authenticated: false,
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
.b-avatar .b-avatar-img img {
  border: 2px solid #683c10;
}
@media screen and (max-width: 768px) {
  .t-slogan {
    font-size: 1.5rem;
    color: #023770;
  }
}
</style>
