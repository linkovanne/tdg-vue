<template>
  <section class="section contacts">
    <TheHeader>
      <template v-slot:left>
        <a href="#" class="ui-link" @click.prevent="goBack">back</a>
      </template>
      <template v-slot:middle>
        <header-logo/>
      </template>
    </TheHeader>

    <div class="section__container contacts__container">
      <GoogleMap style="height: 100%; width: 100%;"/>
    </div>

    <TheFooter/>
  </section>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';
import HeaderLogo from "@/components/HeaderLogo";
import GoogleMap from "@/components/GoogleMap";

export default {
  name: 'ContactsView',
  components: {GoogleMap, HeaderLogo, TheHeader, TheFooter},
  methods: {
    goBack() {
      window.history.back();
    },
  },
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";

.contacts {
  background: rgb(32, 33, 33);
}

.contacts__container {
  padding: 0;
}
</style>
