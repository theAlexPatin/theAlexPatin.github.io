<template>
  <div class="social">
    <a href="" target="_blank"><i class="fab fa-youtube"/></a>
    <a href="" target="_blank"><i class="fab fa-github"/></a>
    <a href="" target="_blank"><i class="fab fa-linkedin"/></a>
    <a href="" target="_blank"><i class="fab fa-patreon"/></a>
    <a href="" target="_blank"><i class="fab fa-soundcloud"/></a>
    <a href="" target="_blank"><i class="fab fa-instagram"/></a>
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
  padding: 0 20% 20px

  @media(max-width: 900px)
    padding: 0
    width: 100%

  a
    color: white
    -webkit-transition: all 0.5s ease
    -moz-transition: all 0.5s ease
    -o-transition: all 0.5s ease
    transition: all 0.5s ease

    &:hover
      color: darken(white, 20%)

    &:nth-child(even)
      color: #bfceff

      &:hover
        color: darken(#bfceff, 10%)


</style>
