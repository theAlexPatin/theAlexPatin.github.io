<template>
  <div v-if="!removed" :class="{ preloader: true, hidden: hidden }">
    <div :class="{ animation: true, red: finished }" id="animation"/>
  </div>
</template>
<script>
import Vivus from 'vivus'
export default {
  data() {
    return {
      finished: false,
      hidden: false,
      removed: false
    }
  },
  mounted() {
    new Vivus('animation', {
      duration: 65,
      file: '/img/preloader.svg',
      pathTimingFunction: Vivus.EASE_IN,
    }, () => {
      this.finished = true
      setTimeout(() => {
        this.hidden = true
        setTimeout(() => {
          this.removed = true
        }, 650)
      }, 400)
    })
  }
}
</script>
<style lang="sass">
.hidden
  opacity: 0
  -webkit-transition: all 1s ease-out
  -moz-transition: all 1s ease-out
  -o-transition: all 1s ease-out
  transition: all 1s ease-out
  z-index: -1
.preloader
  position: fixed
  top: 0
  left: 0
  bottom: 0
  right: 0
  overflow: show
  z-index: 100000
  background: #000

  .animation
    width: 250px
    height: 250px
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)

  .red
    .cls-1, .cls-2
      -webkit-transition: all 0.3s ease-out
      -moz-transition: all 0.3s ease-out
      -o-transition: all 0.3s ease-out
      transition: all 0.3s ease-out
      stroke: $brand-color
</style>
