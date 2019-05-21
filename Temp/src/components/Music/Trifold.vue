<template>
  <div class="trifold">
    <div class="panel gear">
      <h1>Gear List <i class="fas fa-tools"/></h1>
      <p class="subtitle">
        I keep up with the latest gear to handle any project thrown any me.
        If you need something, we'll make it happen.
      </p>
      <bulma-accordion dropdown class="list">
        <bulma-accordion-item v-for="list in gear" class="sublist">
          <h3 slot="title">{{ list.title }}</h3>
          <div slot="content">
            <p class="item" v-for="s in list.list">{{s}}</p>
          </div>
        </bulma-accordion-item>
      </bulma-accordion>
    </div>
    <div class="panel services">
      <h1>Services <i class="fas fa-concierge-bell"/></h1>
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
        <p>Remotely mix your tracks or collaborative, in-person sessions.</p>
      </div>
    </div>
    <div class="panel pricing">
      <h1>Pricing <i class="fas fa-money-check-alt"/></h1>
      <p class="subtitle">
        I provide high quality results at prices afforable for the average musician.
      </p>
      <div class="price">
        <h3>Given to you straight: <span>~$40/hr</span></h3>
        <h4 class="left">Long answer:</h4>
        <p>
          Pricing could be more or less depending on the services you need
          and the complixity of your project. Best way to find out is to get in touch!
        </p>
        <button class="button -accent">Contact Me</button>
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
      ],
      instrumnets: [
        'Fender Stratocaster (HSS American Elite)',
        'Breedlove Persuit Concert CE',
        'Cordoba C5 (Classical)',
        'Epiphone Riviera Hollowbody',
        'Buffet Custom Clarinet',
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
      title: 'Instruments/Controllers',
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
  padding: 0 5%
  width: 100%
  display: grid
  grid-template-columns: 30% 30% 30%
  grid-template-areas: "gear services pricing"


  .service
    text-align: left
    width: 70%
    margin: 0 auto

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
        width: 250px
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

    .list
      margin-top: -10px
      padding: 0 15%
      margin-bottom: 20px

      .sublist
        margin-top: 5px

        .item
          color: #5c5c5c
          font-weight: 600

    .subtitle
      padding: 0 20%
      line-height: 30px

    h1
      font-weight: 700
      font-size: 25px
      font-family: ProximaNova-Regular
      padding: 20px 0
      border-bottom: 1px solid #c8c8c8
      width: 80%
      margin: 0 auto

      i
        color: transparentize($brand-color, 0.2)
        margin-left: 5px

      &::after
        border-bottom: 1px solid #000

    &:first-child
      border-radius: 12px 0 0 12px



    &:last-child
      border-radius: 0 12px 12px 0

</style>
