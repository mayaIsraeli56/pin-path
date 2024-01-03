<template>
    <ion-content :scroll-y="isScrolling" :class="['path-main', isPathOpen ? 'full' : '']">
        <div class="background-img"> </div>
        <ion-img :src="logo" class="logo"></ion-img>
        <div :class="['path-main-cntnt', isPathOpen ? 'full-path' : '']"> </div>
    </ion-content>
</template>
  
<script  lang="ts">
import { IonContent, IonImg } from '@ionic/vue';
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
    name: "PathMain",
    components: { IonContent, IonImg },

    data() {
        return {
            isScrolling: false,
        };
    },
    computed: {
        ...mapState("navigation", ["isPathOpen"]),

        logo() {
            return new URL("@/assets/media/logo.png", import.meta.url).href;
        }
    },

    methods: {



    },

    watch: {
        isPathOpen: {
            handler() {
                this.isScrolling = true;
                console.log("d")
            },
        },
    },
});
</script>
  
<style scoped>
.path-main {
    position: relative;
    top: 0;
    width: 100%;
    --height: 40%;
    --padding: 0;
    --margin: 0;
    padding: 0;
    margin: 0;
    --background: none;
    z-index: 2;
}

.path-main-cntnt {
    width: 100%;
    height: 9%;
    position: relative;
    background: linear-gradient(#e69d69, #f3b986);
    padding: 0;
    margin: 0;
    top: -1%;
    border-radius: 0 0 4dvh 4dvh;
    box-shadow: 0 0 rgba(0, 0, 0, 0), 0 0.7dvh 0.7dvh rgba(182, 182, 182, 0.5), 0 0 blue inset, 0 0 green inset;
    -webkit-box-shadow: 0 0 rgba(0, 0, 0, 0), 0 0.7dvh 0.7dvh rgba(182, 182, 182, 0.5), 0 0 blue inset, 0 0 green inset;
    -moz-box-shadow: 0 0 rgba(0, 0, 0, 0), 0 0.7dvh 0.7dvh rgba(182, 182, 182, 0.5), 0 0 blue inset, 0 0 green inset;
    z-index: 2;
}

.background-img {
    width: 100%;
    height: 35dvh;
    background: url("@/assets/media/background-top.png") no-repeat;
    background-size: 100% 100%;
}


.logo {
    position: absolute;
    top: 2dvh;
    height: 15dvh;
    width: 50%;
    margin: 0 25%;
}


.full {
    height: 100dvh;
}

.full-path {
    animation: full-path 1s forwards 0s;
}



@keyframes full {
    from {
        height: 40dvh;
    }

    to {
        height: 100dvh;
    }
}

@keyframes full-path {
    from {
        height: 4dvh;
    }

    to {
        height: 95dvh;
    }
}

* {
    padding: none;
    margin: none;
    --padding: none;
    --margin: none;
    transition: all 0.5 ease-in-out;
}
</style>

  