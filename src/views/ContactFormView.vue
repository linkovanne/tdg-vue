<template>
  <section class="section contact-form">
    <TheHeader class="form-header">
      <template v-slot:left>
        <router-link :to="{name: 'service'}" class="header__go-back">back</router-link>
      </template>
      <template v-slot:middle>
        <router-link :to="{name: 'index'}" class="header__logo">
          <img src="@/assets/logo.png" alt="logo">
        </router-link>
      </template>
    </TheHeader>

    <div class="section__container contact-form__container">
      <div class="section__content contact-form__content">
        <div class="contact-form__col form">
          <div class="contact-form__form-inner">
            <h2 class="contact-form__title">Escríbenos</h2>
            <div class="contact-form__field">
              <input class="ui-input" type="text" placeholder="Your name">
            </div>
            <div class="contact-form__field">
              <input class="ui-input" type="text" placeholder="Email">
            </div>
            <div class="contact-form__field">
              <textarea class="ui-input" type="text" placeholder="Your message"></textarea>
            </div>
            <div class="contact-form__field action">
              <button class="ui-button wide">enviar</button>
            </div>
          </div>
        </div>
        <div class="contact-form__col text">
          <h3>Amamos lo que hacemos</h3>
          <p>equipo</p>
        </div>
      </div>
    </div>

    <TheFooter/>
  </section>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';

export default {
  name: 'ContactFormView',
  components: {TheHeader, TheFooter}
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";

.contact-form__content {
  display: flex;
  justify-content: space-between;
}

.contact-form__col {
  flex-basis: 50%;
  max-width: 689px;

  &.form {
  }

  &.text {
    h3 {
      font-family: 'Georgia';
      font-weight: 700;
      font-size: px2rem(64px);
      line-height: calc(73 / 64);
      letter-spacing: -0.05em;
      color: $white;
    }

    p {
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.34;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: $orange;
    }
  }
}

.contact-form__form-inner {
}

.contact-form__title {
  margin-bottom: 51px;

  font-weight: 900;
  font-size: px2rem(36px);
  line-height: calc(52 / 36);
  color: $white;
}

.contact-form__field {
  & + .contact-form__field {
    margin-top: 24px;
  }

  &.action {
    margin-top: 48px;
  }
}
</style>
