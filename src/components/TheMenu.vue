<template>
<div class="the-menu">
  <menuIcon/>
</div>
</template>

<script>
import menuIcon from '@/assets/icons/menuIcon';

export default {
  name: 'TheMenu',
  components: {
    menuIcon,
  }
}
</script>

<style scoped lang="scss">
@import "src/styles/variables";

.the-menu {
  cursor: pointer;
  z-index: 1000;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  color: $orange;
}
</style>
