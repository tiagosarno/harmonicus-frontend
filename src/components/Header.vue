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
            <span class="t-slogan">do seu bem estar</span><br />
            <span class="subtitle">
              Plataforma para a realização de psicoterapias on-line. Conte com um 
              acervo relevante de vídeos e artigos criados por nossos 
              profissionais.
            </span>
          </b-col>
        </b-row>
      </b-col>
      <b-col md="4" class="menu" align-self="center">
        <Menu />
        <Auth />
      </b-col>
    </b-row>
    <Search />
  </b-container>
</template>

<script>
import Menu from "./Menu.vue";
import Search from "./Search.vue";
import Auth from "./Auth.vue"

export default {
  components: { Menu, Search, Auth },
  data() {
    return {      
      sizeLogo: 200,
    };
  },
};
</script>

<style scoped lang="scss">
.logo {
  margin-left: 10px;
  user-select: none;
}
.slogan {
  display: flex;
  user-select: none;
}
.t-slogan {
  font-size: 3.2rem;
  color: #023770;
  line-height: 100%;
  user-select: none;
}
.subtitle {  
  color: #333;
  user-select: none;
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
