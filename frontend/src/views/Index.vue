<script setup lang="ts">
import { computed, ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
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
  <div class="text-violet-900 text-center">
    <!-- Inertia's <Link> component -->
    <h2>Test 1 (Inertia test): {{ message }}</h2>
    <hr>
    <h2>Test 2 (Reactive UI test):</h2>
    <p>Click on the button to change a value on the page without page refresh.</p>
    <button class="text-gray-500 bg-cyan-500 px-3 py-2" @click="increment">Add</button>
    <p>Count: {{ count }}</p>
    <hr>
    <p>HelloWorld component:</p>
    <HelloWorld message="Vue components work too!" />
    <hr>
    <h2>Test 3: Images</h2>
    <p>First image is within the public directory. Second image is within the
      src directory.</p>
    <img class="w-44 inline-block" src="/Mavis.jpg" alt="Mavis from fairytail" title="Image within public directory" />
    <img class="w-44 inline-block" src="@/assets/zeref_backview.jpg" alt="Vue Logo"
      title="Image within src directory" />
    <hr>
    <h2>Test 4: Inertia SPA Routing test</h2>
    <Link class="underline" href="/about">Click here to go to the About page for test 4 (inertia routing test)</Link>
  </div>
</template>
