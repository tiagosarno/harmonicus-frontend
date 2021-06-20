<template>
  <div>
    <b-card img-top v-if="box == 'yes'">
      <b-embed
        type="iframe"
        aspect="16by9"
        src="https://www.youtube.com/embed/xEMejUFlugQ"
        allowfullscreen></b-embed>
      <div class="mt-2">
        <span>por </span><b-link 
            :to="{ name: 'psyPage', params: { 'page': 'rosanerocha' } }"> 
            <strong v-b-tooltip.hover.top title="visitar perfil">Rubens Moura Neto</strong>
        </b-link>
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in to additional content.
          This card has even longer content than the first.
        </b-card-text>
      </div>
      <template #footer v-if="footer == 'yes'">
        <small class="text-muted">há 5 dias</small>
      </template>
    </b-card>
    <b-card no-body v-else>
      <b-embed
        type="iframe"
        aspect="16by9"
        src="https://www.youtube.com/embed/xEMejUFlugQ"
        allowfullscreen></b-embed>
      <div class="mt-2 px-2">
        <span>por </span><b-link 
            :to="{ name: 'psyPage', params: { 'page': 'rosanerocha' } }"> 
            <strong v-b-tooltip.hover.top title="visitar perfil">Rubens Moura Neto</strong>
        </b-link>
        <b-card-text>
          This is a wider card with supporting text below as a natural lead-in to additional content.
          This card has even longer content than the first.
        </b-card-text>
      </div>
      <template #footer v-if="footer == 'yes'">
        <small class="text-muted">há 5 dias</small>
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ['box','footer'],
  computed: {
    itemStyle() {
      return 'img-top';
    }
  }
};
</script>

<style lang="scss">
.short-video-description{
  display: flex;
  flex-direction: column;
}
</style>
