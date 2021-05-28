<template>
  <div>
    <b-card-title>
      <span>O que é a</span> <strong>Harmonicus?</strong>
    </b-card-title>
    <b-card-body>
      Assista nossa <strong>CEO Rosane Rocha</strong> explicando tudo sobre a
      Harmonicus. Saiba a importância de fazer parte deste time e impactar a
      vida de milhares de pessoas no Brasil e no mundo.
    </b-card-body>
    <b-card-footer class="video-container">
      <iframe
        src="https://www.youtube.com/embed/xEMejUFlugQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </b-card-footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}
.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
