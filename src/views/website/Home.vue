<template>
  <b-container fluid class="mt-3">

    <b-card-group deck>
      <b-card no-body>
        <b-card-body>
          This is a article container.
        </b-card-body>        
      </b-card>
      <b-card no-body>
        <b-card-body>
          This is a wellcome container.
        </b-card-body>        
      </b-card>      
    </b-card-group>

    <b-card-group deck class="mt-3">
      <b-card no-body>
        <b-card-body>
          This is a video container.
        </b-card-body>        
      </b-card>
      <b-card no-body>
        <b-card-body>
          This is a who is container.
        </b-card-body>
      </b-card>
    </b-card-group>

  </b-container>
</template>

<script>
export default {};
</script>

<style lang="scss">
.internal {
  display: flex;
  height: 650px;
  width: 100%;
  margin-top: 10px;
}
</style>
