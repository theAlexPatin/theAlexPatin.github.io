<template>
  <div class="home-view">
    <social/>
    <div class="column tech-side">
      <div class="overlay">
        <div class="column-content">
          <HomeButton class="home-button"
            :link="'Tech'"
            :text="'TECH'"
            :background="'tech'"/>
          <p>Helping small companies build quickly for sustainable growth</p>
        </div>
      </div>
    </div>
    <div class="headline">
      I’m an innovative engineer working on new tech and creative ventures
    </div>
    <div class="column music-side">
      <div class="overlay">
        <div class="column-content">
          <HomeButton class="home-button"
            :link="'Music'"
            :text="'MUSIC'"
            :background="'music'"/>
          <p>Professional production for indie, pop, and R&amp;B artists</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomeButton from '@/components/Home/HomeButton'
import Social from '@/components/Home/Social'
export default {
  name: 'HomeView',
  components: {
    HomeButton,
    Social
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

  .headline
    position: fixed
    top: 50%
    left: 50%
    max-width: 460px
    margin: -10% auto auto -230px
    font-weight: 200
    font-size: 25px
    color: #FFFFFF
    line-height: 37px
    letter-spacing: 1px
    text-shadow: -4px 4px 3px #000
    text-align: center

    @media (max-width: 1200px)
      margin: -25px auto auto -170px
      max-width: 340px
      font-size: 20px
      display: none

  .column
    width: 50%

    @media (max-width: 1200px)
      width: 100%
      flex: 1
      height: 50vh


    .overlay
      background: rgba(0,0,0,.4)
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
          height: 35%

        @media (max-width: 600px)
          margin-bottom: 60px

      p
        margin: 10px auto
        font-family: TisaPro-Light
        font-size: 22px
        color: #FFFFFF
        //text-shadow: -1px 1px 1px #000
        width: 400px
        line-height: 33px
        letter-spacing: 0.7px
        text-align: center

        @media (max-width: 600px)
          font-size: 18px
          line-height: 25px
          width: 320px


  .tech-side
    background: url('../assets/landing/tech.jpg') no-repeat
    background-position: center
    -webkit-background-size: cover
    -moz-background-size: cover
    -o-background-size: cover
    background-size: cover

    @media (max-width: 1200px)
      background-position: center -200px
    @media (max-width: 675px)
      background-position: center

  .music-side
    background: url('../assets/landing/music.jpg') no-repeat
    background-position: center
    -webkit-background-size: cover
    -moz-background-size: cover
    -o-background-size: cover
    background-size: cover

    @media (max-width: 1200px)
      background-position: center -150px
    @media (max-width: 675px)
      background-position: center

</style>
