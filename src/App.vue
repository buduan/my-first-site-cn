<template>
  <!--
  👋 Hi, 欢迎来到你的第一个网站项目！

  这里是你的网站的主入口文件，
  当然，现在这里已经一切为你准备好了
  直接从 页面部分 开始吧！
  -->
  <Navigation class="mb-4 py-2 w-screen px-4" />
  <router-view />
</template>

<script setup>
import Navigation from './components/Navigation.vue'
</script>
