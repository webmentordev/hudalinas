<template>
    <footer class="text-center py-6">
        <p class="text-sm text-gray-200">{{ date }} &copy; Hudalinas | Powered by <Icon class="text-3xl mx-2 -mt-1" name="logos:nuxt-icon" /></p>
    </footer>
</template>

<script setup>
    const date = new Date().getFullYear();
</script>