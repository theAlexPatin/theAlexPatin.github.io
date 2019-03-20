<template>
  <div class="container" id="thealexpatin">
    <Navbar class="navbar"/>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Navbar from '@/components/static/Navbar'
export default {
  name: 'HomeView',
  components: {
    Navbar
  }
}
</script>

<style lang="sass">
.container
  width: 100%
  height: 100%
  background: #000

  .fade-enter-active, .fade-leave-active
    transition-duration: 0.3s
    transition-property: opacity
    transition-timing-function: ease

  .fade-enter, .fade-leave-active
    opacity: 0

</style>
