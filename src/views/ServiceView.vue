<template>
  <section class="section service">
    <div class="section__container service__container">
      <TheHeader class="service-header">
        <template v-slot:left>
          <header-logo/>
        </template>
        <template v-slot:right>
          <router-link :to="{name: 'contacts'}" class="ui-link">contactos</router-link>
        </template>
      </TheHeader>

      <TheMenu/>

      <div class="section__content service__content">
        <h2 class="service__title">Servicios TDG</h2>
        <div v-if="service" class="service__info">
          <div class="service__info-col">
            <h3 class="service__info-title">{{ service.label }}</h3>
            <ul class="service__info-list">
              <li class="service__info-item">Pulido Abrillantado + Cera Carnauba</li>
              <li class="service__info-item">Detailing + Tratamiento Cerámico Gyeone Infinite</li>
            </ul>
            <div class="service__info-action">
              <router-link :to="{name: 'contactForm'}" class="ui-button">Contáctate con nosotros</router-link>
              <router-link :to="{name: 'serviceGallery'}" class="ui-button outline">Ver ejemplos</router-link>
            </div>
          </div>
          <div class="service__info-col description">
            <p class="service__info-description">{{ service.description }}</p>
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
import HeaderLogo from "@/components/HeaderLogo";
import {mapActions} from "vuex";

export default {
  name: 'ServicesItemView',
  components: {
    HeaderLogo,
    TheHeader,
    TheMenu,
    TheFooter,
  },
  data() {
    return {
      service: null,
    }
  },
  created() {
    const id = this.$route.params.id;
    if (id) {
      this.getServiceItem(1).then(response => this.service = response);
    }
  },
  methods: {
    ...mapActions(['getServiceItem']),
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";

.service {
  background: url("@/assets/service/1.png") top center / cover no-repeat;
}

.service__content {
  padding-bottom: 10vh;
}

.service__title {
  font-weight: 500;
  letter-spacing: 0.05em;
  color: $light-text;
  opacity: 0.5;
  @media (min-width: 1024px) {
    margin-bottom: 1rem;
    font-size: px2rem(18px);
    line-height: calc(24 / 18);
  }
  @media (max-width: 1023.98px) {
    margin-bottom: .5rem;
    font-size: 2vh;
    line-height: calc(21 / 16);
  }
}

.service__info {
  @media (min-width: 1024px) {
    display: flex;
  }
}

.service__info-col {
  @media (min-width: 1024px) {
    flex: 1 50%;
    $padding: (139 / $base-width) * 100;

    &:nth-of-type(even) {
      padding-left: add-unit($padding, vw);
    }

    &:nth-of-type(odd) {
      padding-right: add-unit($padding, vw);
    }
  }

  &.description {
    @media (max-width: 1023.98px) {
      display: none;
    }
  }
}

.service__info-title {
  font-weight: 700;
  letter-spacing: 0.1em;
  @media (min-width: 1024px) {
    font-size: px2rem(64px);
    line-height: calc(78 / 64);
  }
  @media (max-width: 1023.98px) {
    font-size: 4vh;
    line-height: calc(40 / 33);
  }
}

.service__info-list {
  padding-left: 22px;
  font-weight: 700;
  font-size: px2rem(22px);
  line-height: calc(39 / 22);
  letter-spacing: 0.2em;
  @media (min-width: 1024px) {
    margin-bottom: 1rem;
  }
  @media (max-width: 1023.98px) {
    margin-bottom: 7vh;
    font-size: 2vh;
  }
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
