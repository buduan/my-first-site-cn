<template>
  <Row align="center" class="mt-4">
    <router-link
      to="/"
      class="py-1 px-2 bg-transparent hover:bg-slate-100 rounded-lg flex flex-row items-center gap-1"
      active-class="font-bold bg-slate-50"
      ><Icon icon="solar:home-2-bold-duotone" />首页</router-link
    >
    <router-link
      to="/about"
      class="py-1 px-2 bg-transparent hover:bg-slate-100 rounded-lg flex flex-row items-center gap-1"
      active-class="font-bold bg-slate-50"
      ><Icon icon="solar:info-circle-bold-duotone" />关于我</router-link
    >
    <router-link
      to="/favorite"
      class="py-1 px-2 bg-transparent hover:bg-slate-100 rounded-lg flex flex-row items-center gap-1"
      active-class="font-bold bg-slate-50"
      ><Icon icon="solar:star-bold-duotone" />我的兴趣</router-link
    >
  </Row>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>

<style scoped>
a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  text-decoration: none;
  color: inherit;
}

a:visited {
  color: inherit;
}
</style>
