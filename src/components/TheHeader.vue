<template>
  <header class="header">
    <div class="header__container">
      <a href="#" class="header__logo">
        <img src="@/assets/logo.png" alt="logo">
      </a>
      <nav class="header__nav">
        <router-link :to="{name: 'contacts'}" href="" class="header__nav-link">contactos</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>

<style scoped lang="scss">
.header {
  z-index: 99;
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  @media (min-width: 768px) {
    padding-top: 85px;
  }
  @media (max-width: 767.98px) {
    padding-top: 62px;
  }
}

.header__container {
  width: 100%;
  max-width: calc(1770px + 40px);
  padding: 0 20px;
  margin: 0 auto;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 767.98px) {
    flex-wrap: wrap;
  }
}

.header__logo {
}

.header__nav {
}

.header__nav-link {
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.5em;
  text-transform: uppercase;
  text-decoration: none;
  color: #FFFFFF;
}
</style>
