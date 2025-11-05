<template>
  <Column align="center" class="mt-20">
    <!-- 
    ❗️这里是头像图片
    你可以把 src 的地址，换成你自己的头像地址
    例如：https://github.com/xiaoook.png
    ----------------------------------
    你也可以把图片移动到 /assets 文件夹下，保存为avatar.png
    然后使用本地路径引用，例如：src="@/assets/avatar.png"
    tip: 在代码编辑页面中，选择文件后按“Enter”键可以重命名
    -->
    <img
      class="size-36 rounded-2xl border-2 border-transparent transition-all hover:border-blue-100"
      src="https://github.com/xiaoook.png"
    />

    <!-- 
    ❗️这里是一个大标题
    你可以修改这里的文案 也可以修改样式 例如字体大小 颜色 等等
    ----------------------------------
    1️⃣ 在 class 对应的引号中 修改 / 添加 text-颜色名-亮度，例如 text-red-500 代表红色
    2️⃣ 也可以修改大小 text-大小值 例如 text-4xl 代表 4xl 大小
    共有 xs sm base lg xl 2xl 3xl 4xl 5xl 6xl 共七个等级 可自行尝试
    -->
    <h1 class="mt-8">👋 Hi, 这里是肖遥</h1>
    <p class="text-2xl font-light">这是一个我的个人网站</p>
    <!-- <a href="https://github.com/xiaoook">Github</a> -->
    

      

    <!--
    ⚠️ 如果想修改局部文案，可以用<span>标签包裹起来
    例如下面的代码:
    这是一个<span class="text-red-500">红色</span>的文本
    -->
  </Column>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
const message = ref('Hello Vue!')
</script>

<style scoped></style>
