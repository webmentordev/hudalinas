<template>
    <section class="w-full py-12 min-h-[80vh]">
        <div class="max-w-5xl m-auto px-4">
            <h1 class="text-5xl mb-6 font-semibold text-white">Learn the Holy Quran</h1>
            <p class="mb-8 text-gray-300">The Quran, also romanized Qur'an or Koran, is the central religious text of Islam, believed by Muslims to be a revelation from God. It is organized in <b>114 chapters</b>, which consist of verses</p>
            <ul class="surah grid grid-cols-3 gap-2" v-if="data.length">
                <SurahItem :surah="surah" :id="index" v-for="(surah, index) in data" />
            </ul>
            <div class="flex items-center m-auto max-w-fit" v-else>
                <Icon class="text-5xl text-white" name="eos-icons:bubble-loading" />
                <h2 class="ml-3 text-xl font-semibold">Loading...</h2>
            </div>
        </div>
    </section>
</template>

<script setup>
    useHead({
        title: "Quran & Surahs — Hudalinas"
    });
    const data = ref([]);
    onMounted(() => {
        $fetch("https://api.quran.com/api/v3/chapters").then((response) => {
            data.value = response.chapters;
        })
    })
</script>