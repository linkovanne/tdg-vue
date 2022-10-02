<template>
  <section class="section service">
    <TheHeader class="service-header">
      <template v-slot:left>
        <router-link :to="{name: 'index'}" class="service-header__logo">
          <img src="@/assets/logo.png" alt="logo">
        </router-link>
      </template>
      <template v-slot:right>
        <router-link :to="{name: 'contacts'}" href="" class="service-header__link">contactos</router-link>
      </template>
    </TheHeader>

    <div class="section__container service__container">
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
              <a href="#" class="ui-button">Contáctate con nosotros</a>
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
    </div>
  </section>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import TheMenu from '@/components/TheMenu';

export default {
  name: 'ServicesItemView',
  components: {
    TheHeader,
    TheMenu,
  }
}
</script>

<style scoped lang="scss">
.service-header__logo {
  @media (max-width: 767.98px) {
    max-width: 162px;
  }
}

.service-header__link {
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.5em;
  text-transform: uppercase;
  text-decoration: none;
  color: #FFFFFF;
}

.service {
  background: url("@/assets/service/1.png") top center / cover no-repeat;
}

.service__container {
  padding-right: 48px;
}

.service__title {
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #F2F2F2;
  opacity: 0.5;
}

.service__info {
  display: flex;
}

.service__info-col {
  flex: 1 50%;
}

.service__info-title {
  font-weight: 700;
  font-size: 64px;
  line-height: 78px;
  letter-spacing: 0.1em;
}

.service__info-list {
  padding-left: 22px;
  font-weight: 700;
  font-size: 22px;
  line-height: 39px;
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
  font-size: 24px;
  line-height: 134.09%;
  letter-spacing: 0.05em;
  color: #F2F2F2;
}
</style>
