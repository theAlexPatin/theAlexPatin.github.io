<template>
  <transition name="contact-zoom">
    <div v-if="show" class="contact" tabindex="-1" @keyup.esc="$emit('close')">
      <div class="contact-mask"/>
      <transition name="contact-zoom">
        <div class="contact-dialog" v-if="show">
          <span class="contact-close" @click="$emit('close')" />
          <div class="contact-form">
            <h1>
              Thanks for taking the time to reach out.
              Let me know how I can help you!
            </h1>
            <form autocomplete="off"
                action="https://formspree.io/thealexpatin@gmail.com" method="POST">
              <BaseInput class="name"
                  name="name"
                  :type="'text'"
                  :title="'Name'"/>
              <BaseInput class="email"
                  name="email"
                  :type="'text'"
                  :title="'Email'"/>
              <BaseInput class="message"
                  name="message"
                  :type="'textarea'"
                  :title="'Message'"/>
              <input class="button -hollow" type="submit" value="Send">
            </form>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script>
import BaseInput from '@/components/base/BaseInput'
export default {
  components: { BaseInput },
  props: {
    show: {
      type: Boolean,
      required: true
    },
  },
  watch: {
    show(isShow) {
      isShow && this.$nextTick(() => {
        this.$el.focus();
      })
    }
  },
}

</script>
<style lang="sass">
.contact
  top: 0
  left: 0
  width: 100%
  height: 100%
  z-index: 100
  position: fixed

  .contact-mask
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 100

  .contact-mask
    position: absolute
    background: rgba(0, 0, 0, .9)

  .contact-dialog
    position: absolute
    top: 0
    left: 0
    right: 0
    bottom: 0
    margin: auto
    z-index: 101
    background: transparent
    border-radius: 3px
    box-shadow: 0 1px 3px rgba(0, 0, 0, .2)


    .contact-form
      text-align: center
      color: white
      margin: 0
      position: absolute
      top: 50%
      left: 50%
      -ms-transform: translate(-50%, -50%)
      transform: translate(-50%, -50%)
      max-width: 550px

      form
        margin: 0 auto
        display: grid
        grid-template-columns: 50% 50%
        grid-column-gap: 40px
        grid-template-areas: "name email" "message message" "submit submit"

        @media (max-width: 500px)
          grid-column-gap: 0
          width: 300px
          grid-template-columns: 100%
          grid-template-areas: "name" "email" "message" "submit"

        .name
          grid-area: name

          @media (max-width: 500px)
            margin-left: -25px

        .email
          grid-area: email

          @media (max-width: 500px)
            margin-left: -25px

        .message
          grid-area: message

          @media (max-width: 500px)
            margin-left: -15px

        .button
          grid-area: submit

  .contact-close
    position: absolute
    cursor: pointer
    top: 30px
    right: 30px
    width: 30px
    height: 30px
    z-index: 9999


  .contact-close:before,
  .contact-close:after
    position: absolute
    content: ''
    height: 3px
    width: 100%
    top: 50%
    left: 0
    margin-top: -1px
    background: #ffffff
    border-radius: 100%
    -webkit-transition: background .2s
    transition: background .2s


  .contact-close:before
    -webkit-transform: rotate(45deg)
    transform: rotate(45deg)


  .contact-close:after
    -webkit-transform: rotate(-45deg)
    transform: rotate(-45deg)


  .contact-close:hover:before,
  .contact-close:hover:after
    background: $brand-color

  /* -- fade -- */
  @-webkit-keyframes contact-fade-enter
    from
      opacity: 0

  @keyframes contact-fade-enter
    from
      opacity: 0

  .contact-fade-enter-active
    -webkit-animation: contact-fade-enter both ease-in
    animation: contact-fade-enter both ease-in

  @-webkit-keyframes contact-fade-leave
    to
      opacity: 0

  @keyframes contact-fade-leave
    to
      opacity: 0

  .contact-fade-leave-active
    -webkit-animation: contact-fade-leave both ease-out
    animation: contact-fade-leave both ease-out

    @-webkit-keyframes contact-zoom-enter
      from
        -webkit-transform: scale3d(.3, .3, .3)
        transform: scale3d(.3, .3, .3)



  @keyframes contact-zoom-enter
    from
      -webkit-transform: scale3d(.3, .3, .3)
      transform: scale3d(.3, .3, .3)



  .contact-zoom-enter-active
    -webkit-animation: contact-zoom-enter both cubic-bezier(0.4, 0, 0, 1.5)
    animation: contact-zoom-enter both cubic-bezier(0.4, 0, 0, 1.5)


  @-webkit-keyframes contact-zoom-leave
    to
      -webkit-transform: scale3d(.3, .3, .3)
      transform: scale3d(.3, .3, .3)



  @keyframes contact-zoom-leave
    to
      -webkit-transform: scale3d(.3, .3, .3)
      transform: scale3d(.3, .3, .3)


  .contact-zoom-leave-active
    -webkit-animation: contact-zoom-leave both
    animation: contact-zoom-leave both

</style>
