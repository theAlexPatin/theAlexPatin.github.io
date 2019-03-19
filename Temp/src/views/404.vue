<template>
  <div class="not-found-view">
    <div class="content">
      <p>
        This page doesn't exist.
      </p>
      <div class="fly-home">
        <iframe src="https://giphy.com/embed/Nkclz8eGACha" frameBorder="0" allowFullScreen></iframe>
        <p><a href="https://giphy.com/gifs/the-incredibles-Nkclz8eGACha">via GIPHY</a></p>
      </div>
      <router-link :to="{name: 'Dashboard'}">
        <button class="button -light">Fly home</button>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NotFoundView',
  components: {}
}
</script>

<style lang="sass">
.not-found-view
  width: 100%
  height: 100%
  display: flex

  .fly-home
    iframe
      margin-top: 50px
      overflow: hidden
      height: 200px
      width: 400px
    p
      margin: -15px auto 10px
      text-align: center

    a
      font-size: 14px

  >.content
    display: flex
    flex: 1
    align-items: center
    flex-direction: column
    overflow-y: auto
    padding: 2em

    background: $brand-color
    background: $background-medium
    p
      color: $brand-color-dark
      font-weight: 600
      font-size: 20px

    .base-form, .floating-content, .login-form, .register-form
      width: 500px
      margin-top: auto
      margin-bottom: auto
      flex: 0 0 auto


</style>
