<template>
  <b-navbar-nav>
    <b-nav-item :to="{ name: 'admin-dashboard' }">Painel</b-nav-item>
    <b-nav-item-dropdown text="Consultório" left>      
      <b-dropdown-item :to="{ name: 'admin-psi-dates-and-hours' }">
        <b-icon-caret-right-fill></b-icon-caret-right-fill>
        Datas e horários
      </b-dropdown-item>
      <b-dropdown-item :to="{ name: 'admin-psi-financial' }">
        <b-icon-caret-right-fill></b-icon-caret-right-fill>
        Financeiro
      </b-dropdown-item>
      <b-dropdown-item :to="{ name: 'admin-psi-products' }">
        <b-icon-caret-right-fill></b-icon-caret-right-fill>
        Produtos
      </b-dropdown-item>
      <b-dropdown-item :to="{ name: 'admin-psi-my-patients' }">
        <b-icon-caret-right-fill></b-icon-caret-right-fill>
        Pacientes
      </b-dropdown-item>
      <b-dropdown-item :to="{ name: 'admin-psi-stop-clinic' }">
        <b-icon-caret-right-fill></b-icon-caret-right-fill>
        Pausar consultório
      </b-dropdown-item>
    </b-nav-item-dropdown>
    <b-nav-item-dropdown text="Consultas" left>
      <b-dropdown-item :to="{ name: 'admin-psi-evaluations' }">
        <b-icon-caret-right-fill></b-icon-caret-right-fill>
        Avaliações
      </b-dropdown-item>
      <b-dropdown-item :to="{ name: 'admin-psi-schedules' }">
        <b-icon-caret-right-fill></b-icon-caret-right-fill>
        Agendamentos
      </b-dropdown-item>      
    </b-nav-item-dropdown>
    <b-nav-item-dropdown text="Estatísticas" left>      
      <b-dropdown-item :to="{ name: 'admin-psi-statistics' }">
        <b-icon-caret-right-fill></b-icon-caret-right-fill>
        Painel de estatísticas
      </b-dropdown-item>
      <b-dropdown-item :to="{ name: 'admin-psi-visitor-funnel' }">
        <b-icon-caret-right-fill></b-icon-caret-right-fill>
        Meu funil de visitas
      </b-dropdown-item>
    </b-nav-item-dropdown>
    <b-nav-item-dropdown text="Conteúdos" left>
      <b-dropdown-item :to="{ name: 'admin-psi-articles' }">
        <b-icon-caret-right-fill></b-icon-caret-right-fill>
        Meus artigos
      </b-dropdown-item>
      <b-dropdown-item :to="{ name: 'admin-psi-videos' }">
        <b-icon-caret-right-fill></b-icon-caret-right-fill>
        Meus vídeos
      </b-dropdown-item>
    </b-nav-item-dropdown>
    <b-nav-item :to="{ name: 'admin-psi-messages' }">
      Mensagens</b-nav-item>
    <b-nav-item
      href="https://api.whatsapp.com/send?phone=5562998474453&text=Ol%C3%A1!%20Eu%20gostaria%20de%20obter%20um%20suporte"
      target="_blank"
      v-b-tooltip.hover
      title="Chamar Suporte Técnico WhatsApp">
      Suporte Técnico</b-nav-item>
  </b-navbar-nav>
</template>

<script>
export default {  
};
</script>

<style></style>
