<template>
  <div class="the-menu-button">
    <burger-menu v-if="!isOpened" class="the-menu-button__icon"/>
    <close-menu v-else class="the-menu-button__icon"/>
  </div>
</template>

<script>
import CloseMenu from "@/assets/icons/closeMenu";
import BurgerMenu from "@/assets/icons/burgerMenu";

export default {
  name: 'TheMenuButton',
  components: {CloseMenu, BurgerMenu},
  props: ['isOpened'],
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";

.the-menu-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 576px) {
    height: 34px;
    width: 34px;
  }
  @media (max-width: 575.98px) {
    height: 28px;
    width: 28px;
  }
}

.the-menu-button__icon {
  max-width: 100%;
}
</style>
