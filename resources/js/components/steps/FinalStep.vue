
<template>
<div class="max-w-sm w-full lg:max-w-full lg:flex">
    <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('https://v1.tailwindcss.com/img/card-left.jpg')" title="Woman holding a mug"></div>
    <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div class="mb-8">
        <div class="text-gray-900 font-bold text-xl mb-2">Vous êtes inscrit!</div>
        <p class="text-gray-700 text-base" v-text="props.formValues.description"></p>
      </div>
      <div class="flex items-center">
        <img class="w-10 h-10 rounded-full mr-4" src="https://v1.tailwindcss.com/img/card-left.jpg" alt="Avatar of Jonathan Reinink">
        <div class="text-sm">
          <p class="text-gray-900 leading-none">
            <strong v-text="props.formValues.firstname"></strong>
            <strong v-text="props.formValues.lastname"></strong>
          </p>
          <p class="text-gray-600" v-text="props.formValues.age + ' ans'"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
    import { onMounted } from 'vue'

    const props = defineProps(['formValues']);

    onMounted(async () => {
        let response = await axios.post('/api/user', props.formValues);
        console.log(response);
    })
</script>
