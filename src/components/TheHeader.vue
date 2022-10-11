<template>
  <header class="header">
    <div class="header__container pc">
      <div class="header__col header__col_left">
        <slot name="left"></slot>
      </div>
      <div class="header__col header__col_middle">
        <slot name="middle"></slot>
      </div>
      <div class="header__col header__col_right">
        <slot name="right"></slot>
      </div>
    </div>

    <div class="header__container mob">
      <div class="header__col header__col_left">
        <router-link :to="{name: 'index'}" class="header__logo">
          <img src="@/assets/logo.png" alt="logo">
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";
@import "src/styles/mixins/convert";

.header {
  z-index: 99;
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  @media (min-width: add-unit($base-container-width, px)) {
    padding-top: add-unit($base-header-padding-top, px);
  }
  @media (max-width: add-unit($base-container-width - .2, px)) {
    padding-top: add-unit($relative-header-padding-top, vh);
  }
}

.header__container {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 1024px) {
    align-items: flex-start;
  }
  @media (max-width: 1023.98px) {
    align-items: center;
  }

  &.pc {
    @media (max-width: 1023.98px) {
      display: none;
    }
  }

  &.mob {
    @media (min-width: 1024px) {
      display: none;
    }
  }
}

.header__col {
  @media (min-width: 1024px) {
    flex-basis: calc(100% / 3);
  }
  @media (max-width: 1023.98px) {
    flex-basis: 50%;
  }

  &_left {
    text-align: left;
  }

  &_middle {
    text-align: center;
  }

  &_right {
    text-align: right;
  }
}
</style>
