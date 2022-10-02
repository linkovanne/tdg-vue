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

<style scoped>
.the-menu {
  position: absolute;
  top: 50%;
  right: 6px;
  transform: translateY(-50%);
}
</style>
