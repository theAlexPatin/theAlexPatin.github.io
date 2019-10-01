<template>
  <div class="about">
    <div class="content">
      <div class="about-image"/>
      <p>
        <span>I'm an engineer</span>, passionate about music and building technology
        for the future. I collaborate with and consult for startups and musicians alike - <span>remote and/or in Boston</span>.
      </p>
      <p>
        Currently, I'm the <span>CTO at </span>
        <a href="https://squarelink.com" target="_blank" @click="$ga('Squarelink', 'About')"><span>Squarelink</span>
        </a>
        and the <a href="http://tech.seas.harvard.edu/fellows" @click="$ga('Harvard', 'About')" target="_blank"><span>Blockchain Innovation Fellow</span></a> at <span>Harvard University</span>.
        I focus on building tools to enable the mass adoption of blockchain.
      </p>
      <p>
        As a musician, I produce <span>indie</span>, <span>pop</span>, and <span>R&amp;B</span> artists in addition to
        performing live &dash; I play guitar, clarinet, and piano (amongst others). Check out some of my stuff
        on <a href="https://soundcloud.com/theAlexPatin" @click="$ga('Soundcloud', 'About')" target="_blank"><span>Soundcloud</span></a>.
      </p>
      <p>
        What's more interesting is combining the two passions. I previously started a company called
        Musical Minds &dash; <span><a href="https://wjactv.com/news/local/penn-state-students-create-brain-wave-technology-headphones" target="_blank" @click="$ga('Musical Minds', 'About')">brainwave-sensing headphones</a></span> that help find music for you to focus, relax,
        get motivated, or reduce stress.
      </p>
      <p>
        When I have free time, I'm mostly playing soccer or tennis. I also own and operate <span><a @click="$ga('Bathtub Vineyards', 'About')" href="https://bathtubvineyards.com" target="_blank">Bathtub Vineyards</a></span>
        &dash; a research initiative focused on pushing the boundaries of alcohol content in wine.
      </p>
      <p>
        If you like what I'm doing or if you're interested in learning more, please
        <a href="javascript:void(0)" @click="contact"><span>Contact Me</span></a> for collaborations or rates.
        You can also <span>support me</span> for as little as $1/month on
        <a target="_blank" @click="$ga('Patreon', 'About')" href="https://www.patreon.com/theAlexPatin"><span>Patreon</span></a>.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    contact() {
      this.$root.$emit('showContact')
      this.$ga('Contact', 'About')
    },
  },
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
      background: url('../assets/about/album.jpg') no-repeat center
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
