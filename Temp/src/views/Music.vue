<template>
  <div class="music">
    <div class="header-text">Patin Studios</div>
    <div class="header-image"/>
    <div class="content">
      <p>
        What I do
      </p>
      <p>
        Mixing &amp; Producing
      </p>
      <p>
        Instruments
      </p>
      <p>
        Gear List
      </p>
      <p>
        Services
      </p>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="sass">
.music
  color: white

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
    width: 50%
    margin: auto
    padding-top: 120px
    padding-bottom: 100px

    @media(max-width: 740px)
      width: 90%

    p
      font-size: 21px
      font-family: TisaPro-Light
      letter-spacing: 0.4px
      line-height: 40px

      a
        color: white
        text-decoration: underline


</style>
