<template>
  <div class="accordion" role="tablist">
    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button
          id="accordion"
          block
          v-b-toggle.accordion-1
          variant="primary"
          v-b-tooltip.hover
          title="Clique para esconder ou exibir a caixa de pesquisa"
          ><strong>Como podemos te ajudar?</strong> Oferecemos a você os
          melhores psicólogos
        </b-button>
      </b-card-header>
      <b-collapse
        id="accordion-1"
        visible
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card>
          <div class="container-search-form">
            <div class="item-search-form">
              <b-form-select
                v-model="frmAge"
                :options="ageOptions"
              ></b-form-select>
            </div>
            <div class="item-search-form">
              <b-form-select
                v-model="frmOrder"
                :options="orderOptions"
              ></b-form-select>
            </div>
            <div class="item-search-form">
              <b-form-select
                v-model="frmPeriod"
                :options="periodOptions"
              ></b-form-select>
            </div>
            <div class="item-search-form">
              <b-form-select
                v-model="frmArea"
                :options="areaOptions"
              ></b-form-select>
            </div>
            <div class="item-search-form">
              <b-form-select
                v-model="frmSpeciality"
                :options="specialityOptions"
              ></b-form-select>
            </div>
            <div class="item-search-form">
              <b-form-select
                v-model="frmGender"
                :options="genderOptions"
              ></b-form-select>
            </div>
            <div class="item-search-form">
              <b-form-input
                placeholder="Nome do psicólogo ou CRP"
              ></b-form-input>
            </div>
          </div>
          <div class="container-search-buttons">
            <b-button variant="primary" class="mr-2">
              Pesquisar <b-icon-search></b-icon-search
            ></b-button>
            <b-button v-b-tooltip.hover title="Disponíveis pra Hoje"
              >Consulta de Urgência</b-button
            >
          </div>
        </b-card>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSearch: false,
      selected: true,
      frmAge: null,
      ageOptions: [
        {
          value: null,
          text: "Faixa etária de quem será atendido",
          disabled: true,
        },
        { value: 1, text: "Menor de 18 anos" },
        { value: 2, text: "Entre 18 e 45 anos" },
        { value: 3, text: "Acima de 45 anos" },
      ],
      frmOrder: 1,
      orderOptions: [
        { value: 1, text: "Ordenar por (Relevânica)" },
        { value: 2, text: "Ordenar por (Menor Preço)" },
        { value: 3, text: "Ordenar por (Maior Preço)" },
      ],
      frmPeriod: 1,
      periodOptions: [
        { value: 1, text: "Período desejado (Todos)" },
        { value: 2, text: "Matutino" },
        { value: 3, text: "Vespertino" },
        { value: 4, text: "Noturno" },
      ],
      frmArea: 1,
      areaOptions: [
        { value: 1, text: "Área desejada (Todas)" },
        { value: 2, text: "--" },        
      ],
      frmSpeciality: 1,
      specialityOptions: [
        { value: 1, text: "Especialidade desejada (Todas)" },
        { value: 2, text: "--" },        
      ],
      frmGender: 1,
      genderOptions: [
        { value: 1, text: "Gênero do psicólogo (Todos)" },
        { value: 2, text: "Masculino" },        
        { value: 3, text: "Feminino" },        
      ],
    };
  },
  computed: {},
};
</script>

<style lang="scss">
.container-search-buttons {
  margin: 5px;
}
.container-search-form {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
.item-search-form {
  display: flex;
  width: 24%;
  min-width: 300px;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
}
#accordion {
  text-align: left;
}
.container-serach {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #ccc;
  width: 100%;
  height: 200px;
  padding: 10px;
}

@media screen and (max-width: 600px) {
  .container-search-form {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .container-search-buttons {
    text-align: center;
  }
}
</style>
