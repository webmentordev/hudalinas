<template>
    <section class="w-full py-6">
        <div class="max-w-5xl m-auto px-4" v-if="data.length">
            <img src="@/assets/images/bismillah.jpg" v-show="verse != 9" class="max-w-[300px] w-full m-auto" alt="bismillah Logo">
            <ul class="py-6 verses">
                <li class="bg-gray-50 p-6 mb-2 rounded-lg text-2xl flex flex-col" v-for="(verse, index) in data" :key="index">
                    <span class="text-end mb-3">{{ verse.text_madani }}</span>
                    <span class="text-start text-sm">{{ verse.translations[0].text }}</span>
                </li>
            </ul>
        </div>
        <div class="flex items-center m-auto max-w-fit" v-else>
            <Icon class="text-5xl" name="eos-icons:bubble-loading" />
            <h2 class="ml-3 text-xl font-semibold">Loading...</h2>
        </div>
    </section>
</template>

<script setup>
    const route = useRoute();
    const data = ref([]);
    const verse = ref(null);
    verse.value = route.params.chapter;
    onMounted(() => {
        $fetch(`https://api.quran.com/api/v3/chapters/${verse.value}`).then((result) => {
            $fetch(`https://api.quran.com/api/v3/chapters/${verse.value}/verses?limit=${result.chapter.verses_count}&translations=21&language=en&text_type=words`).then((response) => {
                data.value = response.verses
            })
        })
    })
</script>