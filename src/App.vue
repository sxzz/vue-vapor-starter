<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)

function inc() {
  count.value++
}
</script>

<template>
  <h1>Hello, Vue Vapor!</h1>
  <p>Count: {{ count }}</p>
  <button @click="inc">increase</button>
</template>
