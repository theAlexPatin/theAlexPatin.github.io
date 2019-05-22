<template>
  <div class="social">
    <a href="https://twitter.com/theAlexPatin" target="_blank"><i class="fab fa-twitter"/></a>
    <a href="https://github.com/theAlexPatin" target="_blank"><i class="fab fa-github"/></a>
    <a href="https://linkedin.com/in/theAlexPatin" target="_blank"><i class="fab fa-linkedin"/></a>
    <a href="https://linkkle.com/theAlexPatin" target="_blank"><i class="fas fa-address-card"/></a>
    <a href="https://soundcloud.com/thealexpatin" target="_blank"><i class="fab fa-soundcloud"/></a>
    <a href="https://instagram.com/thealexpatin" target="_blank"><i class="fab fa-instagram"/></a>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="sass">
.social
  width: 60%
  height: 50px
  z-index: 20
  display: flex
  flex-direction: row
  position: absolute
  bottom: 0
  color: white
  justify-content: space-around
  font-size: 35px
  overflow: hidden
  padding: 0 20% 30px

  @media(max-width: 900px)
    padding: 0 0 10px
    width: 100%

  @media(max-width: 600px)
    font-size: 25px

  a
    color: white
    -webkit-transition: all 0.5s ease
    -moz-transition: all 0.5s ease
    -o-transition: all 0.5s ease
    transition: all 0.5s ease

    &:hover
      color: lighten(#ff8080, 5%)




</style>
