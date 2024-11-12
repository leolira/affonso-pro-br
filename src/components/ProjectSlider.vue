<template>
  <div class="relative w-full overflow-hidden mx-auto max-w-screen-2xl">
    <div class="flex transition-transform duration-300" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div v-for="(item, index) in items" :key="index" class="w-full flex-shrink-0 flex flex-col sm:flex-row"> <div class="w-full sm:w-1/2 p-8 bg-blue-950 text-white flex items-center">
          <div>
            <h2 class="text-2xl font-bold ml-10 mr-10">{{ item.title }}</h2>
            <p class="mt-4 text-justify ml-10 mr-10">{{ item.text }}</p>
          </div>
        </div>
        <div class="w-full sm:w-1/2">
          <img :src="item.image" alt="Image" class="object-contain w-full h-full" />
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
    title: "PROJETO DE INSTALAÇÕES ELÉTRICAS A EDIFICAÇÕES INDIVIDUAIS",
    text: "",
    image: "src/assets/img/projeto01.png",
  },
  {
    title: "PROJETO DE INSTALAÇÕES ELÉTRICAS RESIDENCIAIS MULTIFAMILIAR",
    text: "",
    image: "src/assets/img/projeto02.png",
  },
  {
    title: "PROJETO DE INSTALAÇÕES ELÉTRICAS DE MEDIÇÃO AGRUPADA OU PADRÃO DE ENTRADA INDIVIDUAL",
    text: "",
    image: "src/assets/img/projeto03.png",
  },
  {
    title: "PROJETO DE INSTALAÇÕES ELÉTRICAS COMERCIAIS",
    text: "",
    image: "src/assets/img/projeto04.png",
  },
];

items[0].text = "O projeto de instalações elétricas a edificações individuais deverá ser desenvolvido observando as recomendações das Normas: Norma NBR-5410/2004 da ABNT - Associação Brasileira de Normas Técnicas que norteia as INSTALAÇÕES ELÉTRICAS EM BAIXA TENSÃO, da Norma COELBA DIS-NOR-030 – FORNECIMENTO DE ENERGIA ELÉTRICA EM TENSÃO SECUNDÁRIA DE DISTRIBUIÇÃO A EDIFICAÇÕES INDIVIDUAIS, concessionária de Energia Elétrica do Estado da Bahia, pertencente ao grupo NEOENERGIA, e as especificações dos fabricantes dos materiais elétricos e seu modo de aplicação e utilização. O projeto elétrico é importante porque, se bem desenvolvido, deve promover conforto, segurança e economia. O projeto elétrico a edificações individuais deve: Dimensionar e quantificar a instalação, definir a localização dos pontos de tomada e iluminação, definir o trajeto dos eletrodutos, definir a distribuição dos circuitos e seus dispositivos de proteção, considerando as necessidades do cliente. As etapas para elaboração de um projeto elétrico são: Estudo preliminar, Anteprojeto, Projeto básico, Projeto executivo, Verificação e revisão."
items[1].text = "As construções de múltiplas unidades consumidoras podem ser Condomínio Fechado Horizontal, chamados de Villages ou Condomínio Fechado Vertical, chamados prédio de apartamentos ou edifício residencial. O projeto de instalações elétricas dessas unidades deverão ser desenvolvidos observando as recomendações das Normas: Norma NBR-5410/2004 da ABNT - Associação Brasileira de Normas Técnicas que norteia as INSTALAÇÕES ELÉTRICAS EM BAIXA TENSÃO, das Normas COELBA DIS-NOR-030 – FORNECIMENTO DE ENERGIA ELÉTRICA EM TENSÃO SECUNDÁRIA DE DISTRIBUIÇÃO A EDIFICAÇÕES INDIVIDUAIS e DIS-NOR-053 - FORNECIMENTO DE ENERGIA ELÉTRICA À EDIFICAÇÕES COM MÚLTIPLAS UNIDADES CONSUMIDORAS ATÉ 34,5kV, concessionária de Energia Elétrica do Estado da Bahia, pertencente ao Grupo NEOENERGIA, e as especificações dos fabricantes dos materiais/equipamentos elétricos e seu modo de aplicação e utilização. O projeto elétrico é importante porque, se bem desenvolvido, deve promover conforto, segurança e economia. O projeto de instalações elétricas de múltiplas unidades consumidoras deve: dimensionar e quantificar a instalação, definir a localização dos pontos de tomada e iluminação individuais e coletivos, definir o trajeto dos eletrodutos, definir a distribuição dos circuitos e seus dispositivos de proteção, considerando as necessidades individuais e coletivas. As etapas para elaboração de um projeto elétrico de residenciais multifamiliar são: Estudo preliminar, Anteprojeto, Projeto básico, Projeto executivo, Verificação e revisão."
items[2].text = "Os projetos de instalações elétricas de medição agrupada ou padrão de entrada individual são projetos destinados a atender a múltiplas unidades consumidoras em baixa tensão ou um consumidor individual. Os projetos de instalações elétricas de medição agrupada podem ser Condomínio Fechado Horizontal, chamados de Villages ou Condomínio Fechado Vertical, chamados prédio de apartamentos ou edifício residencial. Os projetos de padrões de entrada de medição de energia podem ser individualizados (um único consumidor) ou agrupada, várias unidades, os quais deverão atender as recomendações das Normas: Norma NBR-5410/2004 da ABNT - Associação Brasileira de Normas Técnicas que norteia as INSTALAÇÕES ELÉTRICAS EM BAIXA TENSÃO, das Normas COELBA DIS-NOR-030 – FORNECIMENTO DE ENERGIA ELÉTRICA EM TENSÃO SECUNDÁRIA DE DISTRIBUIÇÃO A EDIFICAÇÕES INDIVIDUAIS e DIS-NOR-053 - FORNECIMENTO DE ENERGIA ELÉTRICA À EDIFICAÇÕES COM MÚLTIPLAS UNIDADES CONSUMIDORAS ATÉ 34,5kV, concessionária de Energia Elétrica do Estado da Bahia, pertencente ao Grupo NEOENERGIA, e as especificações dos fabricantes dos materiais/equipamentos elétricos e seu modo de aplicação e utilização. O projeto elétrico é importante porque, se bem desenvolvido, deve promover conforto, segurança e economia. O projeto de instalações elétricas de medição agrupada ou padrão de entrada individual, deve: estabelecer a localização dos pontos de medição, dimensionar e quantificar a alimentação e proteção elétrica de cada unidade consumidora, definir o trajeto dos eletrodutos de cada unidade consumidora, considerando as necessidades individuais e coletivas. As etapas para elaboração de um projeto elétrico de medição agrupada são: Estudo preliminar, Anteprojeto, Projeto básico, Projeto executivo, Verificação e revisão."
items[3].text = "O projeto de instalações elétricas comerciais deve ser desenvolvido observando as recomendações das Normas: Norma NBR-5410/2004 da ABNT - Associação Brasileira de Normas Técnicas que norteia as INSTALAÇÕES ELÉTRICAS EM BAIXA TENSÃO, da Norma COELBA DIS-NOR-030 – FORNECIMENTO DE ENERGIA ELÉTRICA EM TENSÃO SECUNDÁRIA DE DISTRIBUIÇÃO A EDIFICAÇÕES INDIVIDUAIS, concessionária de Energia Elétrica do Estado da Bahia, pertencente ao grupo NEOENERGIA, e as especificações dos fabricantes dos materiais elétricos e seu modo de aplicação e utilização. O projeto de instalações elétricas comerciais é importante porque, se bem desenvolvido, deve promover conforto, segurança e economia. O projeto de instalações elétricas comerciais deve: Dimensionar e quantificar a instalação, definir a localização dos pontos de tomada e iluminação, definir o trajeto dos eletrodutos, definir a distribuição dos circuitos e seus dispositivos de proteção, considerando as necessidades do cliente. As etapas para elaboração de um projeto elétrico são: Estudo preliminar, Anteprojeto, Projeto básico, Projeto executivo, Verificação e revisão."

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
