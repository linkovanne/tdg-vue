<template>
  <div class="the-menu">
    <a href="#" class="the-menu__burger" @click.prevent="isMenuOpened = true">
      <svg width="41" height="12" viewBox="0 0 41 12" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M1.21289 9.19336H39.7871C40.4551 9.19336 41 9.73242 41 10.4063C41 11.0801 40.4551 11.6191 39.7871 11.6191H1.21289C0.544922 11.6191 0 11.0742 0 10.4063C0 9.73242 0.544922 9.19336 1.21289 9.19336Z"
            fill="currentColor"/>
        <path
            d="M1.21289 0H39.7871C40.4551 0 41 0.544922 41 1.21289C41 1.88086 40.4551 2.42578 39.7871 2.42578H1.21289C0.544922 2.42578 0 1.88086 0 1.21289C0 0.544922 0.544922 0 1.21289 0Z"
            fill="currentColor"/>
      </svg>
    </a>

    <TheMenuContent v-show="isMenuOpened" @close-menu="isMenuOpened = false"/>
  </div>
</template>

<script>
import TheMenuContent from "@/components/TheMenuContent";

export default {
  name: 'TheMenu',
  components: {TheMenuContent},
  data() {
    return {
      isMenuOpened: false,
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
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  color: $orange;
}
</style>
