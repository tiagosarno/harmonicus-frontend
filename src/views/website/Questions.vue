<template>
  <b-container fluid>
    <b-card>
      <b-card-title>Perguntas & Respostas</b-card-title>
      <b-card-sub-title>
        Confira as principais perguntas recebidas com relação aos processos e 
        uso da plataforma.
      </b-card-sub-title>
      <b-card-body>
        
        <h3><b-badge pill variant="secondary">Pacientes</b-badge></h3>

        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block 
                v-b-toggle.pa-q-1 
                variant="info" 
                class="text-left">Pergunta #1</b-button>
            </b-card-header>
            <b-collapse id="pa-q-1" accordion="pa-q-1" role="tabpanel">
              <b-card-body>
                <b-card-text>Texto para a pergunta #1</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>

        <h3 class="mt-4">
          <b-badge pill variant="secondary">Psicólogos</b-badge>
        </h3>

        <div class="accordion" role="tablist">
          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block 
                v-b-toggle.ps-q-1 
                variant="info" 
                class="text-left">Pergunta #1</b-button>
            </b-card-header>
            <b-collapse id="ps-q-1" accordion="ps-q-1" role="tabpanel">
              <b-card-body>
                <b-card-text>Texto para a pergunta psicólogo #1</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>

      </b-card-body>
    </b-card>
  </b-container>
</template>

<script>
export default {

}
</script>

<style>

</style>