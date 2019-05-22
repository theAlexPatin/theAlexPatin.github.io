<template>
  <div class="music">
    <div class="header-text">Patin Studios</div>
    <div class="header-image"/>
    <div class="content">
      <p>
        Patin Studios is a small recording &amp; production studio based in Boston, MA.
        Patin Studios has worked with numerous local and international pop, indie, and R&amp;B acts
        to deliver professional music production at a price point the average musician can afford.
      </p>

      <aplayer class="player"
          :music="{
            theme: '#ff9c9c',
            src: '/audio/R-B-Groove.mp3',
            pic: '/img/album.png',
            volume: 0.5
          }"/>
    </div>
    <Trifold/>
  </div>
</template>
<script>
import Aplayer from 'vue-aplayer'
import Trifold from '@/components/Music/Trifold'
export default {
  components: { Trifold, Aplayer },
}
</script>
<style lang="sass">
.music
  color: white
  padding-bottom: 100px

  .player
    width: 500px
    margin: 30px auto
    background: rgba(#000000, 0.4)
    color: white

    @media(max-width: 740px)
      width: 90%

    .aplayer-pic
      height: 40px
      width: 40px
    .aplayer-body
      background: transparent
      height: 40px
    .aplayer-info
      background: transparent
      padding: 0
      height: 40px
    .aplayer-music
      display: none
    .aplayer-volume-wrap
      display: none
    .aplayer-time
      .aplayer-icon
        display: none
    .aplayer-author
      display: none

  .header-text
    font-family: proxima-nova, sans-serif
    font-weight: 100
    position: absolute
    top: 200px
    text-align: center
    width: 100%
    font-size: 50px
    color: rgba(#ffffff, 0.8)
    letter-spacing: 8px
    font-weight: 100

    @media(max-width: 740px)
      top: 150px
      font-size: 40px

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
</style>
