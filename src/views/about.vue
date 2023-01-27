<template>
  <div>
    <div>
      {{ counter }}
    </div>
    <button @click="addCounter">+1</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useCounterStore } from "../store/counter";
import { storeToRefs } from "pinia";
const counterStore = useCounterStore();
const { counter } = storeToRefs(counterStore);
function addCounter() {
  counter.value += 1;
}
</script>

<style lang="scss" scoped></style>
