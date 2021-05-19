<template>
  <b-container fluid class="box-footer">
    <b-row>
      <b-col>
          <p><strong>Menu</strong></p>
          <p><a href="#">Quem Somos</a></p>
          <p><a href="#">Artigos</a></p>
          <p><a href="#">Videoteca</a></p>
          <p><a href="#">Encontrar Psicólogos</a></p>
          <p><a href="#">Assinar Newsletter</a></p>
      </b-col>
      <b-col>
          <p><strong>Itens Importantes</strong></p>
          <p><a href="#">Faça parte do time (Cadastro)</a></p>
          <p><a href="#">FAQ (Perguntas Frequentes)</a></p>
          <p><a href="#">Código de Ética</a></p>
          <p><a href="#">Política de Privacidade</a></p>
          <p><a href="#">CRP CEO Rosane Rocha</a></p>
      </b-col>
      <b-col>
          <p><br /></p>
          <p><a href="#">CNES 00000000/000</a></p>
          <p><a href="#">0800-1548-0707</a></p>
          <p><a href="#">suporte@harmonicus.com.br</a></p> 
          <p><span>Avenida Rio Branco, 1º andar, Sala 203, CEP 74565-310, Goiânia, Goiás</span></p>            
      </b-col>
      <b-col class="footer-logo">
        <b-row>
          <b-col>
            <img src="@/assets/harmonicus-white.png" height="160" />
            <br /><br />              
            <b-button-group>
                <b-button @click="accessInstagram"
                  variant="secondary" 
                  v-b-tooltip.hover title="Siga-nos no Instagram">
                    <b-icon-instagram></b-icon-instagram>
                </b-button>
                <b-button @click="accessYouTube"
                  variant="secondary"
                  v-b-tooltip.hover title="Acesse nosso YouTube">
                    <b-icon-youtube></b-icon-youtube>
                </b-button>
            </b-button-group>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row>
        <b-col class="copy">
            <span>copyright © 2021 todos os direitos reservados</span>
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  methods: {
    accessInstagram(){
      window.open(
        'http://instagram.com/harmonicus.psi',
        '_blank'
      )
    },
    accessYouTube(){
      window.open(
        'http://youtube.com',
        '_blank'
      )
    }
  }
}
</script>

<style lang="scss">
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
    span, strong {
        color: white;
    }

  } 
  
  .copy, .footer-logo {
      display: flex;
      justify-content: center;
      align-items: center;
  }

  @media screen and (max-width: 768px) {
    .box-footer{
      flex-wrap: wrap;
    }
  }
</style>