<template>
  <div>
    <b-button-group>
      <b-button        
        :to="{ name: 'home' }"
        variant="primary" 
        v-b-tooltip.hover 
        title="Página Inicial">
        <b-icon-house-fill></b-icon-house-fill>
      </b-button>
      <b-dropdown left text="Menu" variant="primary">
        <b-dropdown-item          
          v-for="(menu,i) in menus" 
          :key="i"
          :to="{ name: menu.value }">{{ menu.text }}</b-dropdown-item>
      </b-dropdown>
      <b-dropdown left text="Cadastrar" variant="primary">
        <b-dropdown-item
          v-for="(menu,i) in menusRegister" 
          :key="i"
          :to="{ name: 'signUp', params: { component: menu.value } }">
          {{ menu.text }}</b-dropdown-item>
      </b-dropdown>      
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
        { value: 'videos', text: 'Videoteca' },
        { value: 'articles', text: 'Artigos' },
        { value: 'questions', text: 'Perguntas & Respostas' },
      ],
      menusRegister: [
        { value: 'FormPatient', text: 'Cadastro de Paciente' },
        { value: 'FormPsychologist', text: 'Cadastro de Psicólogo' }
      ],
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
