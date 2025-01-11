<script setup>
import SiteNavigation from "@/components/SiteNavigation.vue";
import Home from "@/pages/Home.vue";
</script>

<template>
   <div class="tw-w-full tw-bg-weather-primary">
      <SiteNavigation />

      <router-view />
   </div>
</template>

<style scoped></style>
