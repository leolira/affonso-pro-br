<script setup>
import { RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import FooterComp from './components/FooterComp.vue';

</script>
<template>

<div class="bg-blue-950">
  <Navbar />
  <RouterView />
  <FooterComp />
</div>

</template>