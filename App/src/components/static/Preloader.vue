<template>
  <div v-if="!removed" :class="{ preloader: true, hidden: hidden }">
    <div class="vertical-lign">
      <div id="top"/>
      <div id="bottom"/>
    </div>
    <div class="horizontal-lign">
      <div id="left"/>
      <div id="right"/>
    </div>
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
      duration: 100,
      file: '/img/preloader.svg',
      //animTimingFunction: Vivus.EASE_IN,
      pathTimingFunction: Vivus.EASE_IN,
      //reverseStack: true,
    }, () => {
      this.finished = true
      new Vivus('top', {
        duration: 40,
        file: '/img/vertical-top.svg'
      })
      new Vivus('bottom', {
        duration: 40,
        file: '/img/vertical-bottom.svg'
      })
      new Vivus('left', {
        duration: 40,
        file: '/img/horizontal-left.svg'
      })
      new Vivus('right', {
        duration: 40,
        file: '/img/horizontal-right.svg'
      })
      setTimeout(() => {
        this.hidden = true
        setTimeout(() => {
          this.removed = true
        }, 1000)
      }, 300)
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

  .vertical-lign
    height: 100%

    @media (max-width: 1200px)
      display: none

    .cls-1, .cls-2
      stroke: $brand-color

    #top
      width: 8px
      height: calc(50% - 125px)
      position: absolute
      top: 125px
      left: 50%
      transform: translate(-50%, -125px)

    #bottom
      width: 8px
      height: calc(50% - 125px)
      position: absolute
      bottom: 125px
      left: 50%
      transform: translate(-50%, 125px)

  .horizontal-lign
    width: 100%

    @media (min-width: 1199px)
      display: none

    .cls-1, .cls-2
      stroke: $brand-color

    #left
      height: 8px
      width: calc(50% - 125px)
      position: absolute
      left: 125px
      top: 50%
      transform: translate(-125px, -50%)

    #right
      height: 8px
      width: calc(50% - 125px)
      position: absolute
      right: 125px
      top: 50%
      transform: translate(125px, -50%)

      


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