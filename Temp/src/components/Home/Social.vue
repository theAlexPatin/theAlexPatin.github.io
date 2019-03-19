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
  padding: 0 20%

  @media(max-width: 900px)
    padding: 0
    width: 100%

  a
    color: white

    &:nth-child(even)
      color: #bfceff
</style>
