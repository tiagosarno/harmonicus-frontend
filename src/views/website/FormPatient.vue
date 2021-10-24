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
            v-model="form.phone_is_whatsapp">
            Este número é meu WhatsApp
          </b-form-checkbox>
          <b-form-group
            label="Data de Nascimento:"
            class="mt-3">
            <b-form-input
              id="frm-pa-birthdate"
              v-model="form.birth_date"
              type="date"
              required
              class="mt-2"></b-form-input>
          </b-form-group>
          <b-form-group
            class="mt-3"
            label="Dados de Acesso">            
            <b-form-input
              id="frm-pa-email"
              v-model="form.email"
              type="email"
              placeholder="E-mail"
              :state="stateEmail"
              @change="verifyEmail"
              required
              class="mt-2"></b-form-input>
            <b-alert show variant="info" class="mt-1" v-if="showAlertEmail">
              Você precisa confirmar o seu e-mail, por favor <b-link @click="changeAlertEmail"><strong>clique aqui</strong></b-link>.
            </b-alert>
            <b-alert show variant="secondary" class="mt-1" v-if="showConfirmCodeEmail">
              Informe o código recebido no seu e-mail 
              <b-input
                class=""
                id="form-pa-confirm-code-email"
                @change="checkConfirmationEmail"
                @keypress.enter="checkConfirmationEmail"
                v-model="codeEmail"></b-input>
              <b-link @click="reSendCodeEmail">Reenviar código de validação</b-link>
            </b-alert>
            <b-form-input
              id="frm-pa-password"
              v-model="form.password"
              type="password"
              placeholder="Senha ***"
              required
              class="mt-2"></b-form-input>
            <b-form-input
              id="frm-pa-confirm-password"
              v-model="form.confirmPassword"
              type="password"
              placeholder="Confirme a senha ***"
              required
              class="mt-2"></b-form-input>
          </b-form-group>
        </b-card>
        <b-card>
          <b-form-select
            id="frm-pa-state"
            v-model="form.id_country"
            :options="itemsCountry"
            @change="getStates"
            required
            class="mt-2"></b-form-select>
          <b-form-select
            id="frm-pa-state"
            v-model="form.id_state"
            :options="itemsState"
            @change="getCities"
            required
            class="mt-2"></b-form-select>
          <b-form-select
            id="frm-pa-city"
            v-model="form.id_city"
            :options="itemsCity"
            required
            class="mt-2"></b-form-select>
          <b-form-select
            id="frm-pa-howfindharmonicus"
            v-model="form.how_find_harmonicus"
            :options="itemsHowFind"
            required
            class="mt-2"></b-form-select>
          <b-alert show variant="secondary" class="mt-2">
            <h5><b-badge variant="dark">Termo de Uso</b-badge></h5>
            <p class="mb-1">
              <a href="/files/termos-de-uso.pdf" 
                target="_blank">
                Clique para ler o "Termo de Uso" da 
                plataforma Harmonicus</a></p>            
          </b-alert>
          <b-checkbox
            class="mb-2"
            id="acept"
            name="acept"
            v-model="form.acept"
            required
            @change="verifySubmit">
            Estou ciente e aceito todas as condições do <strong>Termo de Uso</strong>.
          </b-checkbox>
          <b-card-footer class="mt-4">
            <b-button type="submit" 
              variant="primary" 
              class="mr-2"
              :disabled="form.disableSubmit">
              Enviar <b-icon-box-arrow-right></b-icon-box-arrow-right>
            </b-button>
            <b-button type="reset" 
              variant="danger"
              :disabled="form.disableSubmit">Limpar</b-button>
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
      showAlertEmail: false,
      showConfirmCodeEmail: false,
      stateEmail: null,
      form: {
        email: null,
        name: null,
        gender: [],
        phone_is_whatsapp: null,
        disableSubmit: true,
        how_find_harmonicus: null,
        id_country: null,
        id_state: null,
        id_city: null,
        acept: null,
        password: null,
        cconfirmPassword: null,
      },
      itemsCountry: [
        { value: null, text: "Selecione o seu país", disabled: true },
      ],
      itemsState: [
        { value: null, text: "Selecione o seu Estado (UF)", disabled: true },
      ],
      itemsCity: [
        { value: null, text: "Selecione a sua Cidade", disabled: true },
      ],
      itemsHowFind: [
        {
          value: null,
          text: "Ajude-nos. Como conheceu Harmonicus?",
          disabled: true,
        },
        { 
          value: 'Indicação de outro paciente', 
          text: 'Indicação de outro paciente' 
        },
        { 
          value: 'Indicação de psicólogo da plataforma', 
          text: 'Indicação de psicólogo da plataforma' 
        },
        { value: 'Propaganda no Instagram', text: 'Propaganda no Instagram' },
        { value: 'Propaganda no Facebook', text: 'Propaganda no Facebook' },
        { value: 'Pesquisa no Google', text: 'Pesquisa no Google' },
      ],      
      optionsGender: [
        { value: 'M', text: 'Masculino' },
        { value: 'F', text: 'Feminino' },
      ],
    };
  },
  methods: {
    verifyEmail(){
      this.showAlertEmail = true
      this.showConfirmCodeEmail = false
    },
    changeAlertEmail(){
      this.stateEmail = false
      this.showAlertEmail = false
      this.showConfirmCodeEmail = true
      this.$toasted.global.defaultSuccess({ msg: 'Enviando e-mail com o código de confirmação..'})
    },
    checkConfirmationEmail() {
      this.$toasted.global.defaultSuccess({ msg: 'Validando Código..'})
    },
    verifySubmit(e) {
        this.form.disableSubmit = !e
    },
    onSubmit(event) {
      event.preventDefault()

      if(this.form.password !== this.form.cconfirmPassword) {
        this.$toasted.global.defaultError({msg: 'Senha e Confirmação de senha não conferem'})
        return false
      }

      if(this.stateEmail === false) {
        this.$toasted.global.defaultError({msg: 'É necessário confirmar o seu e-mail para finalizar o seu cadastro'})
        return false
      }

      this.$http.post('/patient/store', {
        status: 0,
        name: this.form.name,
        email: this.form.email,
        cpf: this.form.cpf,
        birth_date: this.form.birth_date,
        phone: this.form.phone,
        phone_is_whatsapp: this.form.phone_is_whatsapp,
        how_find_harmonicus: this.form.how_find_harmonicus,        
      }).then(() => {
          this.$toasted.global.defaultSuccess({ msg: 'Cadastro Realizado com Sucesso'})
          this.resetForm()
      })
    },
    resetForm(){
      this.form = []
      this.form.howFindHarmonicus = null
      this.form.id_country = null
      this.form.id_state = null
      this.form.id_city = null
      this.verifySubmit()
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true;
      });
    },
    onReset(event) {
      event.preventDefault()
      this.resetForm()
    },
    getStates() {
      this.form.id_state = null
      this.form.id_city = null
      this.itemsState = [
        { 
          value: null, 
          text: "Selecione o seu Estado (UF)", 
          disabled: true 
        },
      ]
      this.itemsCity = [
        { value: null, text: "Selecione a sua Cidade", disabled: true },
      ]

      this.$http.post('/state/search', {
        'key': 'id_country',
        'value': this.form.id_country
      }).then(res => {
        res.data.map((i) => {
          this.itemsState.push({
            'text': i.name,
            'value': i.id,
          })
        })
      })
    },
    getCities() {
      this.itemsCity = [
        { value: null, text: "Selecione a sua Cidade", disabled: true },
      ]

      this.$http.post('/city/search', {
        'key': 'uf',
        'value': this.form.id_state
      }).then(res => {
        res.data.map((i) => {
          this.itemsCity.push({
            'text': i.name,
            'value': i.id,
          })
        })
      })
    }
  },
  created() {
    this.$http.get('/country')
    .then(res => {
      res.data.map((i) => {
        this.itemsCountry.push({
          'text': i.name_pt,
          'value': i.id,
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

<style></style>
