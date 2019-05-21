<template>
  <div class="about">
    <div class="content">
      <div class="about-image"/>
      <p>
        <span>I'm an engineer</span>, passionate about music and building technology
        for the future. I collaborate with and consult for startups and musicians alike - <span>remote and/or in Boston</span>.
      </p>
      <p>
        Currently, I'm the <span>CTO at </span> <a href="https://squarelink.com" target="_blank"><span>Squarelink</span></a>
        and the <a href="http://tech.seas.harvard.edu/fellows" target="_blank"><span>Blockchain Innovation Fellow</span></a> at <span>Harvard University</span>.
        I focus on building tools to enable the mass adoption of blockchain.
      </p>
      <p>
        As a musician, I produce <span>indie</span>, <span>pop</span>, and <span>R&amp;B</span> artists in addition to
        performing live &dash; I play guitar, clarinet, and piano (amongst others). Check out some of my stuff
        on <a href="https://soundcloud.com/theAlexPatin" target="_blank"><span>Soundcloud</span></a>.
      </p>
      <p>
        What's more interesting is combining the two passions. I previously started a company called
        Musical Minds &dash; <span>brainwave-sensing headphones</span> that help find music for you to focus, relax,
        get motivated, or reduce stress.
      </p>
      <p>
        If you like what I'm doing or if you're interested in learning more, please
        <a href="javascript:void(0)" @click=""><span>Contact Me</span></a> for collaborations or rates.
        You can also <span>support me</span> for as little as $1/month on
        <a target="_blank" href="https://www.patreon.com/theAlexPatin"><span>Patreon</span></a>.
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
    width: 60%
    margin: auto
    padding-top: 120px
    padding-bottom: 100px

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
      font-family: ProximaNova-Light
      letter-spacing: 0.4px
      line-height: 40px

      span
        color: #ffebeb
        font-size: 22px
        text-shadow: 2px 2px 5px #ff9c9c

      a
        color: white
        text-decoration: underline


</style>
