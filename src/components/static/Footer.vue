<template>
  <div class="footer">
    &copy; {{ year }} Alex Patin, All Rights Reserved
  </div>
</template>
<script>
export default {
  data() {
    return {
      year: '2019'
    }
  },
  mounted() {
    let date = new Date()
    this.year = date.getFullYear()
  }
}
</script>
<style lang="sass">
.footer
  font-size: 12px
  color: #e3e3e3
  width: 100%
  text-align: center
  margin-top: -25px

  @media(max-width: 600px)
    margin-top: -20px
</style>
