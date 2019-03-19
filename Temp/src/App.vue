<template>
  <div class="container" id="thealexpatin">
    <Navbar class="navbar"/>
    <router-view/>
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
</style>
