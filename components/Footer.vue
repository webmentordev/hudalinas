<template>
    <footer class="text-center py-6">
        <p class="text-sm text-gray-600">{{ date }} &copy; Hudalinas | Powered by <Icon class="text-5xl mx-2 -mt-1" name="logos:nuxt" /> | Created by <span class="hover:underline font-semibold underline" target="_blank">Ahmer</span></p>
    </footer>
</template>

<script setup>
    const date = new Date().getFullYear();
</script>