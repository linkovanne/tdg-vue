<template>
  <TheHeader/>
  <router-view/>
  <TheFooter/>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';

export default {
  components: {
    TheHeader,
    TheFooter,
  }
}
</script>

<style lang="scss">
#app { }
</style>
