<template>
    <form class="flex flex-col space-y-3">
        <div>
            <label for="firstname" class="block text-sm font-medium text-gray-700">Prénom</label>
            <div class="mt-1 relative rounded-md shadow-sm">
                <input type="text" name="firstname" id="firstname" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Jean" v-model="props.formValues.firstname">
            </div>
        </div>
        <div>
            <label for="lastname" class="block text-sm font-medium text-gray-700">Nom de famille</label>
            <div class="mt-1 relative rounded-md shadow-sm">
                <input type="text" name="lastname" id="lastname" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Jean" v-model="props.formValues.lastname">
            </div>
        </div>
    </form>
</template>

<script setup>
    const props = defineProps(['formValues']);
</script>
