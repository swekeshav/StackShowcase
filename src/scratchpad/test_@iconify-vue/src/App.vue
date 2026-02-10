<template>
  <div class="app">
    <h1>@iconify/vue Demo</h1>
    
    <div class="icon-section">
      <h2>Basic Icons</h2>
      <Icon icon="mdi:home" />
      <Icon icon="mdi:account" />
      <Icon icon="mdi:heart" />
    </div>

    <div class="icon-section">
      <h2>Sized Icons</h2>
      <Icon icon="fa:user" :width="24" :height="24" />
      <Icon icon="fa:star" :width="32" :height="32" />
      <Icon icon="fa:heart" :width="48" :height="48" />
    </div>

    <div class="icon-section">
      <h2>Colored Icons</h2>
      <Icon icon="bi:github" color="red" :width="32" />
      <Icon icon="bi:twitter" color="blue" :width="32" />
      <Icon icon="bi:instagram" color="purple" :width="32" />
    </div>

    <div class="icon-section">
      <h2>Different Icon Sets</h2>
      <Icon icon="material-symbols:home" :width="32" />
      <Icon icon="heroicons:home" :width="32" />
      <Icon icon="carbon:home" :width="32" />
      <Icon icon="tabler:home" :width="32" />
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>

<style scoped>
.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
}

h1 {
  color: #333;
  border-bottom: 2px solid #007acc;
  padding-bottom: 0.5rem;
}

.icon-section {
  margin: 2rem 0;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 8px;
}

.icon-section h2 {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #555;
}

.icon-section :deep(svg) {
  margin: 0 0.5rem;
  vertical-align: middle;
}
</style>