<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-navbar-brand :to="{ name: 'admin-dashboard' }">
            Harmonicus</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <PsyNavItems v-if="profileAdmin == 'psychologist'" />
        <PatientNavItems v-if="profileAdmin == 'patient'" />
        <AdminNavItems v-if="profileAdmin == 'admin'" />

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
                <b-avatar
                    class="mr-2"
                    src="https://www.psitto.com.br/wp-content/uploads/2025/12/psicologo-mauricio-dornelas-300x300.jpeg"
                    size="2rem"></b-avatar>
                <em>Rosane M M Rocha</em>
            </template>
            <b-dropdown-item href="#">Editar Perfil</b-dropdown-item>
            <b-dropdown-item @click="logout">Sair do Sistema</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PsyNavItems from './psychologists/PsyNavItems.vue'
import PatientNavItems from './patients/PatientNavItems.vue'
import AdminNavItems from './admin/AdminNavItems.vue'

export default {
    data(){
        return {
            
        }
    },
    created() {
        this.$store.commit('changeProfileAdmin', 'psychologist')
    },
    components: { PsyNavItems, PatientNavItems, AdminNavItems },
    computed: mapGetters({
        profileAdmin: 'profileAdmin'
    }),
    methods: {
        logout() {
            this.$store.commit('changeRenderAdmin', false)
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>