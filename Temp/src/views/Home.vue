<template>
  <div class="home-view">
    <div class="column tech-side">
      <div class="overlay">
        <div class="column-content">
          <HomeButton class="home-button"
            :link="'home'"
            :text="'TECH'"
            :background="'tech'"/>
          <p>Helping small companies build quickly for sustainable growth</p>
        </div>
      </div>

    </div>
    <div class="column music-side">
      <div class="overlay">
        <div class="column-content">
          <HomeButton class="home-button"
            :link="'home'"
            :text="'MUSIC'"
            :background="'music'"/>
          <p>Professional production for indie, pop, and R&amp;B Artists</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeButton from '@/components/Home/HomeButton'
export default {
  name: 'HomeView',
  components: {
    HomeButton
  }
}

</script>

<style lang="sass">
.home-view
  width: 100%
  min-height: 100%
  display: flex
  flex-direction: row
  background: black

  @media (max-width: 1200px)
    flex-direction: column
    min-height: 100%


  .column
    width: 50%

    @media (max-width: 1200px)
      width: 100%
      flex: 1
      height: 50vh


    .overlay
      background: rgba(0,0,0,.33)
      box-shadow: inset 0 0 20em 0.2em #000
      width: 100%
      height: 100vh

      @media (max-width: 1200px)
        height: 50vh


    .column-content
      width: 50%
      margin: 0 auto
      height: 100vh

      @media (max-width: 1200px)
        height: 50vh
        width: 100%

      .home-button
        display: inline-block
        margin: 0 auto
        margin-bottom: 80px
        position: relative
        left: 50%
        transform: translate(-50%, 100%)
        height: 45%

        @media (max-width: 1200px)
          height: 30%

        @media (max-width: 600px)
          margin-bottom: 60px

      p
        margin: 10px auto
        font-family: TisaPro-Medi
        font-size: 20px
        color: #FFFFFF
        width: 300px
        line-height: 33px
        letter-spacing: 0.4px
        text-align: center

        @media (max-width: 600px)
          font-size: 16px
          line-height: 25px


  .tech-side
    background: url('../assets/landing/tech.jpg') no-repeat center
    -webkit-background-size: cover
    -moz-background-size: cover
    -o-background-size: cover
    background-size: cover

  .music-side
    background: url('../assets/landing/music.jpg') no-repeat center
    -webkit-background-size: cover
    -moz-background-size: cover
    -o-background-size: cover
    background-size: cover

</style>
