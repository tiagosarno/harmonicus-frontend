<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="showForm">
      <b-card-group deck>
        <b-card>
          <b-form-input
            id="frm-pa-name"
            v-model="form.name"
            type="text"
            placeholder="Nome completo"
            required></b-form-input>
          <b-form-group
            class="mt-3"
            label="Sexo"
            v-slot="{ ariaGender }">
            <b-form-radio-group
              v-model="form.gender"
              :options="optionsGender"
              :aria-describedby="ariaGender"
              name="frm-pa-gender"
              required></b-form-radio-group>
          </b-form-group>
          <b-form-input
            id="frm-pa-email"
            v-model="form.email"
            type="email"
            placeholder="E-mail"
            required
            class="mt-2"></b-form-input>
          <b-form-input
            id="frm-pa-cpf"
            v-model="form.cpf"
            type="number"
            placeholder="CPF"
            required
            class="mt-2"></b-form-input>
          <b-form-input
            id="frm-pa-phone"
            v-model="form.phone"
            type="number"
            placeholder="Telefone"
            required
            class="mt-2"></b-form-input>
          <b-form-checkbox 
            value="1"
            v-model="form.phoneIsWhatsApp">
            Este número é meu WhatsApp
          </b-form-checkbox>
          <b-form-group
            label="Data de Nascimento:"
            class="mt-3">
            <b-form-input
              id="frm-pa-birthdate"
              v-model="form.birthDate"
              type="date"
              required
              class="mt-2"></b-form-input>
          </b-form-group>
        </b-card>
        <b-card>
          <b-form-select
            id="frm-pa-state"
            v-model="form.state"
            :options="itemsStates"
            required
            class="mt-2"></b-form-select>
          <b-form-input
            id="frm-pa-addresscity"
            v-model="form.city"
            placeholder="Cidade"
            required
            class="mt-2"></b-form-input>
          <b-form-select
            id="frm-pa-howfindharmonicus"
            v-model="form.howFindHarmonicus"
            :options="itemsHowFind"
            required
            class="mt-2"></b-form-select>
          <b-form-group
            class="mt-3"
            label="Qual das ferramentas re reunião on-line você conhece?"
            v-slot="{ ariaApplications }">
            <b-form-checkbox-group
              v-model="form.chatApplications"
              :options="optionsChatApplications"
              :aria-describedby="ariaApplications"
              name="chatNetworks"
              required></b-form-checkbox-group>
          </b-form-group>
          <b-card-footer class="mt-4">
            <b-button type="submit" 
              variant="primary" 
              class="mr-2">
              Enviar <b-icon-box-arrow-right></b-icon-box-arrow-right>
            </b-button>
            <b-button type="reset" 
              variant="danger">Limpar</b-button>
          </b-card-footer>
        </b-card>
      </b-card-group>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {      
      showForm: true,
      form: {
        email: "",
        name: "",
        howFindHarmonicus: null,
        state: null,
        chatApplications: [],
        gender: [],
        phoneIsWhatsApp: "",
        city: ""
      },
      itemsStates: [
        { value: null, text: "Selecione o seu Estado (UF)", disabled: true },
        { value: "GO", text: "Goiás" },
      ],
      itemsHowFind: [
        {
          value: null,
          text: "Ajude-nos. Como conheceu Harmonicus?",
          disabled: true,
        },
        { value: 1, text: "Indicação de outro paciente" },
        { value: 2, text: "Indicação de psicólogo da plataforma" },
        { value: 3, text: "Propaganda no Instagram" },
        { value: 4, text: "Propaganda no Facebook" },
        { value: 5, text: "Pesquisa no Google" },
      ],
      optionsChatApplications: [
        { text: "Microsoft Teams", value: 1 },
        { text: "Google Meet", value: 2 },
        { text: "ZooM", value: 3 },
        { text: "Skype", value: 4 },
        { text: "WhatsApp", value: 5 },
        { text: "Não conheço nenhuma delas", value: 6 },
      ],      
      optionsGender: [
        { value: 'M', text: 'Masculino' },
        { value: 'F', text: 'Feminino' },
      ],
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      console.log(JSON.stringify(this.form))
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form = [];
      
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
  mounted() {
    this.$store.commit('changeShowSearch', false)
  },
  destroyed() {
    this.$store.commit('changeShowSearch', true)
  }
};
</script>

<style></style>
