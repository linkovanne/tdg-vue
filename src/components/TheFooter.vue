<template>
  <footer class="footer">
    <div class="footer__container">
      <p class="footer__copyright">&copy;TDG. {{ year }}</p>
      <div class="footer__socials">
        <a href="#" class="footer__socials-link">
          <img src="@/assets/fb.svg" alt="facebook">
        </a>
        <a href="#" class="footer__socials-link">
          <img src="@/assets/inst.svg" alt="instagram">
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
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
  @media (min-width: 768px) {
    padding-top: 12px;
    //padding-bottom: 74px;
  }
  @media (min-width: add-unit($base-content-width, px)) {
    padding-bottom: add-unit($base-footer-padding-bottom, px);
  }
  @media (max-width: add-unit($base-content-width - .2, px)) {
    padding-bottom: add-unit($relative-footer-padding-bottom, vh);
  }
  @media (max-width: 767.98px) {
    padding-bottom: 38px;
  }
}

.footer__container {
  width: 100%;
  //max-width: calc(1770px + 40px);
  padding: 0 20px;
  //margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.footer__copyright {
  margin: 0;
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
  & + .footer__socials-link {
    @media (min-width: 768px) {
      padding-left: 78px;
    }
  }
}
</style>
