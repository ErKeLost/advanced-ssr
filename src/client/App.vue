<template>
  <div>
    {{ counter }}
  </div>
  <button @click="addCounter">+1</button>
  <a href="www.baidu.com" />
</template>

<script setup>
import { ref } from "vue";
const counter = ref(999);
function addCounter() {
  counter.value += 1;
}
</script>

<style lang="scss" scoped></style>
