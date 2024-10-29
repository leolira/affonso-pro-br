<script setup>
import { RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import FooterComp from './components/FooterComp.vue';

</script>
<template>
  <Navbar />
  <RouterView />
  <FooterComp />
</template>