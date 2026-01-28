<template>
  <div class="the-layout-box">
    <h1>home</h1>
    <project-list></project-list>
  </div>
</template>

<script setup lang="ts">
  import ProjectList from '@/views/the-project/project-list.vue';
</script>

<style scoped>
  .the-layout-box {
    width: 100%;
    height: 100%;
  }
</style>
