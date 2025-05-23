<script setup lang="ts">
defineProps<{
  message: string
}>()
</script>

<template>
  <div class="greetings">
    <h2 class="green">{{ message }}</h2>
    <h3 class="text-center">
      <p class="text-center">
        You’ve successfully created a project with <span>
          <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
          <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
        </span>
      </p>
    </h3>
  </div>
</template>
