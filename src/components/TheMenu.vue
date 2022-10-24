<template>
  <div class="the-menu">
    <a href="#" class="the-menu__burger" @click.prevent="isMenuOpened = !isMenuOpened">
      <TheMenuButton :isOpened="isMenuOpened"/>
    </a>

    <TheMenuContent v-show="isMenuOpened" @close-menu="isMenuOpened = false"/>
  </div>
</template>

<script>
import TheMenuContent from "@/components/TheMenuContent";
import TheMenuButton from "@/components/TheMenuButton";

export default {
  name: 'TheMenu',
  components: {TheMenuButton, TheMenuContent},
  data() {
    return {
      isMenuOpened: false,
    }
  },
  methods: {
    toggle() {
      this.isMenuOpened = !this.isMenuOpened;
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";

.the-menu__burger {
  cursor: pointer;
  z-index: 1000;
  position: absolute;
  right: 20px;
  color: $red;
  @media (min-width: 1024px) {
    top: 50%;
    transform: translateY(-50%);
  }
  @media (max-width: 1023.98px) {
    z-index: 1001;
    top: calc(add-unit($relative-header-padding-top, vh) + 14px);
    //height: add-unit($relative-header-content-height, vh);
  }
}
</style>
