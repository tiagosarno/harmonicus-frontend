<template>
    <div class="se-psy-data">
        <b-link 
            :to="{ name: '' }">
            <strong v-b-tooltip.hover.top title="visitar perfil">Rubens Moura Neto</strong>
        </b-link>
        <span>
            <p class="mb-1">Psicólogo Clínico, CRP 000548/15 9ª Região (GO), 
                Goiânia - GO
            </p> 
            <p class="mb-1">
                <b-badge class="mr-2">Constelação Familiar</b-badge>
                <b-badge class="mr-2">Depressão</b-badge>
            </p>           
        </span>
        <b-alert show variant="success" class="mt-2 mb-1">
            <strong>Consulta R$ 99,00</strong>
        </b-alert>        
        <b-alert show variant="secondary">
            <strong>Duração 60 minutos</strong>
        </b-alert>        
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.se-psy-data{
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 100%;
  padding: 5px;
}
@media screen and (max-width: 768px){
    .se-psy-data{
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 5px;
    }
}
</style>