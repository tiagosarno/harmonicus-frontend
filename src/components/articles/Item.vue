<template>
  <div>
    <b-card>
      <b-row>
        <b-col md="2">
          <b-link
            tag="router-link"
            v-b-tooltip.hover.bottom
            title="Baixar PDF"
            :to="{ name: 'signUp' }"
          >
            <b-icon-file-earmark-fill
              variant="danger"
              font-scale="6"
            ></b-icon-file-earmark-fill>
          </b-link>
        </b-col>
        <b-col md="10">
          <div class="ma-2 mt-2 ml-2 short-video-description">
            <b-link tag="router-link" :to="{ name: 'signUp' }">
              <strong v-b-tooltip.hover.top title="Baixar PDF"
                >Título do Artigo</strong
              >
            </b-link>
            <span class="small mb-2"
              >por:
              <b-link tag="router-link" :to="{ name: 'signUp' }">
                <strong v-b-tooltip.hover.top title="visitar perfil"
                  >Rosane M M Rocha</strong
                >
              </b-link></span
            >
            <span>Breve descrição do artigo...</span>
          </div>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.short-video-description {
  display: flex;
  flex-direction: column;
}
</style>
