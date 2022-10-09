<template>
  <div class="section the-menu-content">
    <div class="section__container">
      <div class="section__content the-menu-content__content">
        <div class="the-menu-content__col left">
          <h2 class="the-menu-content__title">Servicios TDG</h2>
          <div class="the-menu-content__slogan">Cada coche tiene más de una vida</div>

          <TheProject class="the-menu-content__project"/>
        </div>

        <div class="the-menu-content__col right">
          <a href="#" class="the-menu-content__icon" @click.prevent="$emit('close-menu')">
            <svg width="34" height="34" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M33.5978 33.5977C33.0614 34.1341 32.1918 34.1341 31.6555 33.5977L0.402273 2.34467C-0.134091 1.80831 -0.134091 0.938717 0.402273 0.402355C0.670421 0.134075 1.02198 6.48499e-05 1.37346 6.48499e-05C1.72495 6.48499e-05 2.07644 0.13414 2.34466 0.40242L33.5978 31.6555C34.1341 32.1918 34.1341 33.0614 33.5978 33.5977Z"/>
              <path
                  d="M33.5977 2.3446L2.34452 33.5977C1.80823 34.134 0.93857 34.134 0.402273 33.5977C-0.134091 33.0614 -0.134091 32.1918 0.402273 31.6554L31.6555 0.402287C31.9236 0.134075 32.2752 0 32.6267 0C32.9781 0 33.3297 0.134075 33.5978 0.402222C34.134 0.938652 34.134 1.80824 33.5977 2.3446Z"/>
            </svg>
          </a>

          <ul class="the-menu-content__list">
            <li>
              <router-link :to="{
                name: 'service',
                params: { id: '1' },
              }">
                Lavado de Mantenimiento
              </router-link>
            </li>
            <li>
              <router-link :to="{
                name: 'service',
                params: { id: '1' },
              }">
                Limpieza Integral
              </router-link>
            </li>
            <li>
              <router-link :to="{
                name: 'service',
                params: { id: '1' },
              }">
                Detailing Interior
              </router-link>
            </li>
            <li>
              <router-link :to="{
                name: 'service',
                params: { id: '1' },
              }">
                Tratamiento cerámico de Cuero
              </router-link>
            </li>
            <li>
              <router-link :to="{
                name: 'service',
                params: { id: '1' },
              }">
                Pulido
              </router-link>
            </li>
            <li>
              <router-link :to="{
                name: 'service',
                params: { id: '1' },
              }">
                Tratamiento Cerámico de Cristales (antilluvia)
              </router-link>
            </li>
            <li>
              <router-link :to="{
                  name: 'service',
                  params: { id: '1' },
                }">
                Tratamiento Cerámico de llantas
              </router-link>
            </li>
            <li>
              <router-link :to="{
                name: 'service',
                params: { id: '1' },
              }">
                Tratamiento Cerámico de plasticos
              </router-link>
            </li>
            <li>
              <router-link :to="{
                name: 'service',
                params: { id: '1' },
              }">
                Tratamiento de Cera Carnauba
              </router-link>
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

export default {
  name: 'TheMenuContent',
  components: {
    TheProject,
    TheFooter,
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

.the-menu-content__content {
  height: 100%;
  display: flex;
  align-items: stretch;
  @media (min-width: 1024px) { }
  @media (max-width: 1023.98px) {
    flex-direction: column;
  }
}

.the-menu-content__col {
  display: flex;
  @media (min-width: 1024px) {
    flex-basis: 50%;
  }
  @media (max-width: 1023.98px) {}

  &.left {
    flex-direction: column;
    justify-content: flex-end;
  }

  &.right {
    position: relative;
    align-items: flex-end;
  }
}

.the-menu-content__icon {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  fill: $orange;
}

.the-menu-content__title {
  margin-bottom: 1rem;
  font-weight: 500;
  font-size: px2rem(18px);
  line-height: calc(24 / 18);
  letter-spacing: 0.05em;
  color: $light-text;
  opacity: 0.5;
  @media (min-width: 1024px) {}
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
  @media (min-width: 1024px) {}
  @media (max-width: 1023.98px) {
    display: none;
  }
}

.the-menu-content__project {
  max-width: 680px;
}

.the-menu-content__list {
  max-height: add-unit(814 * 100 / $base-height, vh);
  overflow-y: auto;
  padding-left: 30%;
  padding-right: 60px;
  list-style: none;

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
      color: $orange;
    }
  }
}
</style>
