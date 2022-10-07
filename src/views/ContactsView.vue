<template>
  <section class="section contacts">
    <TheHeader>
      <template v-slot:left>
        <router-link :to="{name: 'index'}" class="header__go-back">back</router-link>
      </template>
      <template v-slot:middle>
        <router-link :to="{name: 'index'}" class="header__logo">
          <img src="@/assets/logo.png" alt="logo">
        </router-link>
      </template>
    </TheHeader>

    <div class="section__container contacts__container">
      centro de detailing Tdg
    </div>

    <TheFooter />
  </section>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';

export default {
  name: 'ContactsView',
  components: {TheHeader, TheFooter}
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";

</style>
