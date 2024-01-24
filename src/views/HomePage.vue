<template>
  <ion-page>
      <path-main class="path-compo"></path-main>
      <settings-part class="setting"></settings-part>
  </ion-page>
</template>

<script  lang="ts">
import { IonContent, IonPage, } from '@ionic/vue';
import { defineComponent } from "vue";
import PathMain from '@/components/main/PathMain.vue';
import SettingsPart from '@/components/main/SettingsPart.vue';

export default defineComponent({
  name: "Home",
  components: { IonContent, IonPage, PathMain, SettingsPart },
});
</script>

<style scoped>

* {
  padding: none;
  margin: none;
  --padding: none;
  --margin: none;
}
</style>

