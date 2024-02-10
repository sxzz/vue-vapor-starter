<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)

const vapor = import.meta.env.VAPOR

function inc() {
  count.value++
}
</script>

<template>
  <h1>Hello, Vue <span :class="{ del: !vapor }">Vapor</span>!</h1>
  <p>Count: {{ count }}</p>
  <button @click="inc">increase</button>
</template>

<style>
.del {
  text-decoration: line-through;
}
</style>
