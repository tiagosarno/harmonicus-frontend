<template>
  <b-modal
    id="modal-access"
    ref="modal"
    header-bg-variant="primary"
    header-text-variant="light"
    @show="resetModal"
    @hidden="resetModal"
    @ok="handleOk">
    <template #modal-title>
      <b-icon-shield-lock></b-icon-shield-lock> Acessar Sistema
    </template>    
    <div class="d-block">
        <h4 v-if="rememberPassword" class="text-center"><b-badge variant="warning">Processo de recuperação de acesso</b-badge></h4>
        <span v-if="rememberPassword" class="text-center">
            Informe o seu e-mail cadastrado no campo abaixo para receber um link onde você
            poderá gerar uma nova senha de acesso.
        </span>
        <b-alert v-model="showAlert" :variant="variantAlert" v-html="alertMessage"></b-alert>
        <form class="mt-4" ref="formAccess" @submit.stop.prevent="handleSubmit">            
            <b-form-group
                label="E-mail"
                label-for="email-input"
                invalid-feedback="E-mail é requerido"
                :state="emailState">
                <b-form-input
                    class="mb-2"
                    id="email-input"
                    type="email"
                    v-model="email"
                    placeholder="Informe o seu E-mail"
                    :state="emailState"
                    required></b-form-input>            
            </b-form-group>
            <b-form-group
                label="Senha"
                label-for="password-input"
                invalid-feedback="Senha é requerida"
                v-if="!rememberPassword"
                :state="passwordState">
                <b-form-input
                    class="mb-2"
                    id="password-input"
                    type="password"
                    v-model="password"
                    placeholder="Informe a sua Senha"
                    :state="passwordState"
                    required></b-form-input>    
            </b-form-group>        
            <input type="hidden" v-else v-model="rememberPassword" />
        </form>
        <div class="text-right">
            <b-link 
                v-if="!rememberPassword"
                v-b-tooltip.hover
                title="Clique para receber um link onde poderá criar uma nova senha de acesso"
                @click="rememberPassword = !rememberPassword">Lembrar senha</b-link>
        </div>
    </div>
  </b-modal>
</template>

<script>
import { userKey, userTypeAccess } from '@/global'

export default {
    data(){
        return {
            email: null,
            emailState: null,
            password: null,
            passwordState: null,
            rememberPassword: false,
            variantAlert: 'danger',
            showAlert: false,
            alertMessage: '',
        }
    },
    methods: {
        checkFormValidity() {
            const valid = this.$refs.formAccess.checkValidity()
            this.emailState = valid
            this.passwordState = valid
            return valid
        },
        resetModal() {
            this.email = ''
            this.emailState = null
            this.password = ''
            this.passwordState = null
            this.rememberPassword = false
        },
        handleOk(bvModalEvt) {
            // Prevent modal from closing
            bvModalEvt.preventDefault()
            // Trigger submit handler
            this.handleSubmit()
        },
        handleSubmit() {
            if(this.rememberPassword) {
                this.newAccess()
            }
            else {
                this.signIn()
            }            
        },
        newAccess() {
            console.log('processo de recuperação de acesso..')
        },
        signIn() {
            // Exit when the form isn't valid
            if (!this.checkFormValidity()) {
                return
            }

            this.variantAlert = 'secondary'
            this.alertMessage = 'Aguarde, processando..'
            this.showAlert = true

            // Set Authorization Token
            this.$http.post('auth/login',{
                'email': this.email,
                'password': this.password
            }).then(res => {
                if(res.status == 200) {                    
                    this.$http.post('/user/search', {
                        key: 'email',
                        value: this.email,
                        first: true
                    }).then(response => {    
                        if(response.data.id_admin != null
                            && response.data.id_psychologist == null
                            && response.data.id_patient == null) {
                            console.log('admin access')
                            localStorage.setItem(userTypeAccess, 'admin')
                        }
                        else if(response.data.id_psychologist != null
                                    && response.data.id_admin == null
                                    && response.data.id_patient == null) {
                            console.log('psy access')
                            localStorage.setItem(userTypeAccess, 'psychologist')
                        }
                        else if(response.data.id_patient != null
                                    && response.data.id_admin == null
                                    && response.data.id_psychologist == null) {
                            console.log('patient access')
                            localStorage.setItem(userTypeAccess, 'patient')
                        }
                    })
                    this.variantAlert = 'success'
                    this.alertMessage = '<strong>Sucesso!</strong> Carregando sistema..'
                    this.showAlert = true
                    this.$http.defaults.headers.common['Authorization'] = `Bearer ${res.data.access_token}`
                    localStorage.setItem(userKey, JSON.stringify(res.data))
                    this.email = ''
                    this.password = ''
                    setTimeout(()=>{  
                        this.rememberPassword = false     
                        this.$store.commit('changeRenderAdmin', {
                            show: true,
                            type: localStorage.getItem(userTypeAccess)
                        })
                        this.$router.push('/admin')         
                        this.$bvModal.hide('modal-access')
                    }, 2000)
                }
                else if(res.data.status == 401) {
                    delete this.$http.defaults.headers.common['Authorization']
                    localStorage.removeItem(userKey)
                    this.variantAlert = 'danger'
                    this.showAlert = true
                    this.alertMessage = '<strong>Oops.. </strong>usuário ou senha inválidos!'
                    setTimeout(() => {
                        this.showAlert = false
                        this.alertMessage = '';
                    }, 3500);
                }
            }).catch(res => {
                this.variantAlert = 'danger'
                this.showAlert = true
                this.alertMessage('Problemas ao tentar realizar acesso ao sistema. Favor entrar em contato com o nosso suporte técnico ou tentar novamente mais tarde')
                console.log(res)                
            })
        }
    }
}
</script>

<style>

</style>