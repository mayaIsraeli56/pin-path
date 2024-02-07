<template>
    <ion-content>
        <div class="top">
        <div class="background-img"></div>
        <div @click="goBack" id="backBtn"></div>
    </div><div class="week-details">
        <p>{{battalion}}</p>
    </div>
    </ion-content>
</template>
  
<script  lang="ts">
import { IonContent, IonImg } from '@ionic/vue';
import { defineComponent } from "vue";
import { mapState } from "vuex";
import PathOptions from '@/components/main/PathOptions.vue';
import jsonData from '@/data/data.json';

export default defineComponent({
    name: "PathMain",
    components: { IonContent, IonImg, PathOptions },
props: ["battalion"],
    data() {
        return {
            isScrolling: false,
            weeks: ["מבחן סף","רפואה","ארץ ישראל","אנשים",5,6,7,8],
            data: jsonData,
        };
    },
    mounted() {
        console.log(this.battalion)

    },
    computed: {
        ...mapState("navigation", ["isPathOpen"]),
    },

    methods: {
        showWeek() {

        },
    goBack() {
        this.$router.push('/home')
        this.$emit('pathOpen')
    }


    },

    watch: {
        isPathOpen: {
            handler() {
                this.isScrolling = true;
            },
        },
    },
});
</script>
  
<style scoped>

.top {
    width: 100%;
    height: 35dvh;

}

.background-img {
    background: url("@/assets/media/background-top.png") no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    filter: blur(0.2px);
    -webkit-filter: blur(0.27px);
    z-index:0;
    top: -22%;
    position: relative;
}

.week-details {
    background-image: url("@/assets/media/detailBackground.png");
    background-size: 100% 100%;
    width: 100%;
    height: 95%;
    position: relative;
    top: -27%;
}

#backBtn{
    background-image: url("@/assets/media/backBtn.svg");
    background-size: 100% 100%;
    width: 16%;
    position: relative;
    height: 13%;
    top: -95%;
    filter: blur(0px);
    z-index:10;
}

* {
    padding: none;
    margin: none;
    --padding: none;
    --margin: none;
    transition: all 0.5 ease-in-out;
}
</style>

  
  