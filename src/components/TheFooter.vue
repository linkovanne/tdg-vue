<template>
  <footer class="footer">
    <div class="footer__container">
      <p class="footer__copyright">©TDG. 2022</p>
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
  name: 'TheFooter'
}
</script>

<style scoped lang="scss">
.footer {
  z-index: 99;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  @media (min-width: 768px) {
    padding-top: 67px;
    padding-bottom: 74px;
  }
  @media (max-width: 767.98px) {
    padding-bottom: 38px;
  }
}

.footer__container {
  width: 100%;
  max-width: calc(1770px + 40px);
  padding: 0 20px;
  margin: 0 auto;

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
