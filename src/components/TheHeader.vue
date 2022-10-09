<template>
  <header class="header">
    <div class="header__container">
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
  @media (max-width: 767.98px) {
    padding-top: 62px;
  }
}

.header__container {
  padding: 0 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 767.98px) {
    flex-wrap: wrap;
  }
}

.header__col {
  flex-basis: calc(100% / 3);

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
