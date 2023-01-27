<template>
  <div>
    {{ counter }}
  </div>
  <button @click="addCounter">+1</button>
  <a href="https://www.baidu.com">我是百度啊</a>
  <RouterLink to="/home"> 我是home </RouterLink>
  <RouterLink to="/about"> 我是about </RouterLink>
  <RouterView />
</template>

<script setup>
import { ref } from "vue";
const counter = ref(999);
function addCounter() {
  counter.value += 1;
}
</script>

<style lang="scss" scoped></style>
