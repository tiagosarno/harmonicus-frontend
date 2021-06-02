<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-card-group deck>
        <b-card>
          <b-form-input
            id="input-1"
            v-model="form.name"
            type="text"
            placeholder="Nome completo"
            required
          ></b-form-input>
          <b-form-group
            class="mt-3"
            label="Sexo"
            v-slot="{ ariaSex }"
          >
            <b-form-radio-group
              v-model="form.sex"
              :options="optionsSex"
              :aria-describedby="ariaSex"
              name="sex"
              required
            ></b-form-radio-group>
          </b-form-group>
          <b-form-group
            class="mt-3"
            id="input-group-1"
            label="Data de Nascimento"
            label-for="input-1"
          >
            <b-form-input
              class="mt-2"
              id="input-4"
              v-model="form.birthDate"
              type="date"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-input
            class="mt-2"
            id="input-2"
            v-model="form.email"
            type="email"
            placeholder="E-mail"
            required
          ></b-form-input>
          <b-form-input
            class="mt-2"
            id="input-3"
            v-model="form.cpf"
            type="number"
            placeholder="CPF"
            required
          ></b-form-input>
          <b-form-input
            class="mt-2"
            id="input-3"
            v-model="form.crp"
            type="text"
            placeholder="Informe o seu CRP"
            required
          ></b-form-input>
          <b-form-select
            class="mt-2"
            v-model="form.crpState"
            :options="crpStates"
            required
          ></b-form-select>
          <b-form-input
            class="mt-2"
            id="input-4"
            v-model="form.phone"
            type="number"
            placeholder="Telefone"
            required
          ></b-form-input>
          <b-form-checkbox value="me"
            >Este número é meu WhatsApp</b-form-checkbox
          >
        </b-card>
        <b-card>
          <b-form-select
            class="mt-2"
            v-model="form.state"
            :options="states"
            required
          ></b-form-select>
          <b-form-input
            class="mt-2"
            v-model="form.addressCity"
            placeholder="Cidade"
            required
          ></b-form-input>
          <b-form-select
            class="mt-2"
            v-model="form.howFindHarmonicus"
            :options="itemsHowFind"
            required
          ></b-form-select>
          <b-form-group
            class="mt-3"
            label="Qual das ferramentas re reunião on-line você conhece?"
            v-slot="{ ariaChatNetworks }"
          >
            <b-form-checkbox-group
              v-model="chatNetworks"
              :options="optionsChatNetworks"
              :aria-describedby="ariaChatNetworks"
              name="chatNetworks"
              required
            ></b-form-checkbox-group>
          </b-form-group>

          <b-card-footer class="mt-4">
            <b-button type="submit" variant="primary" class="mr-2"
              >Enviar <b-icon-box-arrow-right></b-icon-box-arrow-right
            ></b-button>
            <b-button type="reset" variant="danger">Limpar</b-button>
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
      form: {
        email: "",
        name: "",
        howFindHarmonicus: null,
        checked: [],
        state: null,
        crpState: null,
        chatNetworks: [],
        sex: [],
      },
      states: [
        { value: null, text: "Selecione o seu Estado (UF)", disabled: true },
        { value: "GO", text: "Goiás" },
      ],
      crpStates: [
        { value: null, text: "Selecione o estado (UF) do seu CRP", disabled: true },
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
      show: true,
      optionsChatNetworks: [
        { text: "Microsoft Teams", value: 1 },
        { text: "Google Meet", value: 2 },
        { text: "ZooM", value: 3 },
        { text: "Skype", value: 4 },
        { text: "WhatsApp", value: 5 },
        { text: "Não conheço nenhuma delas", value: 6 },
      ],
      optionsSex: [
        { value: 'M', text: 'Masculino' },
        { value: 'F', text: 'Feminino' },
      ],
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.name = "";
      this.form.email = "";
      this.form.howFindHarmonicus = null;
      this.form.chatNetworks = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style></style>