<script setup lang="ts">
import { computed, ref } from "vue";
import { Link } from "@inertiajs/vue3";

defineProps<{
  message: string;
}>();

const count = ref(0);
function increment() {
  count.value++;
}

const double = computed(() => count.value * 2);
</script>

<template>
  <div>
    <h1 class="title">Test 4 (inertia routing test): {{ message }}</h1>
    <button @click="increment">Add</button>
    <p>Count: {{ count }}</p>
    <hr>
    <Link class="underline" href="/">Go back to Index</Link>
  </div>
</template>
