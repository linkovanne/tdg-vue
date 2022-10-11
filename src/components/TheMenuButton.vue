<template>
  <div class="the-menu-button">
    <burger-menu v-if="!isOpened"/>
    <close-menu v-else/>
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

<style scoped>

</style>
