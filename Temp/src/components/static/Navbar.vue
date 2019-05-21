<template>
  <div class="navbar">
    <push class="hamburger" right>
      <a href="javscript:void(0)"
          @click="$router.push({ path: '/about' })">About Me</a>
      <a href="javscript:void(0)"
          @click="$router.push({ path: '/tech' })">Tech</a>
      <a href="javscript:void(0)"
          @click="$router.push({ path: '/music' })">Music</a>
      <a href="https://medium.com/@theAlexPatin" target="_blank">Blog</a>
      <a href="javascript:void(0)" @click="showContact">Contact</a>
    </push>
    <div @click="$router.push({ name: 'Home' })" class="left">
      <img src="../../assets/monogram-circle.png"/>
      <h1>ALEX PATIN</h1>
    </div>
    <div class="separator"/>
    <div class="right">
      <a href="javascript:void(0)"
          @click="$router.push({ path: '/about' })"
          :class="{ active: $route.name === 'About'}">About Me</a>
      <a href="javascript:void(0)"
          v-if="$route.name!=='Home'"
          @click="$router.push({ path: '/music' })"
          :class="{ active: $route.name === 'Music'}">Music</a>
      <a href="javascript:void(0)"
          v-if="$route.name!=='Home'"
          @click="$router.push({ path: '/tech' })"
          :class="{ active: $route.name === 'Tech'}">Tech</a>
      <a href="https://medium.com/@theAlexPatin" target="_blank">Blog</a>
      <a href="javascript:void(0)" @click="showContact">Contact</a>
    </div>
  </div>
</template>

<script>
import { Push } from 'vue-burger-menu'
export default {
  components: {
    Push
  },
  methods: {
    showContact() {
      this.$root.$emit('showContact')
    }
  }
}
</script>

<style lang="sass">
.navbar
  z-index: 25
  color: white
  position: absolute
  display: flex
  flex-direction: row
  padding: 30px 40px
  width: calc(100% - 80px)
  overflow: hidden

  a
    font-family: ProximaNova-Regular
    font-size: 24px
    color: #FFFFFF
    letter-spacing: 0
    text-align: center
    text-decoration: none
    margin-left: 50px
    -webkit-transition: all 0.5s ease
    -moz-transition: all 0.5s ease
    -o-transition: all 0.5s ease
    transition: all 0.5s ease

    &.active
      color: #ff8080

    @media (max-width: 940px)
      margin-left: 0

    &:first-child
      margin-left: 0px

    &:hover
      color: lighten(#ff8080, 15%)

  .hamburger
    visibility: hidden
    .bm-burger-bars
      background-color: white

    @media (max-width: 940px)
      visibility: visible

  .left
    cursor: pointer
    display: inline-block

    @media (max-width: 940px)
      min-width: 180px

    img
      width: 60px
      float: left
      margin-top: -10px

      @media (max-width: 940px)
        width: 45px

    h1
      font-family: ProximaNova-Bold
      font-size: 34px
      color: #FFFFFF
      float: right
      line-height: 0
      letter-spacing: 1px
      padding-left: 20px

      @media (max-width: 940px)
        font-size: 21px
        padding-left: 0

  .separator
    flex: 1

    @media (max-width: 940px)
      flex: 0

  .right

    @media (max-width: 940px)
      visibility: hidden

</style>
