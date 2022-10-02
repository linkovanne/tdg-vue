<template>
  <router-view/>
  <TheFooter/>
</template>

<script>
import TheFooter from '@/components/TheFooter';

export default {
  components: {
    TheFooter,
  }
}
</script>

<style lang="scss">
#app { }
</style>
