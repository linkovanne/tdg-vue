<template>
  <section class="section index">
    <TheHeader>
      <template v-slot:left>
        <router-link :to="{name: 'index'}" class="index-header__logo">
          <img src="@/assets/logo.png" alt="logo">
        </router-link>
      </template>
      <template v-slot:right>
        <router-link :to="{name: 'contacts'}" href="" class="index-header__link">contactos</router-link>
      </template>
    </TheHeader>

    <div class="section__container index__container">
      <div class="section__content index__content">
        <div class="index__action">
          <a href="#" class="ui-button spacing">Amamos lo que hacemos</a>
        </div>
        <h2 class="index__title">Cada coche tiene más de&nbsp;una vida</h2>
      </div>
    </div>
  </section>
</template>

<script>
import TheHeader from '@/components/TheHeader';

export default {
  name: 'IndexView',
  components: {
    TheHeader,
  }
}
</script>

<style scoped lang="scss">
.index-header__logo {
  @media (max-width: 767.98px) {
    max-width: 162px;
  }
}

.index-header__link {
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.5em;
  text-transform: uppercase;
  text-decoration: none;
  color: #FFFFFF;
}

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
    font-size: 87px;
  }
  @media (min-width: 1024px) and (max-width: 1379.98px) {
    font-size: 64px;
  }
  @media (min-width: 768px) and (max-width: 1023.98px) {
    font-size: 32px;
  }
}
</style>
