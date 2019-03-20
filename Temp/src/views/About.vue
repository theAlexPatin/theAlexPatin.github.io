<template>
  <div class="about">
    <div class="content">
      <div class="about-image"/>
      <p>
        I'm an engineer passionate about music and building technology
        for the future.
      </p>
      <p>
        I am currently the CTO at <a href="https://squarelink.com" target="_blank">Squarelink</a>
        and the Blockchain Innovation Fellow at Harvard University.
        I focus on building tools to enable the mass adoption of blockchain.
      </p>
      <p>
        As a musician, I enjoy producing indie, pop, and R&amp;B music for myself and others as well as
        performing live &dash; I play guitar, clarinet, piano, and attempt to sing.
      </p>
      <p>
        What's more interesting is combining the two passions. I previously started a company called
        Musical Minds &dash; brainwave-sensing headphones that help find music for you to focus, relax,
        get motivated, or reduce stress.
      </p>
      <p>
        If you like what I'm doing and you're interested in learning more, feel free to
        <a href="javascript:void(0)" @click="">Contact Me</a> for collaborations or rates.
        You can also support me for as little as $1/month on
        <a target="_blank" href="https://www.patreon.com/theAlexPatin">Patreon</a>
      </p>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="sass">
.about
  color: white

  .content
    width: 50%
    margin: auto
    padding-top: 120px

    @media(max-width: 740px)
      width: 90%


    .about-image
      box-shadow: inset 0 0 4em 1.8em #000
      background: url('../assets/about/album.png') no-repeat center
      background-size: contain
      width: 400px
      height: 400px
      float: left
      margin: 0 30px 25px 0

      @media(max-width: 1200px)
        margin: 0 auto
        float: none

      @media(max-width: 740px)
        width: 330px
        height: 330px

    p
      font-size: 21px
      font-family: TisaPro-Light
      letter-spacing: 0.4px
      line-height: 40px

      a
        color: white
        text-decoration: underline


</style>
