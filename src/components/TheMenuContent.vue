<template>
  <div class="section the-menu-content">
    <TheHeader/>

    <div class="section__container">
      <div class="section__content the-menu-content__content">
        <div class="the-menu-content__col top">
          <router-link :to="{name: 'contacts'}" class="ui-link">contactos</router-link>
        </div>
        <div class="the-menu-content__col left">
          <h2 class="the-menu-content__title">Servicios TDG</h2>
          <div class="the-menu-content__slogan">Cada coche tiene más de una vida</div>

          <TheProject class="the-menu-content__project"/>
        </div>

        <div class="the-menu-content__col right">
          <TheMenuButton class="the-menu-content__icon" :is-opened="true" @click="$emit('close-menu')"/>

          <ul class="the-menu-content__list">
            <li v-for="service in services">
              <router-link :to="{ name: 'service' }">{{ service }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <TheFooter/>
  </div>
</template>

<script>
import TheFooter from "@/components/TheFooter";
import TheProject from "@/components/TheProject";
import TheHeader from "@/components/TheHeader";
import TheMenuButton from "@/components/TheMenuButton";

export default {
  name: 'TheMenuContent',
  components: {
    TheMenuButton,
    TheHeader,
    TheProject,
    TheFooter,
  },
  data() {
    return {
      services: [
        'Lavado de Mantenimiento',
        'Limpieza Integral',
        'Detailing Interior',
        'Tratamiento cerámico de Cuero',
        'Pulido',
        'Tratamiento Cerámico de Cristales (antilluvia)',
        'Tratamiento Cerámico de llantas',
        'Tratamiento Cerámico de plasticos',
        'Tratamiento de Cera Carnauba'
      ],
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";

.the-menu-content {
  z-index: 1000;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #202121 url("@/assets/menu_bgr.png") top center / cover no-repeat;

  @media (min-width: 1024px) {
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      right: 0;
      bottom: 0;
      background: rgba(32, 33, 33, 0.8);
    }
  }
}

.the-menu-content__content {
  height: 100%;
  display: flex;
  align-items: stretch;
  @media (min-width: 1024px) {
  }
  @media (max-width: 1023.98px) {
    padding-top: set-relative-height(50px);
    padding-bottom: 6.5vw;
    flex-direction: column;
    justify-content: flex-end;
  }
}

.the-menu-content__col {
  display: flex;
  @media (min-width: 1024px) {
    flex-basis: 50%;
  }
  @media (max-width: 1023.98px) {
  }

  &.top {
    @media (min-width: 1024px) {
      display: none;
    }
    @media (max-width: 1023.98px) {
      margin-bottom: auto;
    }
  }

  &.left {
    flex-direction: column;
    justify-content: flex-end;
    @media (max-width: 1023.98px) {
      padding-top: set-relative-height(63px);
      order: 1;
    }
  }

  &.right {
    position: relative;
    align-items: flex-end;

    .the-menu-content__icon {
      cursor: pointer;
      position: absolute;
      top: 50%;
      left: 10%;
      transform: translateY(-50%);
      color: $red;
      @media (max-width: 1023.98px) {
        display: none;
      }
    }
  }
}

.the-menu-content__title {
  margin-bottom: 1rem;
  font-weight: 500;
  font-size: px2rem(18px);
  line-height: calc(24 / 18);
  letter-spacing: 0.05em;
  color: $light-text;
  opacity: 0.5;
  @media (min-width: 1024px) {
  }
  @media (max-width: 1023.98px) {
    display: none;
  }
}

.the-menu-content__slogan {
  margin-bottom: 10rem;
  font-weight: 700;
  line-height: calc(78 / 64);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: $white;
  @media (min-width: add-unit($base-container-width, px)) {
    font-size: px2rem(64px);
  }
  @media (min-width: 1024px) and (max-width: add-unit($base-container-width - .2, px)) {
    font-size: 3.3vw;
  }
  @media (min-width: 1024px) {
  }
  @media (max-width: 1023.98px) {
    display: none;
  }
}

.the-menu-content__project {
  @media (min-width: 576px) {
    max-width: 680px;
  }
  @media (max-width: 575.98px) {
    max-width: 375px;
  }
}

.the-menu-content__list {
  overflow-y: auto;
  list-style: none;
  @media (min-width: 1024px) {
    max-height: set-relative-height(814px);
    padding-left: 30%;
    padding-right: 60px;
  }
  @media (max-width: 1023.98px) {
    max-height: set-relative-height(234px);
  }

  li {
    & + li {
      @media (min-width: 768px) {
        margin-top: px2rem(34px);
      }
      @media (max-width: 767.98px) {
        margin-top: px2rem(27px);
      }
    }
  }

  a {
    font-weight: 700;
    letter-spacing: 0.5em;
    text-transform: uppercase;
    color: $white;
    @media (min-width: 768px) {
      font-size: px2rem(20px);
      line-height: calc(35 / 20);
    }
    @media (max-width: 767.98px) {
      font-size: 1rem;
      line-height: calc(27 / 16);
    }

    &:hover {
      color: $red;
    }
  }
}
</style>
