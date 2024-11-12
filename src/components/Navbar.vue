<script setup>
import { RouterLink } from 'vue-router';
import logo from "@/assets/img/icon.png"
</script>
<template>
  <div class="mx-auto max-w-screen-2xl">
    <nav class="bg-blue-950 border-blue-900 py-4">
      <div class="flex flex-col md:flex-row justify-between items-center px-5">
        <div class="flex items-start space-x-4 mb-4 md:mb-0">
          <img class="size-10" :src="logo" alt="logo" />
          <div class="flex flex-col">
            <h1 class="text-xl font-black text-white">Affonso Alves Filho</h1>
            <h2 class="text-amber-400 font-bold">Projetos Elétricos</h2>
          </div>
        </div>
        
        <div class="flex flex-wrap justify-center md:justify-end space-x-4">
          <RouterLink to="/" class="text-white font-bold hover:bg-amber-400 hover:text-white rounded px-3">Início</RouterLink>
          <RouterLink to="/acervo" class="text-white font-bold hover:bg-amber-400 hover:text-white rounded px-3">Acervo</RouterLink>
          <RouterLink to="/downloads" class="text-white font-bold hover:bg-amber-400 hover:text-white rounded px-3">Downloads</RouterLink>
          <a 
                href="http://lattes.cnpq.br/6348129777947369"
                target="_blank"
                rel="noopener noreferrer"
                class="text-white font-bold hover:bg-amber-400 hover:text-white rounded px-3"
              >Lattes</a>

          <RouterLink to="/contato" class="text-white font-bold hover:bg-amber-400 hover:text-white rounded px-3">Contato</RouterLink>
        </div>
      </div>
    </nav>
  </div>
  

</template>