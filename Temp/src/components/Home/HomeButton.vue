<template>
  <div class="home-button">
    <div class="wrapper"
        :class="{ music: background === 'music', tech: background === 'tech' }">
      <div class="inner" @click="$router.push({ name: link })">
        {{text}}
      </div>

    </div>
  </div>
</template>
<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    background: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="sass">
.home-button
  .music
    background: url('../../assets/landing/wave.png') no-repeat center

  .tech
    background: url('../../assets/landing/binary.png') no-repeat center

  .wrapper
    cursor: pointer
    border: 4px solid white
    -webkit-background-size: contain
    -moz-background-size: contain
    -o-background-size: contain
    background-size: contain
    border-radius: 20px
    font-family: ProximaNova-Bold
    font-size: 27px
    color: #FFFFFF
    width: 230px
    height: 66px
    line-height: 66px
    text-align: center
    -webkit-transition: all 0.5s ease
    -moz-transition: all 0.5s ease
    -o-transition: all 0.5s ease
    transition: all 0.5s ease

    &:hover, &:active
      border-color: #ff8080

    @media (max-width: 600px)
      border: 3px solid white
      border-radius: 16px
      font-size: 22px
      height: 50px
      width: 180px
      line-height: 50px

    .inner
      width: 100%
      height: 100%
      border-radius: 20px
      background: rgba(59,59,59,0.56)
      -webkit-transition: all 0.5s ease
      -moz-transition: all 0.5s ease
      -o-transition: all 0.5s ease
      transition: all 0.5s ease

      &:hover, &:active
        height: 100% !important
        opacity: 1
        color: #ff8080
        background: rgba(59,59,59,0.8)




</style>
