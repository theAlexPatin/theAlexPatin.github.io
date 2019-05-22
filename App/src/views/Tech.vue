<template>
  <div class="tech">
    <div class="header-text">Tech Production</div>
    <div class="header-image"/>
    <div class="content">
      <p>
        With 10+ years of software engineering experience,
        I ship clean and scalable apps &amp; services across stacks.
        I've worked with companies from early-stage startups to Fortune 500 companies
        on projects including application architecture design, full-stack web development,
        API design, and blockchain development (among other things).
      </p>
      <h1>Services</h1>
      <div class="service">
        <h2>UI/UX &amp; Web Design</h2>
        <p>
          I value simple content structure, clean design patterns, and thoughtful interactions.
          I like to code things from scratch, and enjoy bringing things to life in the browser.
        </p>
        <div class="tool-list">
          <div class="cell">
            <img src="/logos/sketch.png"/>
          </div>
          <div class="cell">
            <img src="/logos/illustrator.png"/>
          </div>
          <div class="cell">
            <img src="/logos/html5.png"/>
          </div>
          <div class="cell">
            <img src="/logos/sass.png"/>
          </div>
          <div class="cell">
            <img src="/logos/tses6.png"/>
          </div>
        </div>
      </div>
      <div class="service">
        <h2>Full-stack Development</h2>
        <p>
          Need someone to do it all? I architect and build medium-to-large web applications, microservices, and web services
          to scale to hundreds of thousands of users.
        </p>
        <div class="tool-list">
          <div class="cell">
            <img src="/logos/vue.png"/>
          </div>
          <div class="cell">
            <img src="/logos/node.png"/>
          </div>
          <div class="cell">
            <img src="/logos/mongo.png"/>
          </div>
          <div class="cell">
            <img src="/logos/aws.png"/>
          </div>
          <div class="cell">
            <img src="/logos/linux.png"/>
          </div>
        </div>
      </div>
      <div class="service">
        <h2>Blockchain Development</h2>
        <p>
          I lead integration of blockchain technology into enterprise and business solutions.
          I additionally build secure and efficient Ethereum &amp; EOS smart contracts and ÐApps.
        </p>
        <div class="tool-list">
          <div class="cell">
            <img src="/logos/ethereum.png"/>
          </div>
          <div class="cell">
            <img src="/logos/squarelink.png"/>
          </div>
          <div class="cell">
            <img src="/logos/hyperledger.png"/>
          </div>
          <div class="cell">
            <img src="/logos/eos.png"/>
          </div>
        </div>
      </div>

      <div class="ask">
        <h1>Get In Touch</h1>
        <p>Interesting in working together? Best way to make that happen is to get in touch!</p>
        <button @click="$root.$emit('showContact')" class="button contact-button -accent -hollow">Contact Me</button>
      </div>

      <div class="experience">
        <h1>Skills and Experience</h1>
        <p>I do other things too. Check out some of my skills and let me know if we'd be a good fit!</p>
        <BaseInput class="search"
            name="search"
            v-model="search"
            :type="'text'"
            :title="'Search'"/>
        <div class="skills">
          <div class="cell" v-for="s in resultSet" :key="s">{{s}}</div>
        </div>
      </div>
      <div class="github">
        See me on <a class="github" href="https://github.com/theAlexPatin"><i class="fab fa-github"/>Github</a>
      </div>
    </div>
  </div>
</template>
<script>
import BaseInput from '@/components/base/BaseInput'
export default {
  components: { BaseInput },
  data() {
    return {
      resultSet: [],
      skills: [
        'Vue.js',
        'ES6/7',
        'Python',
        'Webpack',
        'AWS EC2',
        'ElasticSearch',
        'LogStash',
        'MongoDB',
        'Java',
        'JavaScript',
        'JQuery',
        'Adruino',
        'Django',
        'Flask',
        'MySQL',
        'Postgres',
        'AWS API Gateway',
        'AWS S3',
        'AWS Cloudfront',
        'Squarelink',
        'Web3.js',
        'Ethereum',
        'Hyperledger',
        'Sass/SCSS',
        'CSS3',
        'HTML5',
        'DynamoDB',
        'C/C++',
        'Git',
        'Github',
        'Illustrator',
        'Sketch',
        'Linux',
        'Truffle',
        'Scikit-learn',
        'TensorFlow',
        'Apache Spark',
        'OpenShift',
        'Azure',
        'Docker',
        'Solidity',
        'Objective-C'
      ],
      searchable: [],
      search: ''
    }
  },
  watch: {
    search(search) {
      let self = this
      setTimeout(() => {
        if (self.search === search) {
          this.updateSearch(search.toLowerCase().trim())
        }
      }, 250)
    }
  },
  methods: {
    updateSearch(search) {
      if (!search) this.resultSet = this.skills
      else {
        this.resultSet = []
        for (let i in this.searchable) {
          let s = this.searchable[i]
          if (s.key.includes(search))
            this.resultSet.push(s.title)
        }
      }
    },
    shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
  },
  mounted() {
    this.skills = this.shuffle(this.skills)
    this.resultSet = this.skills
    this.skills.forEach(s => {
      this.searchable.push({
        key: s.toLowerCase(),
        title: s
      })
    })
  }
}
</script>
<style lang="sass">
.tech
  color: white
  padding-bottom: 100px

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
      top: 130px
      width: 90%
      left: 50%
      margin-left: -45%
      font-size: 35px

  .header-image
    box-shadow: inset 0 4em 4em 0em #000
    background: url('../assets/tech/tech.png') no-repeat bottom
    background-size: cover
    width: 100%
    height: 350px

    @media(max-width: 740px)
      height: 250px

  .content
    width: 65%
    margin: auto

    h1
      font-weight: 100
      font-size: 40px
      text-align: center
      color: $brand-color

    @media(max-width: 740px)
      width: 90%

    p
      font-size: 21px
      font-family: ProximaNova-Light
      letter-spacing: 0.4px
      line-height: 30px
      text-align: center
      margin-top: 50px

    .experience
      margin-bottom: 40px
      p
        max-width: 450px
        margin: 0 auto 30px
        text-align: center

      .search
        margin: 0 auto 20px
        width: 300px

        @media(max-width: 700px)
          width: 100%

      .skills

        .cell
          display: inline-block
          padding: 5px
          border-radius: 5px
          border: 1px solid white
          margin: 5px
          cursor: pointer
          -webkit-transition: all 0.3s ease
          -moz-transition: all 0.3s ease
          -o-transition: all 0.3s ease
          transition: all 0.3s ease

          &:hover
            color: $brand-color
            border: 1px solid $brand-color

    .ask
      max-width: 450px
      margin: 0 auto 100px
      text-align: center

      p
        margin: 0 auto 30px
        text-align: center

      .contact-button
        width: 300px



    .service
      margin-bottom: 80px

      &:last-child
        margin-bottom: 0
      h2
        width: 80%
        margin: 0 auto
        padding-bottom: 10px
        border-bottom: 1px solid #606060

        @media(max-width: 700px)
          width: 100%

      p
        width: 80%
        margin: 10px auto 30px
        text-align: left

        @media(max-width: 700px)
          width: 100%

      .tool-list
        margin-left: 10%
        display: flex
        flex-wrap: wrap
        flex-direction: row
        text-align: center
        @media(max-width: 700px)
          margin-left: 0

        .cell
          padding: 20px 30px

        img
          height: 50px

          @media(max-width: 1100px)
            height: 40px

    .github
      width: 100%
      margin: 0 auto
      text-align: center
      color: white
      font-size: 25px
      text-decoration: none
      -webkit-transition: all 0.3s ease
      -moz-transition: all 0.3s ease
      -o-transition: all 0.3s ease
      transition: all 0.3s ease

      a
        margin-left: 10px
        font-weight: 700
        font-size: 30px

        &:hover
          color: $brand-color

      i
        margin-right: 10px


</style>
