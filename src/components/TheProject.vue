<template>
  <router-link :to="{name: 'project', params: { id: 1 }}" class="the-project">
    <div class="the-project__img">
      <img src="@/assets/service/1.png" alt="img">
    </div>
    <div class="the-project__desc">
      <div class="the-project__title">project_001</div>
      <div class="the-project__text">
        <span>the future is here</span>
        <strong>Nuevo trabajo</strong>
      </div>
    </div>
    <div class="the-project__action">
      <svg width="16" height="29" viewBox="0 0 16 29" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M15.7532 15.0781L1.46462 28.7583C1.12801 29.0806 0.588481 29.0806 0.25246 28.7583C-0.0835617 28.436 -0.0841533 27.9194 0.25246 27.5977L13.9317 14.5004L0.25246 1.40359C-0.0841533 1.0813 -0.0841533 0.564718 0.25246 0.242992C0.417513 0.0849609 0.63995 0 0.855287 0C1.07122 0 1.29306 0.0787296 1.45811 0.242992L15.7467 13.9237C16.0833 14.2392 16.0833 14.762 15.7532 15.0781Z"/>
      </svg>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'TheProject'
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";

.the-project {
  display: flex;
  align-items: center;
}

.the-project__img {
  flex-basis: 50%;
}

.the-project__desc {
  padding-left: 30px;
  @media (min-width: 576px) {
    padding-right: 40px;
  }
}

.the-project__title {
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: $white;
  @media (min-width: 576px) {
    font-size: px2rem(22px);
    line-height: calc(39 / 22);
  }
  @media (max-width: 575.98px) {
    font-size: 14px;
    line-height: calc(17 / 14);
  }
}

.the-project__text {
  font-weight: 500;
  letter-spacing: 0.05em;
  color: $light-text;
  @media (min-width: 576px) {
    font-size: px2rem(18px);
    line-height: calc(24 / 18);
  }
  @media (max-width: 575.98px) {
    margin-top: px2rem(14px);
    font-size: px2rem(12px);
    line-height: calc(16 / 12);
  }

  span {
    opacity: 0.5;
  }

  strong {
    display: block;
    color: $red;
    @media (max-width: 575.98px) {
      margin-top: px2rem(14px);
    }
  }
}

.the-project__action {
  margin-top: px2rem(48px);
  color: $red;
  @media (max-width: 575.98px) {
    display: none;
  }
}
</style>
