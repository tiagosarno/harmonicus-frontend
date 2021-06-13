<template>
    <b-card>
        <b-card-title>Dr. Rubens Moura Neto</b-card-title>
        <b-card-sub-title>Terça-feira 14/05/2011 às 20:00 horas</b-card-sub-title>
        <b-card-body>
            <b-form-group label="Deseja repetir esta escolha para mais sessões?">
                <b-form-radio 
                    v-model="selectedMore"
                    name="some-radios" 
                    value="S">Sim</b-form-radio>
                <b-form-radio 
                    v-model="selectedMore"
                    name="some-radios" 
                    value="N">Não</b-form-radio>
            </b-form-group>
            <b-form-select 
                class="mt-2"
                v-model="selectedProduct" 
                :options="optionsProducts"></b-form-select>
            <b-form-select 
                class="mt-2"
                v-model="selectedClient" 
                :options="optionsClients"></b-form-select>
            <b-alert show variant="warning" class="mt-2">
                <span>Seu investimento será de</span><br />
                <strong>R$ 750,00</strong>
                <span class="small"> (a vista ou até 6x nos cartões de créditos)</span><br />                    
                <b-form-group label="Escolha a forma de pagamento?">
                    <b-form-radio 
                        v-model="selectedPaymentMethod"
                        name="some-radios-2" 
                        value="1">Boleto bancário</b-form-radio>
                    <b-form-radio 
                        v-model="selectedPaymentMethod"
                        name="some-radios-2" 
                        value="2">Cartão de Crédito</b-form-radio>
                </b-form-group>
            </b-alert>                
            <b-link :to="{ name: 'home' }">Termos de Contratação</b-link>
            <b-form-checkbox
                id="checkbox-1"
                v-model="status"
                name="checkbox-1"
                value="accepted"
                unchecked-value="not_accepted">
                Declaro que li e que estou de acordo com os termos do contrato
                </b-form-checkbox>
            <b-button
                class="mt-2"
                variant="success">Concluir Agendamento</b-button>
            
        </b-card-body>
    </b-card>
</template>

<script>
export default {
    data(){
        return{
            file1: null,
            selectedMore: 'N',
            selectedProduct: null,
            selectedClient: null,
            selectedPaymentMethod: 1,
            optionsProducts: [
                { value: null, text: 'Pacotes disponíveis', disabled: true },
                { value: 1, text: 'Produto 1' },
                { value: 2, text: 'Produto 2' },
                { value: 3, text: 'Produto 3' },
            ],
            optionsClients: [
                { value: null, text: 'Selecione quem será consultado', disabled: true },
                { value: 1, text: 'Tiago Rocha Sarno (Titular)'},
                { value: 2, text: 'Aline Dias Robeiro (Dependente 1)'},
                { value: 2, text: 'Gabriel Rocha Sarno (Dependente 2)'},
            ]
        }
    }
}
</script>

<style>

</style>