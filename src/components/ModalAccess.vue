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
export default {
    data(){
        return {
            email: null,
            emailState: null,
            password: null,
            passwordState: null,
            rememberPassword: false
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
            // Exit when the form isn't valid
            if (!this.checkFormValidity()) {
                return
            }
                        
            // this.msg = `Inclusão do e-mail "${this.email}" realizada com sucesso`
            this.email = ''
            this.password = ''

            // Success Access, auto-hide the modal
            setTimeout(()=>{  
                this.rememberPassword = false     
                this.$store.commit('changeRenderAdmin', true)
                this.$router.push('/admin')         
                this.$bvModal.hide('modal-access')
            }, 2000)
        }
    }
}
</script>

<style>

</style>