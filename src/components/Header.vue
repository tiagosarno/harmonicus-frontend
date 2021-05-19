<template>
  <b-container fluid>
      <b-row align-v="end" class="mb-4">
          <b-col md="2">
              <img src="@/assets/harmonicus.png" :height="sizeLogo" class="logo" />
          </b-col>
          <b-col md="6">
              <b-row>
                  <b-col>
                      <strong class="t-slogan">O Equilíbro</strong><br />
                      <span class="t-slogan">do seu bem estar</span>
                  </b-col>
              </b-row>
          </b-col>
          <b-col md="4" class="menu" align-self="center">
              <div>
                <b-button-group>
                    <b-button 
                      variant="light" 
                      v-b-tooltip.hover title="Página Inicial">
                        <b-icon-house-fill></b-icon-house-fill>
                    </b-button>
                    <b-dropdown right text="Menu" variant="light">
                        <b-dropdown-item>Quem Somos</b-dropdown-item>
                        <b-dropdown-item>Artigos</b-dropdown-item>
                        <b-dropdown-divider></b-dropdown-divider>
                        <b-dropdown-item>Vídeos</b-dropdown-item>
                    </b-dropdown>
                    <b-button variant="light">Cadastrar</b-button>
                    <b-button id="tooltip-access" variant="primary">
                        Entrar&nbsp;<b-icon-people-fill></b-icon-people-fill>
                    </b-button>
                    <b-tooltip target="tooltip-access" triggers="hover">
                      Acessar o Sistema<br />
                      <strong>Pacientes</strong> & <strong>Psicólogos</strong>
                    </b-tooltip>
                </b-button-group>
              </div>
          </b-col>
      </b-row>
  </b-container>
</template>

<script>
export default {
    data(){
        return{
            sizeLogo: 200,
        }
    }
}
</script>

<style>
  .logo {    
    margin-left: 10px;
  }
  .slogan {
    display: flex;
  }
  .menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .t-slogan {
    font-size: 3rem;
    color: #023770;
  }

  @media screen and (max-width: 600px) {
    .t-slogan {
      font-size: 1.3rem;
      color: #023770;
    }
    .menu {
        margin: 20px 0px 20px 0px;
    }
  }
</style>