<template>
    <form class="flex flex-col space-y-3">
        <div>
            <label for="age" class="block text-sm font-medium text-gray-700">Âge</label>
            <div class="mt-1 relative rounded-md shadow-sm">
                <input type="number" name="age" id="age" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="18" v-model="props.formValues.age">
            </div>
        </div>
    </form>
</template>

<script setup>
    const props = defineProps(['formValues']);
</script>
