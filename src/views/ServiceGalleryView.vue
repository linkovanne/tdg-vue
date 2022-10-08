<template>
  <section class="section service-gallery">
    <div class="section__container service-gallery__container">
      <TheHeader>
        <template v-slot:left>
          <router-link :to="{name: 'service'}" class="header__go-back">back</router-link>
        </template>
        <template v-slot:middle>
          <router-link :to="{name: 'index'}" class="header__logo">
            <img src="@/assets/logo.png" alt="logo">
          </router-link>
        </template>
        <template v-slot:right>
          <a href="#" class="ui-button" style="transform: translateX(20px);">Contáctate con nosotros</a>
        </template>
      </TheHeader>

      <TheMenu/>

      <ol class="section__content service-gallery__content service-gallery__slider">
        <li v-for="item in items" :key="item"
            class="service-gallery__slide"
            :class="{active: item.id === 1}">
          <router-link :to="{name: 'project', id: 1}"
                       class="service-gallery__slide-inner"
                       :class="{active: item.id === 1}"
                       :style="{backgroundImage: item.img}">
            <h3>{{ item.title }}</h3>
            <small>{{ item.description }}</small>
          </router-link>
        </li>
      </ol>

      <TheFooter/>
    </div>
  </section>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';
import TheMenu from "@/components/TheMenu";

export default {
  name: 'ServiceGalleryView',
  components: {TheMenu, TheHeader, TheFooter},
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'coche deportivo',
          description: 'iPerformance',
          img: `url(${require('@/assets/service/1.png')})`,
        },
        {
          id: 2,
          title: 'Mercedes',
          description: 'Coupe',
          img: `url(${require('@/assets/service/1.png')})`,
        },
        {
          id: 3,
          title: 'porsche',
          description: 'Grand Coupe',
          img: `url(${require('@/assets/service/1.png')})`,
        },
        {
          id: 4,
          title: 'BMW 8',
          description: 'Series',
          img: `url(${require('@/assets/service/1.png')})`,
        },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";

.service-gallery {
}

.service-gallery__container {
}

.service-gallery__slider {
  height: 100%;
  margin: 0 -.5rem;
  display: flex;
  align-items: stretch;
  list-style: none;
}

.service-gallery__slide {
  padding: 0 .5rem;
  flex-basis: calc(65% / 3);

  &.active {
    flex-basis: 35%;
  }
}

.service-gallery__slide-inner {
  height: 100%;
  padding: px2rem(28px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  background: top center / cover no-repeat;

  &.active {
    position: relative;
    padding: px2rem(28px) px2rem(41px);

    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 68.5%;
      height: 5px;

      background: #EB5757;
    }
  }

  h3 {
    font-weight: 700;
    font-size: px2rem(20px);
    line-height: calc(35 / 20);
    letter-spacing: 0.5em;
    text-transform: uppercase;
    color: $white;
  }

  small {
    font-weight: 500;
    font-size: px2rem(18px);
    line-height: calc(24 / 18);
    letter-spacing: 0.05em;
    color: $light-text;
    opacity: 0.5;
  }
}

.service-gallery__content {
}
</style>
