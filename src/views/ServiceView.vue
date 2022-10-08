<template>
  <section class="section service">
    <div class="section__container service__container">
      <TheHeader class="service-header">
        <template v-slot:left>
          <router-link :to="{name: 'index'}" class="header__logo">
            <img src="@/assets/logo.png" alt="logo">
          </router-link>
        </template>
        <template v-slot:right>
          <router-link :to="{name: 'contacts'}" href="" class="header__link">contactos</router-link>
        </template>
      </TheHeader>

      <TheMenu/>

      <div class="section__content service__content">
        <h2 class="service__title">Servicios TDG</h2>
        <div class="service__info">
          <div class="service__info-col">
            <h3 class="service__info-title">Pulido</h3>
            <ul class="service__info-list">
              <li class="service__info-item">Pulido Abrillantado + Cera Carnauba</li>
              <li class="service__info-item">Detailing + Tratamiento Cerámico Gyeone Infinite</li>
            </ul>
            <div class="service__info-action">
              <router-link :to="{name: 'contactForm'}" class="ui-button">Contáctate con nosotros</router-link>
              <router-link :to="{name: 'serviceGallery'}" class="ui-button outline">Ver ejemplos</router-link>
            </div>
          </div>
          <div class="service__info-col">
            <p class="service__info-description">
              Es un lavado a mano detallado del exterior con limpieza de llantas en dos pasos, aspiración completa del
              interior del vehículo con maletero incluido, limpieza detallada de salpicadero,
              volante y consola central y un buen repaso del
              resto de superficies. <br>

              Encerado de coche con cera liquida de alta calidad. (Duración 2-3h)
            </p>
          </div>
        </div>
      </div>

      <TheFooter/>
    </div>
  </section>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import TheMenu from '@/components/TheMenu';
import TheFooter from '@/components/TheFooter';

export default {
  name: 'ServicesItemView',
  components: {
    TheHeader,
    TheMenu,
    TheFooter,
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";

.service {
  background: url("@/assets/service/1.png") top center / cover no-repeat;
}

.service__container {
  padding-right: 4rem;
}

.service > * {
  //@media (min-width: 1380px) and (max-height: 780px) {
  //  transform: scale(.8);
  //}
}

.service__title {
  margin-bottom: 16px;
  font-weight: 500;
  font-size: px2rem(18px);
  line-height: calc(24 / 18);
  letter-spacing: 0.05em;
  color: $light-text;
  opacity: 0.5;
}

.service__info {
  display: flex;
}

.service__info-col {
  flex: 1 50%;
  $padding: (139 / $base-width) * 100;

  &:nth-of-type(even) {
    padding-left: add-unit($padding, vw);
  }

  &:nth-of-type(odd) {
    padding-right: add-unit($padding, vw);
  }
}

.service__info-title {
  font-weight: 700;
  font-size: px2rem(64px);
  line-height: calc(78 / 64);
  letter-spacing: 0.1em;
}

.service__info-list {
  margin-bottom: 1rem;
  padding-left: 22px;
  font-weight: 700;
  font-size: px2rem(22px);
  line-height: calc(39 / 22);
  letter-spacing: 0.2em;
}

.service__info-item {
}

.service__info-action {
  max-width: 467px;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  .ui-button + .ui-button {
    margin-top: 8px;
  }
}

.service__info-description {
  font-size: px2rem(24px);
  line-height: 1.34;
  letter-spacing: 0.05em;
  color: $light-text;
}
</style>
