<template>
  <div class="home">
    <h1>Welcome to Home View</h1>
    <p>This is a basic Vue component.</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const message = ref('Hello Vue!')

</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}
</style>