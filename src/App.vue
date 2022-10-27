<template>
  <router-view/>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  created() {
    this.getServiceList();
  },
  methods: {
    ...mapActions(['getServiceList'])
  }
}
</script>

<style lang="scss">
#app { }
</style>
