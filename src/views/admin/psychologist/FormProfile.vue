<template>
    <b-card class="mb-4" bg-variant="outline-dark" text-variant="dark" title="">
        <b-avatar
            class="mb-2"            
            :src="avatar"
            size="9rem"></b-avatar>
        <b-card-text>
        Olá <strong>{{ genderTitle }} {{ name }}!</strong><br />
        <i>{{ professionalTitle }}, profissional em Harmonicus desde {{ dateRegistry }}</i>
        </b-card-text>
        <hr />
        <h2><b-badge variant="primary">Informações Públicas</b-badge></h2>
        <b-form @submit="onSubmit">
            <b-form-group
                label="Breve resumo profissional"
                label-for="profile"
                invalid-feedback="Breve resumo profissional é requerido"
                :state="stateProfessionalResume">
            <b-form-textarea
                id="profile"
                name="profile"
                required
                v-model="form.professional_resume"
                placeholder="Discorra um breve resumo profissional para seus clientes"
                rows="3"
                max-rows="6"
                :state="stateProfessionalResume"></b-form-textarea>
            </b-form-group>
            <b-form-group
                label="Nível acadêmico"
                label-for="academic-level"
                invalid-feedback="Nível Acadêmico é requerido"
                :state="stateAcademicLevel">            
            <b-form-select 
                id="academic-level"
                name="academic-level"
                required 
                v-model="form.academic_level" 
                :options="optionsAcademicLevel"
                :state="stateAcademicLevel"></b-form-select>
            </b-form-group>
            <b-form-group
                label="Formação acadêmica"
                label-for="academic-formation"
                invalid-feedback="Formação acadêmica é requerida"
                :state="stateAcademicFormation">
                <b-form-input
                    class="mb-2"
                    id="academic-formation"
                    name="academic-formation"
                    required
                    type="text"
                    v-model="form.academic_formation"
                    placeholder="Informe a formação acadêmica"
                    :state="stateAcademicFormation"></b-form-input>            
            </b-form-group>
            <b-form-group
                label="Cursos realizados"
                label-for="courses">
                <b-form-textarea
                    id="courses"
                    name="courses"
                    required
                    v-model="form.courses"
                    placeholder="Informe um breve texto sobre os cursos realizados que queira informar ao leitor"
                    rows="3"
                    max-rows="6"></b-form-textarea>
            </b-form-group>
            <b-form-group
                label="Currículo Lates"
                label-for="input-latesurl">
                <b-form-input
                    class="mb-2"
                    id="input-latesurl"
                    name="input-latesurl"
                    type="text"
                    v-model="form.lates_url"
                    placeholder="http://"></b-form-input>
            </b-form-group>
            <b-form-group
                label="Web Site"
                label-for="input-website">
                <b-form-input
                    class="mb-2"
                    id="input-website"
                    name="input-website"
                    type="text"
                    v-model="form.website_url"
                    placeholder="http://"></b-form-input>
            </b-form-group>
            <b-form-group
                label="Instagram"
                label-for="input-instagram">
                <b-form-input
                    class="mb-2"
                    id="input-instagram"
                    name="input-instagram"
                    type="text"
                    v-model="form.instagram_url"
                    placeholder="@"></b-form-input>
            </b-form-group>
            <b-button 
                type="submit"
                variant="primary">
                <b-icon-box-arrow-in-down></b-icon-box-arrow-in-down>
                Salvar Alterações</b-button>
        </b-form>
    </b-card>
</template>

<script>
import { userAccess } from '@/global'
export default {
    data() {
        return {
            userId: null,
            dateRegistry: null,
            name: null,
            avatar: null,
            professionalTitle: null,
            stateProfessionalResume: null,
            stateAcademicLevel: null,
            stateAcademicFormation: null,
            genderTitle: null,
            form: {
                professional_resume: null,
                academic_level: null,
                academic_formation: null,
                courses: null,
                lates_url: null,
                website_url: null,
                instagram_url: null,
            },
            optionsAcademicLevel: [
                { value: null, text: 'Selecione uma Opção', disabled: true },
                { value: 'Superior Completo', text: 'Superior Completo' },
                { value: 'Mestre', text: 'Mestre' },
                { value: 'Doutor', text: 'Doutor' },
            ]
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            
            const { 
                professional_resume, 
                academic_formation, 
                academic_level,
                courses, 
                instagram_url, 
                lates_url, 
                website_url } = this.form

            this.$http.put(`/psychologist/${this.userId.id}`, {
                professional_resume, 
                academic_formation, 
                academic_level,
                courses, 
                instagram_url, 
                lates_url, 
                website_url
            } ).then(res => {
                console.log('RESPONSE')
                console.log(res)
                window.scrollTo({ top: 0, behavior: 'smooth' });
                this.$toasted.global.defaultSuccess({ msg: 'Perfil atualizado com sucesso!' });
            })
        },
    },
    created() {
        const _access = localStorage.getItem(userAccess)
        this.userId = JSON.parse(_access)        
        this.$http.get(`/psychologist/${this.userId.id}`, {})
            .then(res => {
                this.genderTitle = res.data.gender == 'M' ? 'Dr.' : 'Dra.'
                var _dateRegistry = new Date(res.data.created_at);
                this.dateRegistry = _dateRegistry.toLocaleDateString()
                this.avatar = res.data.file_avatar
                this.name = res.data.name
                this.professionalTitle = res.data.professional_title
                this.form.professional_resume = res.data.professional_resume
                this.form.courses = res.data.courses
                this.form.lates_url = res.data.lates_url
                this.form.academic_level = res.data.academic_level
                this.form.academic_formation = res.data.academic_formation
                this.form.website_url = res.data.website_url
                this.form.instagram_url = res.data.instagram_url
        })
    }
}
</script>

<style>

</style>