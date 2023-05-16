<template>
    <NuxtLink :to='`/surah/${surah.id}`' class="font-semibold hover:shadow-lg transition-all hover:-translate-y-2 p-4 mr-3 rounded-[20px] mb-2 cursor-pointer">
        <div class="flex justify-between items-center mb-3">
            <span class="p-1 px-3 rounded-full item text-white">{{ id + 1 }}</span>
            <span class="text-2xl">{{ surah.name_arabic }}</span>
        </div>
        <h3 class="font-bold">{{ surah.name_simple }}</h3>
        <div class="flex justify-between items-center text-sm">
            <span>{{ surah.translated_name.name }}</span>
            <span>{{ surah.verses_count }} Ayah</span>
        </div>
    </NuxtLink>
</template>

<script setup>
    defineProps(['surah', 'id'])
</script>