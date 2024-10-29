<template>
  <div class="relative w-full overflow-hidden">
    <div class="flex transition-transform duration-300" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(item, index) in items" :key="index" class="w-full flex-shrink-0 flex">
        <div class="w-1/2 p-8 bg-blue-950 text-white flex items-center">
          <div>
            <h2 class="text-2xl font-bold">{{ item.title }}</h2>
            <p class="mt-4">{{ item.text }}</p>
          </div>
        </div>
        <div class="w-1/2">
          <img :src="item.image" alt="Image" class="object-cover w-full h-full" />
        </div>
      </div>
    </div>

    <button
      @click="prevSlide"
      class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
    >
      &#10094;
    </button>
    <button
      @click="nextSlide"
      class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2"
    >
      &#10095;
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const currentIndex = ref(0);
const items = [
  {
    title: "Projeto 1",
    text: "Texto para descrever o projeto.",
    image: "https://via.placeholder.com/400",
  },
  {
    title: "Projeto 2",
    text: "Texto para descrever o projeto.",
    image: "https://via.placeholder.com/400",
  },
  {
    title: "Projeto 3",
    text: "Texto para descrever o projeto.",
    image: "https://via.placeholder.com/400",
  },
  {
    title: "Projeto 4",
    text: "Texto para descrever o projeto.",
    image: "https://via.placeholder.com/400",
  },
];

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % items.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + items.length) % items.length;
};
</script>

<style scoped>
/* Estilos adicionais para garantir que o slider funcione corretamente */
.flex {
  display: flex;
  width: 100%; /* O container de slides ocupa toda a largura */
}

.flex > .w-full {
  width: 100%; /* Cada slide ocupa 100% da largura visível */
}
</style>
