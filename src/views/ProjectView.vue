<template>
  <section class="section project" :style="{backgroundImage: item.images[slideIndex]}">
    <VueAgile ref="carousel" :options="options" class="project__slider">
      <div v-for="img in item.images" class="project__slider-item">
        <img :src="img" alt="">
      </div>
    </VueAgile>
    <div class="section__container project__container">
      <TheHeader>
        <template v-slot:left>
          <router-link :to="{name: 'serviceGallery'}" class="ui-link">back</router-link>
        </template>
      </TheHeader>

      <TheMenu/>

      <div class="section__content project__content">
        <h2 class="project__title">{{ item.title }}</h2>
        <p class="project__subtitle">{{ item.description }}</p>
      </div>

      <TheFooter>
        <template v-slot:middle>
          <div class="project__slider-nav">
            <a class="project__slider-arrow back" href="#" @click.prevent="$refs.carousel.goToPrev()">
              <span>prev</span>
              <arrow-back/>
            </a>
            <a class="project__slider-arrow forward" href="#" @click.prevent="$refs.carousel.goToNext()">
              <arrow-forward-long/>
              <span>next</span>
            </a>
          </div>
        </template>
      </TheFooter>
    </div>
  </section>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';
import TheMenu from "@/components/TheMenu";
import ArrowBack from "@/assets/icons/arrowBack";
import ArrowForwardLong from "@/assets/icons/arrowForwardLong";
import {VueAgile} from "vue-agile";

export default {
  name: 'ProjectView',
  components: {ArrowForwardLong, ArrowBack, TheMenu, TheHeader, TheFooter, VueAgile},
  data() {
    return {
      slideIndex: 0,
      options: {
        navButtons: false,
        dots: false,
        infinite: true,
        settings: {
          slidesToShow: 1,
        }
      },
      item: {
        id: 1,
        title: 'coche deportivo',
        description: 'iPerformance',
        images: [
          'https://cdn.pixabay.com/photo/2017/10/16/23/18/lamborghini-2859047_960_720.jpg',
          'https://cdn.pixabay.com/photo/2017/05/06/05/41/streak-2288981_960_720.jpg',
          'https://cdn.pixabay.com/photo/2017/02/23/01/28/chevrolet-2091110_960_720.jpg'
        ],
      },
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";

.project__slider {
  z-index: -1;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.project__slider-item {
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.project__content {
  position: relative;
  @media (min-width: add-unit($base-container-width, px)) {
    padding-bottom: 106px;
  }
  @media (max-width: add-unit($base-container-width - .2, px)) {
    padding-bottom: set-relative-height(106px);
  }

  &:before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    background: $orange;
    @media (min-width: add-unit($base-container-width, px)) {
      bottom: 76px;
      max-width: 418px;
      height: 5px;
    }
    @media (max-width: add-unit($base-container-width - .2, px)) {
      bottom: set-relative-height(76px);
      max-width: set-relative-width(418px);
      height: set-relative-height(5px);
    }
  }
}

.project__title {
  font-weight: 700;
  font-size: px2rem(20px);
  line-height: calc(35 / 20);
  letter-spacing: 0.5em;
  text-transform: uppercase;
}

.project__subtitle {
  font-weight: 500;
  font-size: px2rem(24px);
  line-height: calc(32 / 24);
  letter-spacing: 0.05em;
  color: $light-text;
  opacity: 0.5;
}

.project__slider-nav {
}

.project__slider-arrow {
  &.back {
    padding-right: 1.5vw;
    color: #E0E0E0;

    span {
      padding-right: 1.5vw;
      text-align: right;
    }
  }

  &.forward {
    padding-left: 1.5vw;
    color: $orange;

    span {
      padding-left: 1.5vw;
    }
  }

  span {
    font-weight: 500;
    font-size: px2rem(18px);
    line-height: 2.4;
    letter-spacing: 0.5em;
    text-transform: uppercase;
    color: $white;
    opacity: 0.5;
  }
}

.project__slider-icon {
  &.back {
    max-width: 3vw;
  }

  &.forward {
    max-width: 7.5vw;
  }
}
</style>
