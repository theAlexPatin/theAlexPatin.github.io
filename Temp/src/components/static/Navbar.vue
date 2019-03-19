<template>
  <div class="navbar">
    <push class="hamburger" right>
      <a href="javscript:void(0)" @click="$router.push({ name: 'about' })">About Me</a>
      <a href="https://medium.com/@theAlexPatin" target="_blank">Blog</a>
      <a href="javascript:void(0)" @click="">Contact</a>
    </push>
    <div @click="$router.push({ name: 'Home' })" class="left">
      <img src="../../assets/monogram.png"/>
      <h1>ALEX PATIN</h1>
    </div>
    <div class="separator"/>
    <div class="right">
      <a href="javscript:void(0)" @click="$router.push({ name: 'about' })">About Me</a>
      <a href="https://medium.com/@theAlexPatin" target="_blank">Blog</a>
      <a href="javascript:void(0)" @click="">Contact</a>
    </div>
  </div>
</template>

<script>
import { Push } from 'vue-burger-menu'
export default {
  components: {
    Push
  }
}
</script>

<style lang="sass">
.navbar
  z-index: 15
  color: white
  position: absolute
  display: flex
  flex-direction: row
  padding: 30px 40px
  width: calc(100% - 80px)

  a
    font-family: ProximaNova-Regular
    font-size: 24px
    color: #FFFFFF
    letter-spacing: 0
    text-align: center
    text-decoration: none
    margin-left: 50px

    @media (max-width: 720px)
      margin-left: 0

    &:first-child
      margin-left: 0px

  .hamburger
    visibility: hidden

    @media (max-width: 720px)
      visibility: visible

  .left
    cursor: pointer
    display: inline-block

    @media (max-width: 720px)
      min-width: 180px

    img
      width: 60px
      float: left

      @media (max-width: 720px)
        width: 45px

    h1
      font-family: ProximaNova-Bold
      font-size: 34px
      color: #FFFFFF
      float: right
      line-height: 0
      padding-left: 20px

      @media (max-width: 720px)
        font-size: 23px
        padding-left: 0

  .separator
    flex: 1

    @media (max-width: 720px)
      flex: 0

  .right

    @media (max-width: 720px)
      visibility: hidden

</style>
