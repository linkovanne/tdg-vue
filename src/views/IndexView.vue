<template>
  <section class="section index">
    <TheHeader>
      <template v-slot:left>
        <router-link :to="{name: 'index'}" class="header__logo">
          <img src="@/assets/logo.png" alt="logo">
        </router-link>
      </template>
      <template v-slot:right>
        <router-link :to="{name: 'contacts'}" href="" class="header__link">contactos</router-link>
      </template>
    </TheHeader>

    <div class="section__container index__container">
      <TheMenu/>

      <div class="section__content index__content">
        <div class="index__action">
          <a href="#" class="ui-button spacing" @click.prevent>Amamos lo que hacemos</a>
        </div>
        <h2 class="index__title">Cada coche tiene más de&nbsp;una vida</h2>
      </div>
    </div>

    <TheFooter/>
  </section>
</template>

<script>
import TheMenu from '@/components/TheMenu';
import TheHeader from '@/components/TheHeader';
import TheFooter from "@/components/TheFooter";

export default {
  name: 'IndexView',
  components: {TheMenu, TheHeader, TheFooter},
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";

.index {
  background: url("@/assets/index/bgr.png") top center / cover no-repeat;
}

.index__container {
  position: relative;
}

.index__action {
}

.index__title {
  margin: 14px 0 0;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
  @media (min-width: 1380px) {
    font-size: px2rem(87px);
  }
  @media (min-width: 1024px) and (max-width: 1379.98px) {
    font-size: px2rem(64px);
  }
  @media (min-width: 768px) and (max-width: 1023.98px) {
    font-size: px2rem(32px);
  }
}
</style>
