<template>
  <b-container fluid class="box-footer">
    <b-card bg-variant="primary">
      <div class="container-footer">
        <div class="item-footer">
          <p><b-link :to="{ name: 'videos' }">Videoteca</b-link></p>
          <p><b-link :to="{ name: 'articles' }">Artigos</b-link></p>
          <p><b-link :to="{ name: 'whoIs' }">Quem Somos</b-link></p>
          <p><b-link 
            v-b-modal.modal-prevent-closing>Assinar Newsletter</b-link></p>
          <p><a href="#" 
            @click="$bvModal.show('bv-modal-support')">Suporte Técnico</a></p>
          <b-modal id="bv-modal-support" hide-footer>
            <template #modal-title>
              Contatos & Suporte técnico
            </template>
            <div class="d-block text-left">
              <p class="mb-1"><strong>E-mails</strong></p>
              <p class="mb-1">suporte@harmonicus.com.br</p>
              <p class="mb-1">imprensa@harmonicus.com.br</p>
              <p class="mb-1"><strong>Horário de Atendimento</strong></p>
              <p class="mb-1">De segunda a sexta-feira, das 9 às 17 horas</p>
              <p class="mb-1"><strong>Endereço</strong></p>
              <p class="mb-1">Avenida Rio Branco, 1º andar, Sala 203, 
                CEP 74565-310, Goiânia, Goiás, Fone 4005-7878</p>
            </div>
            <b-button class="mt-3" block 
              @click="$bvModal.hide('bv-modal-support')">Fechar</b-button>
          </b-modal>
          <b-modal
            id="modal-prevent-closing"
            ref="modal"
            title="Assine nossa Newsletter"
            @show="resetModal"
            @hidden="resetModal"
            @ok="handleOk"
          >
            <strong>
              Informe seu e-mail no campo abaixo e receba semanalmente as últimas
              atualizações de conteúdos da Harmonicus.
            </strong>
            <form class="mt-4" ref="form" @submit.stop.prevent="handleSubmit">
              <b-form-group
                label="E-mail"
                label-for="email-input"
                invalid-feedback="E-mail é requerido"
                :state="emailState"
              >
                <b-form-input
                  id="email-input"
                  type="email"
                  v-model="email"
                  :state="emailState"
                  required
                ></b-form-input>
              </b-form-group>
            </form>
            <h5>{{ msg }}</h5>
          </b-modal>
        </div>
        <div class="item-footer">
          <p><b-link :to="{ name: 'signUp', params: { component: 'FormPsychologist' } }">Faça parte do time (Cadastro)</b-link></p>
          <p><b-link :to="{ name: 'questions' }">FAQ (Perguntas Frequentes)</b-link></p>
          <p><a href="/files/codigo-de-etica-psicologo.pdf" target="_blank">Código de Ética</a></p>
          <p><a href="/files/politica-de-privacidade.pdf" target="_blank">Política de Privacidade</a></p>
          <p>
            <a href="/files/RESOLUCAO-N-11-DE-11-DE-MAIO-DE-2018.pdf" 
              target="_blank">Resolução CFP nº 11/2018</a>
          </p>          
        </div>
        <div class="item-footer">
          <p>
            <a href="https://site.cfp.org.br"
              target="_blank">Conselho Federal de Psicologia</a>
          </p>
          <p><span>CNES 00000000/000</span></p>
          <p><span>suporte@harmonicus.com.br</span></p>
          <p><span>imprensa@harmonicus.com.br</span></p>
          <p>
            <span
              >Avenida Rio Branco, 1º andar, Sala 203, CEP 74565-310, Goiânia,
              Goiás, Fone 4005-7878</span
            >
          </p>
        </div>
        <div class="item-footer footer-logo">
            <img src="@/assets/harmonicus-white.png" height="160" />
            <b-button-group class="mt-3">
              <b-button
                @click="accessInstagram"
                variant="secondary"
                v-b-tooltip.hover
                title="Suporte WhatsApp"
              >
                <b-icon-phone></b-icon-phone>
              </b-button>
              <b-button
                @click="accessInstagram"
                variant="secondary"
                v-b-tooltip.hover
                title="Siga-nos no Instagram"
              >
                <b-icon-instagram></b-icon-instagram>
              </b-button>
              <b-button
                @click="accessYouTube"
                variant="secondary"
                v-b-tooltip.hover
                title="Acesse nosso YouTube"
              >
                <b-icon-youtube></b-icon-youtube>
              </b-button>
            </b-button-group>
        </div>
      </div>
    </b-card>
    <b-row class="mt-3">
      <b-col class="copy">
        <span>Copyright © 2021. Todos os direitos reservados</span>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data(){
    return {
      email: '',
      emailState: null,
      submittedEmails: [],
      msg: null
    }
  },
  methods: {
    accessInstagram() {
      window.open("http://instagram.com/harmonicus.psi", "_blank");
    },
    accessYouTube() {
      window.open("http://youtube.com", "_blank");
    },
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.emailState = valid
      return valid
    },
    resetModal() {
      this.email = ''
      this.emailState = null
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      
      // FIXME, register e-mail on backEnd
      console.log(this.email)
      
      this.msg = `Inclusão do e-mail "${this.email}" realizada com sucesso`
      this.email = ''

      // Hide the modal manually
      setTimeout(()=>{
        this.$bvModal.hide('modal-prevent-closing')
      }, 2000)
    }
  },
};
</script>

<style lang="scss">
.container-footer {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
}
.item-footer {
  display: flex;
  flex-direction: column;
  width: 24%;
  min-width: 300px;
  justify-content: flex-start;
  align-self: flex-start;
  margin: 5px;
}
.box-footer {
  height: auto;
  margin-top: 20px;
  padding-top: 20px;  
  background-color: #023770;

  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    color: white;
    text-decoration: underline;
  }
  span,
  strong {
    color: white;
  }
}

.copy,
.footer-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .box-footer {
    flex-wrap: wrap;
  }
}
</style>