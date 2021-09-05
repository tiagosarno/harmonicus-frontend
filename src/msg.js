import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
    iconPack: 'fontawesome',
    duration: 3500
})

Vue.toasted.register(
    'defaultSuccess',
    payload => !payload.msg ? 'Operação realizada com sucesso!' : payload.msg,
    { 
        theme: "toasted-primary", 
        position: "top-center",
        type: "success", 
        icon: "check",
        className: ["toasting"], 
    }
)

Vue.toasted.register(
    'defaultError',
    payload => !payload.msg ? 'Oops.. Erro inesperado.' : payload.msg,
    { 
        theme: "toasted-primary", 
        position: "top-center",
        type: "error", 
        icon: "times",
        className: ["toasting"], 
    }
)