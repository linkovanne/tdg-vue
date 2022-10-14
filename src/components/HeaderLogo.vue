<template>
  <router-link :to="{name: 'index'}" class="header-logo">
    <img src="@/assets/logo.png" alt="logo">
  </router-link>
</template>

<script>
export default {
  name: 'HeaderLogo'
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";
@import "src/styles/mixins/convert";

.header-logo {
  @media (max-width: 767.98px) {
    max-width: 162px;
  }

  img {
    @media (max-width: add-unit($base-container-width - .2, px)) {
      max-height: add-unit($relative-header-content-height, vh);
    }
  }
}
</style>
