<template>
  <b-card class="mt-2">
    <b-card-title>
        <h2>Formulário para a inclusão de um novo vídeo</h2>
        <h5><b-badge variant="danger">Todos os campos são obrigatórios</b-badge></h5>
    </b-card-title>
    <b-form @submit="onSubmit" @reset="onReset">
        <b-card-body>
            <div class="mb-3">
                <strong>Selecione o(s) tema(s) abordado(s) no vídeo</strong>
                <multiselect v-model="form.themes"
                :options="itemsTheme" 
                :multiple="true"
                placeholder="Selecione ou Digite para escolher" 
                track-by="text" 
                label="text"
                required>
                <span slot="noResult">
                    Oops! Sem resultados.
                </span>
                </multiselect>
            </div>
            <div class="mb-3">
                <strong>Informe uma breve descrição sobre o vídeo</strong>
                <b-form-textarea
                    class="mt-1"
                    id="video-description"
                    v-model="form.videoDescription"
                    rows="3"
                    max-rows="6"
                    required></b-form-textarea>            
            </div>
            <b-input 
                class="mt-2"
                type="text" 
                v-model="form.urlVideo" 
                placeholder="Endereço ( URL ) do vídeo no YouTube" 
                @change="getVideoData"
                required></b-input>
            <b-alert class="mt-2" show variant="info"><strong>Título:</strong> {{ form.videoTitle }}</b-alert>
            <input type="hidden" name="title" id="title" v-model="form.videoTitle" />
            <div class="preview">
                <b-embed
                    type="iframe"
                    aspect="16by9"
                    :src="form.videoEmbed"
                    allowfullscreen></b-embed>
            </div>            
        </b-card-body>
        <b-checkbox
            class="mb-2"
            id="acept"
            name="acept"
            required
            @change="verifySubmit">Estou ciente que este vídeo passará por um 
            processo de moderação antes que seja publicado na minha página e na 
            plataforma para todos.</b-checkbox>
        <b-card-footer>
        <b-button type="submit" variant="primary" :disabled="form.disableSubmit">
            <b-icon-box-arrow-in-right></b-icon-box-arrow-in-right>
            Enviar Vídeo</b-button>
        </b-card-footer>
    </b-form>
  </b-card>
</template>

<script>
import Multiselect from 'vue-multiselect'
import { userAccess } from '@/global'
import bus from '@/bus'

export default {
    components: { Multiselect },
    data() {
        return {
            form: {
                themes: [],
                urlVideo: null,
                videoEmbed: null,
                videoTitle: null,
                videoDescription: null,
                disableSubmit: true
            },
            itemsTheme: [],
        }
    },
    created() {
        this.$http.get('/themes').then(res => {
            res.data.map((d) => {
                this.itemsTheme.push({
                    'value': d.id,
                    'text': d.description,
                })
            })
        })
    },
    methods: {
        verifySubmit(e) {
            this.form.disableSubmit = !e
        },
        getThemes() {
            this.itemsTheme = []
            this.form.theme = null
            this.itemsTheme.push({
                'value': null,
                'text': 'Carregando temas...'
            })
            this.$http.post('/themes', {
                'key': 'area_id',
                'value': this.form.area
            }).then(res => {
                    this.itemsTheme = []
                    this.form.theme = null
                    this.itemsTheme.push({
                        'value': null,
                        'text': 'Escolha o tema do seu vídeo',
                        'disabled': true
                    })
                    res.data.map((i) => {
                        this.itemsTheme.push({
                            'value': i.id,
                            'text': i.description
                        })
                    })
                })       
        },
        getVideoData() {
            this.form.videoEmbed = null
            this.form.videoTitle = null
            if(this.form.urlVideo == null || this.form.urlVideo == '') {
                this.$toasted.global.defaultError({ msg: 'Informe a URL do vídeo desejado'})
                return false
            }
            this.$toasted.global.defaultSuccess({ msg: 'Processando...'})
            const videoArray = this.form.urlVideo.split('v=')
            const videoId = videoArray[1].split("&")
            console.log(videoId[0])
            this.$http.get(`/video/youtube/v=${videoId[0]}`)
            .then(res => {
                console.log(res)
                this.form.videoEmbed = 'https://www.youtube.com/embed/' + videoId[0]
                console.log(this.form.videoEmbed)
                this.form.videoTitle = res.data.title
            })
        },
        onSubmit(event) {
            event.preventDefault()

            if(this.form.themes.length == 0) {
                this.$toasted.global.defaultError({ 
                    msg: 'ATENÇÃO! Você deve escolher ao menos um tema que está sendo abordado no seu vídeo.'
                })
                return false
            }

            const _access = localStorage.getItem(userAccess)
            const jsonUserAccess = JSON.parse(_access)

            this.$http.post('/video/store', {
                id_psychologist: jsonUserAccess.id,
                id_theme: 1,
                status: 0,
                title: this.form.videoTitle,
                description: this.form.videoDescription,
                video: this.form.videoEmbed
            }).then(res => {
                console.log(res)
                this.$toasted.global.defaultSuccess({ msg: 'Vídeo gravado com sucesso!'})
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setTimeout(() => {
                    this.form = []
                    bus.$emit('hideFormNewVideo', true)
                }, 2000);
            })
        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form = []
        }
    }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.preview {
    width: 40%;
    height: 100%;
    border: 1px solid #CCC;
}
.multiselect__tags {
  border: 1px solid #CCC;
}
</style>
