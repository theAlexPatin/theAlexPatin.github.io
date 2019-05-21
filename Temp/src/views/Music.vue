<template>
  <div class="music">
    <div class="header-text">Patin Studios</div>
    <div class="header-image"/>
    <div class="content">
      <p>
        Patin Studios is a small recording &amp; production studio based in Boston, MA.
        We have worked with numerous local and international pop, indie, and R&amp;B acts
        to deliver professional music production at a price point the average musician can afford.
      </p>
    </div>
    <Trifold/>
  </div>
</template>
<script>
import Trifold from '@/components/Music/Trifold'
export default {
  components: { Trifold },
}
</script>
<style lang="sass">
.music
  color: white
  padding-bottom: 100px

  .header-text
    font-family: ProximaNova-Light
    position: absolute
    top: 200px
    text-align: center
    width: 100%
    font-size: 50px
    color: rgba(#ffffff, 0.8)
    letter-spacing: 7px
    font-weight: 100
    //text-shadow: 2px 2px 16px rgba(#000000, 0.68)

  .header-image
    box-shadow: inset 0 0 4em 1.8em #000
    background: url('../assets/music/music.jpg') no-repeat top
    background-size: cover
    width: 100%
    height: 350px

    @media(max-width: 740px)
      height: 250px

  .content
    width: 65%
    margin: auto

    @media(max-width: 740px)
      width: 90%

    p
      font-size: 21px
      font-family: ProximaNova-Light
      letter-spacing: 0.4px
      line-height: 30px
      text-align: center

      span
        color: #ffebeb
        font-size: 22px
        text-shadow: 2px 2px 5px #ff9c9c

      a
        color: white
        text-decoration: underline


</style>
