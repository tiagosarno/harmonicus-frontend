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
          <div class="mt-3 mb-3">
            <h5><b-badge variant="dark">Selecione suas especialidades</b-badge></h5>
            <multiselect v-model="form.speciality"
              :options="itemsSpeciality" 
              :multiple="true"
              placeholder="Selecione ou Digite para escolher" 
              track-by="text" 
              label="text">
              <span slot="noResult">
                Oops! Sem resultados.
              </span>
            </multiselect>
          </div>
          <div class="mt-3 mb-3">
            <h5><b-badge variant="dark">Selecione suas áreas de atuações</b-badge></h5>
            <multiselect v-model="form.themes"
              :options="itemsTheme" 
              :multiple="true"
              placeholder="Selecione ou Digite para escolher" 
              track-by="text" 
              label="text">
              <span slot="noResult">
                Oops! Sem resultados.
              </span>
            </multiselect>
          </div>
          <div class="mt-3 mb-3">
            <h5><b-badge variant="dark">Quais os grupos que você atenderá?</b-badge></h5>
            <multiselect v-model="form.ageGroup"
              :options="itemsAgeGroup" 
              :multiple="true"
              placeholder="Selecione ou Digite para escolher" 
              track-by="text" 
              label="text">
              <span slot="noResult">
                Oops! Sem resultados.
              </span>
            </multiselect>
          </div>
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
        </b-card>
        <b-card>
          <b-alert 
            show 
            variant="secondary"
            class="mt-2">
            <h5><b-badge variant="dark">Documentos Obrigatórios</b-badge></h5>

            <b-form-file
              class="mt-2"
              v-model="form.file1"
              :state="Boolean(form.file1)"
              placeholder="Certificado de conclusão de curso"
              drop-placeholder="Certificado de conclusão de curso"
              required
              browse-text="Selecionar"></b-form-file>
            <b-form-file
              class="mt-2"
              v-model="form.file2"
              :state="Boolean(form.file2)"
              placeholder="Fotografia para o perfil"
              drop-placeholder="Fotografia para o perfil"
              required
              browse-text="Selecionar"></b-form-file>
            <b-form-file
              class="mt-2"
              v-model="form.file3"
              :state="Boolean(form.file3)"
              placeholder="Certidão de Regularidade de Inscrição de Pessoa Física"
              drop-placeholder="Certidão de Regularidade de Inscrição de Pessoa Física"
              required
              browse-text="Selecionar">
              </b-form-file>
            <b-form-file
              class="mt-2"
              v-model="form.file4"
              :state="Boolean(form.file4)"
              placeholder="Cópia do CRP"
              drop-placeholder="Cópia do CRP, arraste e solte aqui..."
              required
              browse-text="Selecionar"></b-form-file>
            <b-form-file
              class="mt-2"
              v-model="form.file5"
              :state="Boolean(form.file5)"
              placeholder="Comprovante de endereço"
              drop-placeholder="Comprovante do endereço"
              required
              browse-text="Selecionar"></b-form-file>
            <b-form-file
              class="mt-2"
              v-model="form.file6"
              :state="Boolean(form.file6)"
              placeholder="Cópia do RG e CPF"
              drop-placeholder="Cópia do RG e CPF"
              required
              browse-text="Selecionar"></b-form-file>
          </b-alert>
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
import Multiselect from 'vue-multiselect'

export default {
  components: { Multiselect },
  data() {
    return {      
      showForm: true,
      form: {
        email: null,
        name: null,
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
        themes: null,
        speciality: null,
        ageGroup: null,
        docs: [],
        file1: [],
        file2: [],
        file3: [],
        file4: [],
        file5: [],
        file6: [],
      },
      itemsSpeciality: [],
      itemsTheme: [],
      itemsAgeGroup: [
        { value: 1, text: "Adultos" },
        { value: 2, text: "Casais" },
        { value: 3, text: "Crianças" },
        { value: 4, text: "Idosos" },
        { value: 5, text: "Adolecentes" },
      ],
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
      ],      
      optionsGender: [
        { value: 'M', text: 'Masculino' },
        { value: 'F', text: 'Feminino' },
      ],
      optionsDocs: [
        { value: 1, text: 'Estou ciente que a Harmonicus atua integrada com a minha agenda Google e com a dos meus pacientes. Também estou ciente que a plataforma recomenda o uso da ferramenta Google Meeting para a realização dos meus atendimentos.' },
        { value: 2, text: 'Li e aceito todos os termos de uso' },
        { value: 3, text: 'Li e estou de acordo com o cógido de ética da profissão' },
        { value: 4, text: 'Li e aceito toda política de privacidade' },
        { value: 5, text: 'Li e estou ciente de todas as formas de contato' },
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
  created() {
    this.$http.get('/speciality')
      .then(res => {
        res.data.map((d) => {
          this.itemsSpeciality.push({
            'value': d.id,
            'text': d.description,
          })
        })
      })

    this.$http.get('/themes')
      .then(res => {
        res.data.map((d) => {
          this.itemsTheme.push({
            'value': d.id,
            'text': d.description,
          })
        })
      })
    
    this.$http.get('/regional')
      .then(res => {
        res.data.map((d) => {
          this.itemsStateCrp.push({
            'value': d.id,
            'text': `${d.uf} (${d.description})`
          })
        })
      })
  },
  mounted() {
    this.$store.commit('changeShowSearch', false)
  },
  destroyed() {
    this.$store.commit('changeShowSearch', true)
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.multiselect__tags {
  border: 1px solid #CCC;
}
</style>