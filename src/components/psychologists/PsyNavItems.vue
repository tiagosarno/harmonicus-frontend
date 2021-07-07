<template>
  <b-navbar-nav>
    <b-nav-item href="#">Home</b-nav-item>
    <b-nav-item-dropdown text="Consultório" left>      
      <b-dropdown-item href="#">
        <b-icon-caret-right-fill></b-icon-caret-right-fill>
        Datas & Horários
      </b-dropdown-item>
      <b-dropdown-item href="#">
        <b-icon-caret-right-fill></b-icon-caret-right-fill>
        Produtos (pacotes)
      </b-dropdown-item>
      <b-dropdown-item href="#">
        <b-icon-caret-right-fill></b-icon-caret-right-fill>
        Pacientes
      </b-dropdown-item>
      <b-dropdown-item href="#">
        <b-icon-gem></b-icon-gem>
        Gestão Financeira
      </b-dropdown-item>
    </b-nav-item-dropdown>
    <b-nav-item-dropdown text="Consultas" left>
      <b-dropdown-item href="#">
        <b-icon-caret-right-fill></b-icon-caret-right-fill>
        Avaliações
      </b-dropdown-item>
      <b-dropdown-item href="#">
        <b-icon-caret-right-fill></b-icon-caret-right-fill>
        Meus agendamentos
      </b-dropdown-item>
      <b-dropdown-item href="#">
        <b-icon-caret-right-fill></b-icon-caret-right-fill>
        Pausar consultas
      </b-dropdown-item>
    </b-nav-item-dropdown>
    <b-nav-item-dropdown text="Estatísticas" left>      
      <b-dropdown-item href="#">
        <b-icon-caret-right-fill></b-icon-caret-right-fill>
        Painel de estatísticas
      </b-dropdown-item>
      <b-dropdown-item href="#">
        <b-icon-caret-right-fill></b-icon-caret-right-fill>
        Meu funil de visitas
      </b-dropdown-item>
    </b-nav-item-dropdown>
    <b-nav-item-dropdown text="Conteúdos" left>
      <b-dropdown-item href="#">
        <b-icon-caret-right-fill></b-icon-caret-right-fill>
        Meus artigos
      </b-dropdown-item>
      <b-dropdown-item :to="{ name: 'admin-psi-videos' }">
        <b-icon-caret-right-fill></b-icon-caret-right-fill>
        Meus vídeos
      </b-dropdown-item>
    </b-nav-item-dropdown>
    <b-nav-item href="#">
      Mensagens</b-nav-item>
    <b-nav-item href="#">
      Suporte Técnico</b-nav-item>
  </b-navbar-nav>
</template>

<script>
export default {
  mounted(){
    this.$http.get('patient/5').then(res => console.log(res))
  }
};
</script>

<style></style>
