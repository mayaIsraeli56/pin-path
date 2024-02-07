<template>
    <div :class="['content', isPathOpen ? 'open-anim' : '']">

        <ion-text class="text-dark-plain">מתחילים בה”ד 1 ?</ion-text>
        <ion-text class="text-dark-plain">אנחנו פה בשביל לעשות לכם קצת סדר. </ion-text>
        <ion-text class="text-dark-plain">אבל קודם, בחרו גדוד...</ion-text>

        <div class="select-container">
            <button v-for="(battalion, i) in battalions" :key="i" :disabled="isPathOpen"
                :class="['btn battalion-btn', chosenBattalion == battalion ? 'selected' : '']"
                @click="() => chosenBattalion = battalion">
                <ion-text class="text-dark-plain"> {{ battalion }}</ion-text>
            </button>
        </div>

        <button :class="['btn old-btn', isOld ? 'selected' : '']" @click="toggleIsOld" :disabled="disableBtn">
            <ion-text class="btn-text"> מחזורים קודמים </ion-text></button>
        <button class="btn next-btn " size="large" :disabled="disableBtn" @click="toPath">
            <ion-text class="btn-text"> יאללה נתחיל</ion-text>
        </button>
        <div class="white"></div>
    </div>
</template>
  
<script>
import { IonContent, IonText, IonButton } from '@ionic/vue';
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";

export default defineComponent({
    name: "SettingsPart",
    components: { IonContent, IonText, IonButton },

    data() {
        return {
            battalions: ["ברוש", "ארז", "חרוב", "דקל", "הדס", "גפן"],
            isOld: false,
            chosenBattalion: '',
        };
    },

    computed: {
        ...mapState("navigation", ["isPathOpen"]),

        disableBtn() { return this.chosenBattalion == '' || this.isPathOpen },
    },

    methods: {

        ...mapActions("navigation", ["togglePath"]),

        toggleIsOld() {
            this.isOld = !this.isOld;
        },

        toPath() {
            this.togglePath();
            this.$emit("chosenBattalion", this.chosenBattalion, this.isOld);
        }

    }
});
</script>
  
<style scoped>
.content {
    position: relative;
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: top;
    padding-top: 4dvh;
}

.text-dark-plain {
    font-size: 2.5dvh;
}


.text-dark-plain:nth-child(1) {
    top: 10%;
}

.text-dark-plain:nth-child(2) {
    margin-top: 2%;
}

.text-dark-plain:nth-child(3) {
    margin: 5% 0 0 0;
    font-size: 2dvh;
}

.select-container {
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

/* CSS */
.btn {
    align-items: center;
    appearance: none;
    border-radius: 10dvh;
    border-style: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    fill: currentcolor;
    font-size: 2dvh;
    font-weight: 500;
    padding: 1dvh;
    justify-content: center;
    letter-spacing: .25px;
    line-height: normal;
    max-width: 100%;
    overflow: visible;
    position: relative;
    text-align: center;
    text-transform: none;
    transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1), opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    will-change: transform, opacity;
    transition: all 0.5s ease-in-out;
}

.btn:disabled {
    opacity: 0.7;
    filter: grayscale(0.2);
    cursor: auto;
}


.battalion-btn {
    background: var(--gray);
    color: var(--gray-text);
    width: 20%;
    font-size: 2dvh;
    text-align: center;
    margin: 1% 1%;
}

.battalion-btn>.text-dark-plain {
    transform: translateY(15%);
}

.old-btn {
    background: var(--gray);
    color: var(--gray-text);
    height: 8%;
    font-size: 1.5dvh;
    margin-top: 5%;

}

.old-btn>* {
    color: var(--gray-text);
}

.next-btn {
    background: var(--ion-color-success);
    color: var(--ion-color-primary);
    width: 60%;
    height: 15%;
    font-size: 2dvh;
    margin: 5dvh 0 0 0;
    transform: translateY(50%);
}

.next-btn:focus .next-btn:active {
    background: var(--ion-color-success-tint);
}

.btn-text {
    text-shadow: none;
    font-weight: 600;
    transform: translateY(15%);
}

.selected {
    box-shadow: inset 0 0 0 0.4dvh var(--ion-color-success);
}

button {
    transition: all 0.5s ease-in-out;
}

.white {
    width: 100%;
    height: 20%;
    background: var(--ion-color-primary);
    box-shadow: 0 0 10dvh 0.4dvh var(--gray);
}

.open-anim {
    clip-path: inset(0);
    animation: cut-height 1s forwards 0s;
}

@keyframes cut-top {
    from {
        clip-path: inset(0);
    }

    to {
        clip-path: inset(100% 0 0 0);
        opacity: 0;
    }
}

@keyframes cut-height {
    from {}

    to {
        height: 0;
        padding: 0;
    }
}
</style>
  