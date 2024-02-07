<template>
  <ion-app id="ion-app" ref="ionApp">
      <ion-router-outlet @pathOpened="pathOpened"></ion-router-outlet>
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet, IonPage } from '@ionic/vue';


export default {
  name: "App",
  components: { IonApp, IonRouterOutlet, IonPage },
  data() {
        return {
            isScrolling: false,
        };
    },
  mounted() {
    this.resizeHandler();
    window.addEventListener("resize", () => {
      this.resizeHandler});
  },
  unmounted() {
    window.removeEventListener("resize", this.resizeHandler);
  },
  
  methods: {

    resizeHandler() {
     let width= window.innerWidth
     let height= window.innerHeight

      if(!(width <= 600 && height<= 1000 && (height/width) <= 2.5 && (height/width) >=1.5)) {
      this.$refs.ionApp.$el.style.maxHeight = `${Math.min(height, (width*2))}px`
      this.$refs.ionApp.$el.style.maxWidth= `${Math.min(width, (height*0.5))}px`
      }
      
      this.$refs.ionApp.$el.style.margin= `auto`
    },
    pathOpened() {
      console.log("skahfjw")
    }
  },
};
</script>

<style scoped>
</style>
