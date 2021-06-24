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
          <b-form-input
            id="frm-pa-crp"
            v-model="form.crp"
            type="text"
            placeholder="Informe o seu CRP"
            required
            class="mt-2"></b-form-input>
          <b-form-select
            id="frm-pa-statecrp"
            v-model="form.stateCrp"
            :options="itemsStateCrp"
            required
            class="mt-2"></b-form-select>
          <b-alert 
            show 
            variant="secondary"
            class="mt-2">
            <h5><b-badge variant="dark">Documentos Obrigatórios</b-badge></h5>

            <b-form-file
              class="mt-2"
              v-model="form.file1"
              :state="Boolean(form.file1)"
              placeholder="Fotografia 3x4"
              drop-placeholder="Fotografia 3x4"
              browse-text="Selecionar"></b-form-file>
            <b-form-file
              class="mt-2"
              v-model="form.file1"
              :state="Boolean(form.file1)"
              placeholder="Certidão de Regularidade de Inscrição de Pessoa Física"
              drop-placeholder="Certidão de Regularidade de Inscrição de Pessoa Física"
              browse-text="Selecionar">
              </b-form-file>
            <b-form-file
              class="mt-2"
              v-model="form.file1"
              :state="Boolean(form.file1)"
              placeholder="Cópia do CRP"
              drop-placeholder="Cópia do CRP, arraste e solte aqui..."
              browse-text="Selecionar"></b-form-file>
            <b-form-file
              class="mt-2"
              v-model="form.file1"
              :state="Boolean(form.file1)"
              placeholder="Comprovante de endereço"
              drop-placeholder="Comprovante do endereço"
              browse-text="Selecionar"></b-form-file>
            <b-form-file
              class="mt-2"
              v-model="form.file1"
              :state="Boolean(form.file1)"
              placeholder="Cópia do RG e CPF"
              drop-placeholder="Cópia do RG e CPF"
              browse-text="Selecionar"></b-form-file>            

            

          </b-alert>
        </b-card>
        <b-card>
          <b-form-input
            id="frm-pa-phone"
            v-model="form.cep"
            type="number"
            placeholder="CEP"
            required
            class="mt-2"></b-form-input>
          <b-form-select
            id="frm-pa-state"
            v-model="form.state"
            :options="itemsState"
            required
            class="mt-2"></b-form-select>
          <b-form-select
            id="frm-pa-state"
            v-model="form.city"
            :options="itemsCity"
            required
            class="mt-2"></b-form-select>          
          <b-form-input
            id="frm-pa-address"
            v-model="form.address"
            type="text"
            placeholder="Endereço"
            required
            class="mt-2"></b-form-input>
          <b-form-input
            id="frm-pa-complement"
            v-model="form.district"
            type="text"
            placeholder="Complemento"
            required
            class="mt-2"></b-form-input>          
          <b-form-input
            id="frm-pa-district"
            v-model="form.district"
            type="text"
            placeholder="Bairro"
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
            label="Você possui familiaridade com a agenda do Google e com a ferramenta 'Google Meet'?"
            v-slot="{ ariaMeet }">
            <b-form-radio-group
              v-model="form.googleMeet"
              :options="optionsGoogleMeet"
              :aria-describedby="ariaMeet"
              name="frm-pa-gender"
              required></b-form-radio-group>
          </b-form-group>          
          <b-alert show variant="secondary">
            <h5><b-badge variant="dark">Termos de Aceite</b-badge></h5>
            <p class="mb-1">
              <a href="/files/termos-de-uso.pdf" 
                target="_blank">Clique para ler o "Termo de Uso"</a></p>
            <p class="mb-1">
              <a href="/files/codigo-de-etica-psicologo.pdf" 
              target="_blank">Clique para ler o "Código de Ética"</a></p>
            <p class="mb-1">
              <a href="/files/politica-de-privacidade.pdf" 
              target="_blank">Clique para ler a "Política de Privacidade"</a>
            </p>
            <p>
              <a href="#" @click="$bvModal.show('bv-modal-support')">
                Clique para ler ver todos os nossos contatos</a>
            </p>            
            <b-form-group
              class="mt-3"
              label="Termos, Ética e Política"
              v-slot="{ ariaDocs }">
              <b-form-checkbox-group
                v-model="form.docs"
                :options="optionsDocs"
                :aria-describedby="ariaDocs"
                name="chatNetworks"
                required></b-form-checkbox-group>
            </b-form-group>
          </b-alert>
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
        email: null,
        name: null,
        howFindHarmonicus: null,
        state: null,
        googleMeet: null,
        gender: [],
        phoneIsWhatsApp: "",
        city: null,
        address: null,
        district: null,
        cep: null,
        crp: null,
        stateCrp: null,
        docs: null,
        file1: [],
      },
      itemsState: [
        { value: null, text: "Selecione o seu Estado (UF)", disabled: true },
        { value: "GO", text: "Goiás" },
      ],
      itemsCity: [
        { value: null, text: "Selecione sua Cidade", disabled: true },
        { value: "GO", text: "Goiânia" },
      ],
      itemsStateCrp: [
        { value: null, text: "Selecione o estado do seu CRP", disabled: true },
        { value: "GO", text: "Goiás" },
      ],
      itemsHowFind: [
        {
          value: null,
          text: "Ajude-nos! Como conheceu a Harmonicus?",
          disabled: true,
        },
        { value: 1, text: "Indicação de outro paciente" },
        { value: 2, text: "Indicação de psicólogo da plataforma" },
        { value: 3, text: "Propaganda em Congresso" },
        { value: 3, text: "Propaganda no Instagram" },
        { value: 4, text: "Propaganda no Facebook" },
        { value: 5, text: "Propaganda na Rádio FM" },
        { value: 6, text: "Pesquisa no Google" },
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
      optionsDocs: [
        { value: 1, text: 'Li e aceito todos os termos de uso' },
        { value: 2, text: 'Li e estou de acordo com o cógido de ética da profissão' },
        { value: 3, text: 'Li e aceito toda política de privacidade' },
        { value: 4, text: 'Li e estou ciente de todas as formas de contato' },
      ],
      optionsGoogleMeet: [
        { value: 'S', text: 'Sim' },
        { value: 'N', text: 'Não' }
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