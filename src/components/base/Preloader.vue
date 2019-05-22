<template>
  <div class="preloader">
     <div class="preloader__status">
        <div class="preloader__status-loader">
           <div loader :style="loadStyle" class="preloader__status-bar"></div>
        </div>
     </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  data() {
    return {
      loaded: 0,
      loading: null,
      loadStyle: {
         width: '0%'
      },
      loader: $('[loader]'),
      body: $('body')
    }
   },
   mounted(){
      this.preloader = $(this.$el);
      this.removeScrolling();
      this.startLoading();
   },
   watch: {
      loaded(){
         this.loadStyle.width = `${this.loaded}%`;
      }
   },
   methods: {
      removeScrolling(){
         this.body.css('overflow','hidden');
      },
      startLoading(){
         this.loading = setInterval(this.load, 1);
      },
      load(){
         this.loaded < 100 ? this.loaded++ : this.doneLoading();
      },
      doneLoading(){
         clearInterval(this.loading);
         this.updateStatus();
      },
      updateStatus(){
         this.loader.fadeOut();
         this.preloader.fadeOut();
         //this.animatePreloader();
      },
      animatePreloader(){
         /*let app        = this,
             height     = this.preloader.height(),
             properties = {
                'opacity': `0`
             },
             options    = {
                duration: 1000,
                easing: 'swing',
                complete(){
                   app.removePreloader()
                }
             };
         this.preloader.delay(300).animate(properties, options)
         */
         this.preloader.fadeOut("slow", function() {

         })
      },
      removePreloader(){
        this.body.removeAttr('style');
        this.preloader.remove();

      },
   }
}
</script>
<style lang="less">
.preloader{
   z-index: 30;
   width:100%;
   height:100vh;
   background: #000;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items:center;
   position: relative;
   &__status{
      width: 100%;
      display:flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

   }
   &__status-text{
      font-size: 40px;
      font-family: 'Raleway', sans-serif;
      margin-bottom:20px;
   }
   &__status-loader{
      width: 100%;
      height:3px;
   }
   &__status-bar{
      background: white;
      height: 100%;
   }
}
.frontpage{
   height: 100vh;
   background: #34495e;
}
</style>
