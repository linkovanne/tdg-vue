<template>
  <section class="section contacts">
    <TheHeader>
      <template v-slot:left>
        <router-link :to="{name: 'index'}" class="contacts-gallery__go-back">back</router-link>
      </template>
      <template v-slot:middle>
        <router-link :to="{name: 'index'}" class="contacts-header__logo">
          <img src="@/assets/logo.png" alt="logo">
        </router-link>
      </template>
    </TheHeader>

    <div class="section__container contacts__container">
      centro de detailing Tdg
    </div>
  </section>
</template>

<script>
import TheHeader from '@/components/TheHeader';

export default {
  name: 'ContactsView',
  components: {
    TheHeader,
  }
}
</script>

<style scoped lang="scss">
.contacts-gallery__go-back {
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.5em;
  text-transform: uppercase;
  text-decoration: none;
  color: rgba(255, 255, 255, .5);
}

.contacts-header__logo {
  @media (max-width: 767.98px) {
    max-width: 162px;
  }
}
</style>
