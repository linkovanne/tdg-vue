<template>
  <section class="section service-gallery">
    <div class="section__container service-gallery__container">
      <TheHeader>
        <template v-slot:left>
          <a href="#" class="ui-link" @click.prevent="goBack">back</a>
        </template>
        <template v-slot:middle>
          <header-logo/>
        </template>
        <template v-slot:right>
          <router-link :to="{name: 'contactForm'}" class="ui-button" style="transform: translateX(20px);">
            Contáctate con nosotros
          </router-link>
        </template>
      </TheHeader>

      <TheMenu/>

      <div class="section__content service-gallery__content">
        <carousel ref="carousel" :options="options" class="service-gallery__slider">
          <div v-for="item in items" class="service-gallery__slide">
            <router-link :to="{name: 'project', params: { id: 1 }}"
                         class="service-gallery__slide-inner"
                         :style="{backgroundImage: item.img}">
              <h3>{{ item.title }}</h3>
              <small>{{ item.description }}</small>
            </router-link>
          </div>
        </carousel>
      </div>


      <TheFooter>
        <template v-if="!isMobile" v-slot:left>
          <div class="service-gallery__slider-nav">
            <a href="#" class="service-gallery__slider-arrow back" @click.prevent="$refs.carousel.goToPrev()">
              <arrow-back class="service-gallery__slider-icon"/>
            </a>
            <a href="#" class="service-gallery__slider-arrow forward" @click.prevent="$refs.carousel.goToNext()">
              <arrow-forward class="service-gallery__slider-icon"/>
            </a>
          </div>
        </template>
        <template v-if="isMobile" v-slot:middle>
          <div class="service-gallery__slider-nav">
            <a href="#" class="service-gallery__slider-arrow back" @click.prevent="$refs.carousel.goToPrev()">
              <arrow-back class="service-gallery__slider-icon"/>
            </a>
            <a href="#" class="service-gallery__slider-arrow forward" @click.prevent="$refs.carousel.goToNext()">
              <arrow-forward class="service-gallery__slider-icon"/>
            </a>
          </div>
        </template>
        <template v-if="!isMobile" v-slot:right>
          <router-link :to="{name: 'contacts'}" class="ui-link">contactos</router-link>
        </template>
      </TheFooter>
    </div>
  </section>
</template>

<script>
import {VueAgile} from 'vue-agile'
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';
import TheMenu from "@/components/TheMenu";
import ArrowBack from "@/assets/icons/arrowBack";
import ArrowForward from "@/assets/icons/arrowForward";
import HeaderLogo from "@/components/HeaderLogo";

export default {
  name: 'ServiceGalleryView',
  components: {
    HeaderLogo, ArrowForward, ArrowBack,
    TheMenu, TheHeader, TheFooter,
    carousel: VueAgile,
  },
  data() {
    return {
      isMobile: false,
      options: {
        navButtons: false,
        dots: false,
        infinite: true,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 4,
            }
          }
        ]
      },
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
        {
          id: 5,
          title: 'coche deportivo',
          description: 'iPerformance',
          img: `url(${require('@/assets/service/1.png')})`,
        },
        {
          id: 6,
          title: 'Mercedes',
          description: 'Coupe',
          img: `url(${require('@/assets/service/1.png')})`,
        },
        {
          id: 7,
          title: 'porsche',
          description: 'Grand Coupe',
          img: `url(${require('@/assets/service/1.png')})`,
        },
        {
          id: 8,
          title: 'BMW 8',
          description: 'Series',
          img: `url(${require('@/assets/service/1.png')})`,
        },
      ],
    }
  },
  created() {
    this.toggleWindowSize();
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', () => this.toggleWindowSize());
    });
  },
  methods: {
    toggleWindowSize() {
      this.isMobile = window.innerWidth < 768;
    },
    goBack() {
      window.history.back();
    },
  },
  beforeDestroy() {
    window.removeEventListener('resize', () => this.toggleWindowSize());
  },
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";

.service-gallery {
}

.service-gallery__container {
  @media (min-width: 768px) {
    padding-right: 100px;
    padding-bottom: calc(5.5vh + add-unit($base-footer-content-height, px) + add-unit($relative-footer-padding-bottom, vh));
  }
  @media (max-width: 767.98px) {
    padding-bottom: calc(5.5vh + add-unit($base-footer-content-height, px) + add-unit($relative-footer-padding-bottom, vh) + 5vh);
  }
}

.service-gallery__content {
  position: relative;
  width: 100%;
  //height: 100%;
  align-items: stretch;

  //  @todo add decoration to menu
  //&:before {
  //  content: '';
  //  position: absolute;
  //  height: 100%;
  //  width: 50px;
  //  left: 100%;
  //  top: 50%;
  //  transform: translateY(-50%);
  //  border: 1px solid #4F4F4F;
  //  border-right: none;
  //  border-radius: 100px;
  //}
}

.service-gallery__slider {
  margin: 0 -.5rem;
}

.service-gallery__slide {
  height: set-relative-height(700px);
  padding: 0 .5rem;

  &.agile__slide--active {
    .service-gallery__slide-inner {
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
  }
}

.service-gallery__slide-inner {
  height: 100%;
  padding: px2rem(28px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  background: top center / cover no-repeat;

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

.service-gallery__slider-nav {
  position: relative;
  display: inline-flex;
  align-items: center;
  @media (max-width: 767.98px) {
    padding-bottom: 5vh;
  }

  &:before {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: url("@/assets/arrov_bgr.png") center / contain no-repeat;
    @media (min-width: add-unit($base-container-width, px)) {
      width: 126px;
      height: 120px;
    }
    @media (max-width: add-unit($base-container-width - .2, px)) {
      width: 7vw;
      height: 10vh;
    }
    @media (min-width: 768px) {
      content: '';
    }
  }
}

.service-gallery__slider-arrow {
  @media (min-width: 768px) {
    max-width: 4.5vw;
  }

  &.back {
    color: #E0E0E0;
    @media (min-width: 768px) {
      padding-right: 1.5vw;
    }
    @media (max-width: 767.98px) {
      padding-right: 5vw;
    }
  }

  &.forward {
    color: $red;
    @media (min-width: 768px) {
      padding-left: 1.5vw;
    }
    @media (max-width: 767.98px) {
      padding-left: 5vw;
    }
  }
}

.service-gallery__slider-icon {
  max-width: 100%;
}
</style>
