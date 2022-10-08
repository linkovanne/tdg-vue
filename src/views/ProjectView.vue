<template>
  <section class="section project" :style="{backgroundImage: item.images[slideIndex]}">
    <TheHeader>
      <template v-slot:left>
        <router-link :to="{name: 'serviceGallery', id: 1}" class="header__go-back">back</router-link>
      </template>
    </TheHeader>

    <div class="section__container project__container">
      <TheMenu/>

      <div class="section__content project__content">
        <h2 class="project__title">{{ item.title }}</h2>
        <p class="project__subtitle">{{ item.description }}</p>
      </div>
    </div>

    <TheFooter/>
  </section>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';
import TheMenu from "@/components/TheMenu";

export default {
  name: 'ProjectView',
  components: {TheMenu, TheHeader, TheFooter},
  data() {
    return {
      slideIndex: 0,
      item: {
        id: 1,
        title: 'coche deportivo',
        description: 'iPerformance',
        images: [`url(${require('@/assets/service/1.png')})`, `url(${require('@/assets/service/1.png')})`, `url(${require('@/assets/service/1.png')})`],
      },
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";

.project__content {
  position: relative;
  padding-bottom: 32px;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    max-width: 418px;
    height: 5px;
    background: $orange;
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
</style>
