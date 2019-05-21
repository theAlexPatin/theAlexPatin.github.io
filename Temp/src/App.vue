<template>
  <div class="container" id="thealexpatin">
    <vue-progress-bar></vue-progress-bar>
    <Navbar class="navbar"/>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/static/Navbar'
import Footer from '@/components/static/Footer'
export default {
  name: 'HomeView',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="sass">
.container
  width: 100%
  height: 100vh
  background: #000
  position: relative

  .fade-enter-active, .fade-leave-active
    transition-duration: 0.3s
    transition-property: opacity
    transition-timing-function: ease

  .fade-enter, .fade-leave-active
    opacity: 0

</style>
