<template>
  <section class="section project">
    <VueAgile v-if="portfolio && portfolio.items.length > 0" ref="carousel" :options="options" class="project__slider">
      <div v-for="item in portfolio.items" class="project__slider-item">
        <img v-if="item.type === 'img'" :src="item.link" alt="">
        <iframe
            v-if="item.type === 'video'"
            :src="item.link"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
      </div>
    </VueAgile>

    <div class="section__container project__container">
      <TheHeader>
        <template v-slot:left>
          <router-link :to="{name: 'serviceGallery'}" class="ui-link">back</router-link>
        </template>
      </TheHeader>

      <TheMenu/>

      <!--      scene = 'loading'-->
      <!--      scene = 'rejected'-->

      <template v-if="scene = 'fulfilled'">
        <div class="section__content project__content">
          <h2 v-if="portfolio?.header" class="project__title">{{ portfolio.header }}</h2>
          <p v-if="portfolio?.sub_header" class="project__subtitle">{{ portfolio.sub_header }}</p>
        </div>
      </template>

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
import {mapActions} from "vuex";

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
      scene: 'loading',
      portfolio: null,
      // link: 'https://www.youtube.com/embed/be5brvsVjCc',
      // https://www.youtube.com/watch?v=be5brvsVjCc
    }
  },
  created() {
    this.getPortfolio();
  },
  methods: {
    ...mapActions(['getPortfolioItem']),
    getPortfolio() {
      const id = this.$route.params.id;

      if (id) {
        this.getPortfolioItem(id)
            .then(response => {
              this.scene = 'fulfilled';
              this.portfolio = response;
            })
            .catch(() => this.scene = 'rejected');
      }
    },
  },
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";

.section__container {
  @media (max-width: 767.98px) {
    padding-bottom: calc($section-padding-bottom + 5vh + 33px);
  }
}

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
    background: $red;
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
  display: flex;
  align-items: center;
  @media (max-width: 767.98px) {
    padding-bottom: 5vh;
  }
}

.project__slider-arrow {
  display: flex;
  align-items: center;
  @media (max-width: 767.98px) {
    svg {
      max-width: 100%;
    }
  }

  &.back {
    padding-right: 1.5vw;
    color: #E0E0E0;
    @media (max-width: 767.98px) {
      flex-basis: 40%;
    }

    span {
      padding-right: 1.5vw;
      text-align: right;
    }
  }

  &.forward {
    padding-left: 1.5vw;
    color: $red;
    @media (max-width: 767.98px) {
      flex-basis: 60%;
    }

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
