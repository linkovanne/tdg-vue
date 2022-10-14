<template>
  <section class="section index">
    <div class="section__container index__container">
      <TheHeader>
        <template v-slot:left>
          <header-logo/>
        </template>
        <template v-slot:right>
          <router-link :to="{name: 'contacts'}" class="ui-link">contactos</router-link>
        </template>
      </TheHeader>

      <TheMenu class="index__aside-menu"/>

      <div class="section__content index__content">
        <div class="index__action">
          <a href="#" class="ui-button spacing" @click.prevent>Amamos lo que hacemos</a>
        </div>
        <h2 class="index__title">Cada coche tiene más de&nbsp;una vida</h2>
      </div>

      <TheFooter/>
    </div>
  </section>
</template>

<script>
import TheMenu from '@/components/TheMenu';
import TheHeader from '@/components/TheHeader';
import TheFooter from "@/components/TheFooter";
import HeaderLogo from "@/components/HeaderLogo";

export default {
  name: 'IndexView',
  components: {HeaderLogo, TheMenu, TheHeader, TheFooter},
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";

.index {
  background: url("@/assets/index/bgr.png") top center / cover no-repeat;
}

.index__container {
}

.index__action {
  @media (max-width: 575.98px) {
    .ui-button {
      width: 100%;
    }
  }
}

.index__title {
  margin: px2rem(14px) 0 px2rem(50px);
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
  @media (min-width: add-unit($base-container-width, px)) {
    font-size: px2rem(87px);
  }
  @media (min-width: 1024px) and (max-width: add-unit($base-container-width - .2, px)) {
    font-size: 4.5vw;
  }
  @media (min-width: 768px) and (max-width: 1023.98px) {
    font-size: px2rem(32px);
  }
}
</style>
