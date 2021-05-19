<template>
  <div>
    <b-button-group>
      <b-button variant="light" v-b-tooltip.hover title="Página Inicial">
        <b-icon-house-fill></b-icon-house-fill>
      </b-button>
      <b-dropdown left text="Menu" variant="light">
        <b-dropdown-item          
          v-for="(menu,i) in menus" 
          :key="i">{{ menu.text }}</b-dropdown-item>        
      </b-dropdown>
      <b-button variant="light">Cadastrar</b-button>
      <b-button 
        id="tooltip-access" 
        variant="primary">
        Entrar&nbsp;<b-icon-people-fill></b-icon-people-fill>
      </b-button>
      <b-tooltip 
        target="tooltip-access" 
        triggers="hover">
        Acessar o Sistema<br />
        <strong>Pacientes</strong> & <strong>Psicólogos</strong>
      </b-tooltip>
    </b-button-group>
  </div>
</template>

<script>
export default {
  data(){
    return{
      menus: [
        { value: 'quem-somos', text: 'Quem Somos' },
        { value: 'videos', text: 'Videoteca' },
        { value: 'artigos', text: 'Artigos' },
        { value: 'codigo-etica', text: 'Código de Ética' },
        { value: 'perguntas-respostas', text: 'Perguntas & Respostas' },
        { value: 'suporte-tecnico', text: 'Suporte Técnico' },
      ]
    }
  }
};
</script>

<style>
.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 600px) {
  .menu {
    margin: 20px 0px 20px 0px;
  }
}
</style>
