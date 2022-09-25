<template>
  <section class="section index">
    <div class="section__container index__container">
      <div class="index__action">
        <a href="#" class="ui-button">Amamos lo que hacemos</a>
      </div>
      <h2 class="index__title">Cada coche tiene más de una vida</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexView',
}
</script>

<style scoped lang="scss">
.index {
  position: relative;
  display: flex;
  align-items: flex-end;
  background: url("@/assets/index/bgr.png") top center / cover no-repeat;
  @media (min-width: 768px) {
    padding-bottom: 160px;
  }
  @media (max-width: 767.98px) {
    padding-bottom: 123px;
  }

  &:before {
    content: '';
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(261.97deg, rgba(32, 33, 33, 0.49) 29.83%, rgba(32, 33, 33, 0.7) 59.68%);
  }
}

.index__container {
  position: relative;
  width: 100%;
  max-width: calc(1784px + 40px);
  padding: 0 20px;
  margin: 0 auto;
}

.index__action {
}

.index__title {
  margin: 14px 0 0;
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;
  @media (min-width: 1380px) {
    font-size: 87px;
  }
  @media (min-width: 1024px) and (max-width: 1379.98px) {
    font-size: 64px;
  }
  @media (min-width: 768px) and (max-width: 1023.98px) {
    font-size: 32px;
  }
}
</style>
