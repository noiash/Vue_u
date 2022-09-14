<template>
  <v-app>
  <HeaderPage/>
    <v-main>
      <router-view/>
    </v-main>
  <FooterPage/>
  </v-app>
</template>

<script>
import FooterPage from './global/FooterPage.vue';
import HeaderPage from './global/HeaderPage.vue';

export default {
    name: "App",
    data: () => ({
    //
    }),
    components: { FooterPage, HeaderPage }
};
</script>
