<template>
    <div class="mx-auto max-w-screen-2xl">
        <form class="mt-20 ml-20 mb-20 mr-20">
            <div class="border-b border-gray-900/10 pb-12">
                <h2 class="text-3xl font-semibold leading-7 text-gray-900">Contato</h2>
                <p class="mt-1 text-sm leading-6 text-gray-600">Preencha os campos e entre em contato</p>

                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-1">
                        <div class="sm:col-span-2">
                            <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Nome</label>
                            <div class="mt-2">
                            <input type="text" name="name" id="name" autocomplete="given-name" class="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm pl-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                            <div class="mt-2">
                            <input id="email" name="email" type="email" autocomplete="email" class="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm pl-2 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <label for="subject" class="mt-2 block text-sm font-medium leading-6 text-gray-900">Assunto</label>
                            <div class="mt-2">
                            <input type="text" name="subject" id="subject" autocomplete="subject" class="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 pl-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <label for="content" class="mt-2 block text-sm font-medium leading-6 text-gray-900">Mensagem</label>
                            <div class="mt-2">
                                <textarea id="mensagem" name="mensagem" rows="3" class="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 pl-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />                    </div>
                        </div>
                    </div>
                        <div class="mt-6 flex items-center justify-start gap-x-6">
                            <button type="submit" class="rounded-md bg-blue-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Enviar</button>
                        </div>
                </div>
        </form>
    </div>
  
</template>
<script setup>
</script>