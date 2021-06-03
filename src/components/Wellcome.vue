<template>
  <div>
    <b-card-title>
      <span>Bem vindos</span> <strong>ao time</strong>&nbsp;
      <b-badge pill>37 psicólogos</b-badge>
    </b-card-title>
    <b-card-body>
      <b-list-group>
        <b-list-group-item class="d-flex align-items-center">
          <b-avatar
            src="https://www.psitto.com.br/wp-content/uploads/2025/12/psicologo-mauricio-dornelas-300x300.jpeg"
            class="mr-3"
            size="5rem"
            button
            @click="onClick"
            v-b-tooltip.hover title="visitar perfil"
          ></b-avatar>
          <div class="display-flex-column">
            <b-link 
              :to="{ name: '' }">
              <strong v-b-tooltip.hover.top title="visitar perfil">Rubens Moura Neto</strong>
            </b-link>
            <span class="mr-auto">
              Psicólogo Clínico
              <b-badge class="mr-2">Constelação Familiar</b-badge>
              <b-badge class="mr-2">Depressão</b-badge>
            </span>
          </div>
        </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center">
          <b-avatar
            src="https://www.psitto.com.br/wp-content/uploads/2020/12/psicologa-rosane-rocha-1.jpg"
            class="mr-3"
            size="5rem"
            button
            @click="onClick"
            v-b-tooltip.hover title="visitar perfil"
          ></b-avatar>
          <div class="display-flex-column">
            <b-link :to="{ name: '' }">
              <strong v-b-tooltip.hover.top title="visitar perfil">Rosane M M Rocha</strong>
            </b-link>
            <span class="mr-auto">
              Psicóloga Clínica
              <b-badge class="mr-2">Gestault-Terapia</b-badge>
            </span>
          </div>
        </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center">
          <b-avatar            
            src="https://www.psitto.com.br/wp-content/uploads/2020/10/psicologa-giuliana-vassallo-siciliano-300x300.jpg"
            class="mr-3"
            size="5rem"
            button
            @click="onClick"
            v-b-tooltip.hover title="visitar perfil"
          ></b-avatar>
          <div class="display-flex-column">
            <b-link :to="{ name: '' }">
              <strong v-b-tooltip.hover.top title="visitar perfil">Raquel Fernanda Musk</strong>
            </b-link>
            <span class="mr-auto">
              Psicóloga Clínica
              <b-badge class="mr-2">Constelação Familiar</b-badge>
            </span>
          </div>
        </b-list-group-item>
      </b-list-group>
    </b-card-body>
    <b-card-footer>
      <b-link :to="{ name: '' }">
        ver todos <b-icon-chevron-double-right></b-icon-chevron-double-right>
      </b-link>
    </b-card-footer>
  </div>
</template>

<script>
export default {
  methods: {
    //FIXME
    onClick(){
      return false;
    }
  }
};
</script>

<style>
.display-flex-column {
  display: flex;
  flex-direction: column;
}
</style>
