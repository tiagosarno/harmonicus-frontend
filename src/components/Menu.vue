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
      <b-dropdown v-if="authenticated" variant="primary" left text="Rosane Rocha">
        <b-dropdown-item>Acessar Consultório</b-dropdown-item>
        <b-dropdown-item>Sair</b-dropdown-item>
      </b-dropdown>      
      <b-dropdown v-else left text="Cadastrar" variant="primary">
        <b-dropdown-item
          v-for="(menu,i) in menusRegister" 
          :key="i"
          :to="{ name: 'signUp', params: { component: menu.value } }">
          {{ menu.text }}</b-dropdown-item>
      </b-dropdown>      
      <b-button
        v-if="!authenticated"
        id="tooltip-access" 
        variant="primary"
        @click="$bvModal.show('modal-access')">
        Entrar&nbsp;<b-icon-people-fill></b-icon-people-fill>
      </b-button>
      <b-tooltip 
        target="tooltip-access" 
        triggers="hover">
        Acessar o Sistema<br />
        <strong>Pacientes</strong> & <strong>Profissionais</strong>
      </b-tooltip>
    </b-button-group>
    <b-avatar
      v-if="authenticated"
      class="ml-3"
      href="#bar"
      src="data:image/jpeg;base64,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"
      size="6rem"
      id="user-avatar"></b-avatar>
    <b-tooltip v-if="authenticated" target="user-avatar" placement="bottomleft">
      Acessar Consultório
    </b-tooltip>
  </div>
</template>

<script>
export default {
  data(){
    return {
      authenticated: false,
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
