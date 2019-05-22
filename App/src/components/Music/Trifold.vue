<template>
  <div class="trifold">
    <div class="panel gear">
      <i class="fas fa-tools header-icon"/><h1>Gear List</h1>
      <p class="subtitle">
        I keep up with the best gear to handle any project thrown at me.
        If you need something else, I'll make it happen.
      </p>
      <bulma-accordion dropdown class="list">
        <bulma-accordion-item :key="list" v-for="list in gear" class="sublist">
          <h3 slot="title">{{ list.title }}</h3>
          <div slot="content">
            <p class="item" v-for="s in list.list">{{s}}</p>
          </div>
        </bulma-accordion-item>
      </bulma-accordion>
    </div>
    <div class="panel services">
      <i class="fas fa-concierge-bell header-icon"/>
      <h1>Services</h1>
      <p class="subtitle">
        I love to help people bring their artistic and sonic visions to life.
        I work best with pop, indie, and R&amp;B artists.
      </p>
      <div class="service">
        <h3><i class="fas fa-headphones-alt"/>Music Production</h3>
        <p>Remotely develop your tracks or collaborate in-person, in my studio.</p>
      </div>
      <div class="service">
        <h3><i class="fas fa-sliders-h"/>Mixing &amp; Mastering</h3>
        <p>Turn your tracks into hits, without spending that amount of <span>$$$</span>.</p>
      </div>
      <div class="service">
        <h3><i class="fas fa-guitar"/>Session/Gigging Musician</h3>
        <p>Tracking in the studio or gig stand-in on guitar &amp; clarinet (others too if needed).</p>
      </div>
    </div>
    <div class="panel pricing">
      <i class="fas fa-money-check-alt header-icon"/>
      <h1>Pricing</h1>
      <p class="subtitle">
        I provide high quality results at prices afforable for the average musician.
        I don't let budget dictate quality.
      </p>
      <div class="price">
        <h3>Given to you straight: <span>~$40/hr</span></h3>
        <h4 class="left">Long answer:</h4>
        <p>
          Pricing could be more or less depending on the services you need
          and the complixity of your project. Best way to find out is to get in touch!
        </p>
        <button class="button -accent" @click="showContact()">Contact Me</button>
        <div class="filler"/>
        <p class="footnote">
          *Ask me about crazy discounts I offer for <strong>Berklee students</strong>.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import card from '@/style/bulma/card.sass'
import { BulmaAccordion, BulmaAccordionItem } from 'vue-bulma-accordion'

export default {
  methods: {
    showContact() {
      this.$root.$emit('showContact')
    }
  },
  data() {
    return {
      software: [
        'Avid ProTools',
        'FL Studio',
        'Any Necessary VSTs',
      ],
      hardware: [
        'Scarlett 2i4 (2nd gen)',
        'Yamaha HS8 Monitors',
        'Line6 Spider Jam',
        'Line6 POD HDX',
        'StudioLogic SL88 Piano/MIDI',
        'Akai Mini MPK II',
      ],
      instrumnets: [
        'Fender Stratocaster (HSS American Elite)',
        'Breedlove Persuit Concert CE',
        'Cordoba C5 (Classical)',
        'Epiphone Riviera Hollowbody',
        'Yamaha Custom SE Clarinet',
        'StudioLogic SL88 Piano/MIDI',
        'Akai Mini MPK II',
      ],
      mics: [
        'Blue Baby Bottle SL',
        'Shure SM57s/SM58s',
        'AT2035'
      ],
      gear: []
    }
  },
  mounted() {
    this.gear = [{
      title: 'Hardware',
      list: this.hardware
    }, {
      title: 'Software',
      list: this.software
    }, {
      title: 'Instruments',
      list: this.instrumnets
    }, {
      title: 'Mic List',
      list: this.mics
    }]
    this.$forceUpdate()
  },
  components: {
    BulmaAccordion,
    BulmaAccordionItem
  }
}
</script>
<style lang="sass">
.trifold
  margin-left: 10%
  width: 90%
  display: grid
  grid-template-columns: 30% 30% 30%
  grid-template-areas: "gear services pricing"

  @media(max-width: 1000px)
    grid-template-columns: 96%
    grid-template-areas: "gear" "services" "pricing"
    margin-left: 4%
    width: 96%

  .service
    text-align: left
    width: 70%
    margin: 0 auto
    margin-bottom: 40px

    span
      color: green

    p
      margin-top: -10px
      color: #989898

    i
      margin-right: 10px
      color: $brand-color

  .gear
    grid-area: gear

  .services
    grid-area: services

  .pricing
    grid-area: pricing

    .price
      width: 70%
      margin: 0 auto
      display: flex
      flex-direction: column

      .filler
        flex: 1

      .footnote
        font-style: italic
        font-size: 14px
        width: 200px
        margin-right: auto
        margin-left: auto

      h4
        margin-bottom: -10px

      h3
        span
          color: $brand-color

  .panel
    background: #fbfbfb
    color: #494949
    display: inline-block
    text-align: center
    vertical-align: top
    box-shadow: rgba(#d2d2d2, 0.2) 0px 5px 5px 0px, #e7e7e7 0px 0px 0px 1px
    padding-bottom: 20px

    @media(max-width: 1000px)
      box-shadow: rgba(#d2d2d2, 0.2) 0px 5px 5px 0px, #323232 0px 0px 0px 1px

    .list
      margin-top: -10px
      padding: 0 15%
      margin-bottom: 20px

      @media(max-width: 500px)
        padding: 0 20px


      .sublist
        margin-bottom: 15px

        .item
          color: #5c5c5c
          font-weight: 600

    .subtitle
      padding: 20px 20%
      line-height: 30px

      @media(max-width: 500px)
        padding: 20px

    .header-icon
      color: transparentize($brand-color, 0.2)
      font-size: 38px
      margin-top: 30px
      padding: 0


    h1
      font-weight: 700
      font-size: 25px
      font-family: ProximaNova-Regular
      padding-bottom: 20px
      padding-top: 20px
      width: 60%
      margin: 0 auto
      border-bottom: 1px solid #f0f0f0

    &:first-child
      border-radius: 12px 0 0 12px

      @media(max-width: 1000px)
        border-radius: 12px 12px 0 0



    &:last-child
      border-radius: 0 12px 12px 0

      @media(max-width: 1000px)
        border-radius: 0 0 12px 12px

</style>
