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
              <input v-model="form.name" class="ui-input" type="text" placeholder="Your name">
            </div>
            <div class="contact-form__field">
              <input v-model="form.email" class="ui-input" type="text" placeholder="Email">
            </div>
            <div class="contact-form__field">
              <textarea v-model="form.message" class="ui-input" type="text" placeholder="Your message"></textarea>
            </div>
            <div class="contact-form__field action">
              <button class="ui-button wide" @click.prevent="submitForm()">enviar</button>
            </div>
          </div>
        </div>
        <div class="contact-form__col text">
          <h3>Amamos lo que hacemos</h3>
          <p>equipo</p>
        </div>
      </div>
    </div>

    <TheFooter class="contact-form__footer"/>
  </section>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';

export default {
  name: 'ContactFormView',
  components: {TheHeader, TheFooter},
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      }
    }
  },
  methods: {
    submitForm() {
      console.log('contacts', this.form);
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";

.contact-form__content {
  display: flex;
  justify-content: space-between;
  @media (min-width: 1024px) {
    align-items: center;
  }
  @media (max-width: 1023.98px) {
    flex-direction: column;
  }
}

.contact-form__container {
  align-items: center;
}

.contact-form__col {
  @media (min-width: 1024px) {
    max-width: 689px;
    flex-basis: 48%;
  }

  &.form {
  }

  &.text {
    position: relative;
    @media (min-width: 1024px) {
      padding-top: calc(100vh * 105 / $base-height);
      padding-left: calc(100vw * 70 / $base-content-width);
    }
    @media (max-width: 1023.98px) {
      margin-top: 7.75vh;
      padding-top: 6.15vh;
      padding-left: 17.67vw;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      background: url("@/assets/quotes.png") top center / contain no-repeat;
      @media (min-width: 1024px) {
        width: calc(100vw * 234 / $base-content-width);
        height: calc(100vh * 185 / $base-height);
      }
      @media (max-width: 1023.98px) {
        width: 29.6vw;
        height: 10.8vh;
      }
    }

    h3 {
      font-family: $font-secondary;
      font-weight: 700;
      line-height: calc(73 / 64);
      letter-spacing: -0.05em;
      color: $white;
      @media (min-width: 1024px) {
        font-size: px2rem(64px); // 3.6vw
      }
      @media (max-width: 1023.98px) {
        font-size: 3.7vh;
      }
    }

    p {
      font-weight: 700;
      line-height: 1.34;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: $orange;
      @media (min-width: 1024px) {
        font-size: 1rem;
      }
      @media (max-width: 1023.98px) {
        font-size: 2vh; // 16px
      }
    }
  }
}

.contact-form__form-inner {
}

.contact-form__title {
  font-weight: 900;
  line-height: calc(52 / 36);
  color: $white;
  @media (min-width: 1024px) {
    margin-bottom: 51px;
    font-size: px2rem(36px);
  }
  @media (max-width: 1023.98px) {
    margin-bottom: 4.5vh;
    font-size: 3.2vh;
  }
}

.contact-form__field {
  & + .contact-form__field {
    margin-top: 2vh;
  }

  &.action {
    margin-top: 4vh;

    @media (max-width: 1023.98px) {
      margin-top: calc(35 * 100vh / 812);
    }
  }
}

.contact-form__footer {
}
</style>
