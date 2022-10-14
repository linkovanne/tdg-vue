<template>
  <section class="section contacts">
    <TheHeader>
      <template v-slot:left>
        <router-link :to="{name: 'index'}" class="ui-link">back</router-link>
      </template>
      <template v-slot:middle>
        <header-logo/>
      </template>
    </TheHeader>

    <div class="section__container contacts__container">
      centro de detailing Tdg
    </div>

    <TheFooter />
  </section>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';
import HeaderLogo from "@/components/HeaderLogo";

export default {
  name: 'ContactsView',
  components: {HeaderLogo, TheHeader, TheFooter}
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";

</style>
