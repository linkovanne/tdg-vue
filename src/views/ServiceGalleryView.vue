<template>
  <section class="section service-gallery">
    <TheHeader>
      <template v-slot:left>
        <router-link :to="{name: 'service'}" class="service-gallery__go-back">back</router-link>
      </template>
      <template v-slot:middle>
        <router-link :to="{name: 'index'}" class="service-gallery__header-logo">
          <img src="@/assets/logo.png" alt="logo">
        </router-link>
      </template>
      <template v-slot:right>
        <a href="#" class="ui-button" style="transform: translateX(20px);">Contáctate con nosotros</a>
      </template>
    </TheHeader>

    <div class="section__container service-gallery__container">
      <div class="section__content service-gallery__content">
        ServiceGalleryView
      </div>
    </div>
  </section>
</template>

<script>
import TheHeader from '@/components/TheHeader';

export default {
  name: 'ServiceGalleryView',
  components: {
    TheHeader,
  }
}
</script>

<style scoped lang="scss">
.service-gallery__go-back {
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.5em;
  text-transform: uppercase;
  text-decoration: none;
  color: rgba(255, 255, 255, .5);
}

.service-gallery__header-logo {
  @media (max-width: 767.98px) {
    max-width: 162px;
  }
}
</style>
