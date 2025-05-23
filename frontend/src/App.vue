<script setup lang="ts">

</script>

<template>
  <!-- the width and height must always be screen maximum -->
  <div id="layout" style="width: 100vw; height: 100vh;" class="text-center text-gray-800 bg-gray-50">
    <!-- Shared layout -->
    <header>
      <h1>Site Nav Here</h1>
    </header>

    <!-- Inertia-rendered pages go here -->
    <main>
      <slot></slot>
    </main>

    <footer>Site Footer Here</footer>
  </div>
</template>