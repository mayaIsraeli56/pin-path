<template>
    <div :class="['weekly-circle', weekNum%2===1 ? 'right-circle' : 'left-circle']" :style="{ backgroundImage: `url(${circleSrc})` , top: `${circlePlacement}%`}" :id="circleId">
        <div class="titleContainer">
        <div class="weekNum-title"> שבוע {{weekNum+1}} </div>
        <div class="week-title"> {{week}}</div>
        </div>
    </div>
</template>
  
<script  lang="ts">
import { IonContent, IonImg } from '@ionic/vue';
import { defineComponent } from "vue";

export default defineComponent({
    name: "PathOptions",
    components: { IonContent, IonImg },
    props: ["week", "weekNum"],

    data() {
        return {
        circleSrc: `/src/assets/media/week-circle/circle${this.weekNum%3}.png`,
        circleId: `week${this.weekNum}`,
        circlePlacement: this.weekNum*13,
        };
    },
    mounted() {
        console.log(this.circlePlacement)
    },
    computed: {
        weekNUm() {
            return new URL(`@/assets/media/week-circle/circle${this.weekNum}.png`, import.meta.url).href;
        }
    },
    methods: {



    },

    watch: {

    },
});
</script>
  
<style scoped>
.weekly-circle {
    width: 33%;
    height: 13%;
    background-size: 100% 100%;
    position: absolute;
    display: flex;
    z-index: 2;
    text-align: center;
}

#week0 {
    left: 50%;
    transform: translateX(-50%);
    top:-5%  !important; 
}

.right-circle {
    right:5%;
}

.left-circle {
    left:5%;
}

.weekNum-title{
    font-size: 17%;
}

.week-title{
    font-size: 19%;
}

.titleContainer{
    margin: auto
}
</style>

  