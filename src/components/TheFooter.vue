<template>
  <footer class="footer">
    <div class="footer__container">
      <p class="footer__copyright">&copy;TDG. {{ year }}</p>
      <div class="footer__content">
        <div class="footer__content-col left">
          <slot name="left"></slot>
        </div>
        <div class="footer__content-col middle">
          <slot name="middle"></slot>
        </div>
        <div class="footer__content-col right">
          <slot name="right"></slot>
        </div>
      </div>
      <div class="footer__socials">
        <a href="#" class="footer__socials-link">
          <facebook/>
        </a>
        <a href="#" class="footer__socials-link">
          <instagram/>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import facebook from "@/assets/icons/facebook";
import instagram from "@/assets/icons/instagram";

export default {
  name: 'TheFooter',
  components: {facebook, instagram},
  data() {
    return {
      year: new Date().getFullYear(),
    }
  },
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";
@import "src/styles/mixins/convert";

.footer {
  z-index: 99;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-top: 12px;
  @media (min-width: add-unit($base-container-width, px)) {
    padding-bottom: add-unit($base-footer-padding-bottom, px);
  }
  @media (max-width: add-unit($base-container-width - .2, px)) {
    padding-bottom: add-unit($relative-footer-padding-bottom, vh);
  }
  @media (max-width: 767.98px) {
    padding-bottom: 38px;
  }
}

.footer__container {
  width: 100%;
  padding: 0 20px;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 767.98px) {
    opacity: .5;
  }
}

.footer__copyright {
  margin: 0;
  font-weight: 500;
  font-size: 1rem;
  line-height: calc(21/16);
  letter-spacing: 0.05em;
  color: #F2F2F2;
  opacity: 0.5;
  @media (max-width: 767.98px) {
    display: none;
  }
}

.footer__socials {
  @media (max-width: 767.98px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
}

.footer__socials-link {
  color: $white;
  opacity: .5;

  & + .footer__socials-link {
    @media (min-width: add-unit($base-container-width, px)) {
      padding-left: px2rem(78px);
    }
    @media (max-width: add-unit($base-container-width - .2, px)) and (min-width: 768px) {
      padding-left: set-relative-height(78px);
    }
  }
}

.footer__content {
  flex: 1 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    padding: 0 4vw;
  }
}

.footer__content-col {
  //flex-basis: calc(100% / 3);

  &.left {
    text-align: left;
  }

  &.middle {
    text-align: center;
  }

  &.right {
    text-align: right;
  }
}
</style>
