<template>
    <section class="w-full py-6">
        <div class="max-w-5xl m-auto px-4" v-if="data.length">
            <div class="p-3 px-6 rounded-lg bg-white w-fit m-auto"  v-show="verse != 9">
                <img src="~/assets/images/bismillah.jpg" class="max-w-[300px] w-full m-auto" alt="bismillah Logo">
            </div>
            <ul class="py-6 verses">
                <li class="bg-white p-6 mb-4 rounded-lg text-2xl flex flex-col" v-for="(verse, index) in data" :key="index">
                    <span class="text-end mb-3">
                        <div class="flex justify-end text-3xl">
                            <span class="order-2 text-sm p-1 px-2 h-fit rounded-full text-white bg-light-purple/80 ml-3">{{ index + 1 }}</span>
                            <span class="leading-9">{{ verse.text_madani }}</span>
                        </div>
                    </span>
                    <span class="text-start text-sm">{{ verse.translations[0].text }}</span>
                </li>
            </ul>
        </div>
        <div class="flex items-center m-auto max-w-fit  text-white" v-else>
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
            useHead({
                title: `${result.chapter.name_simple} — Hudalinas`
            });
            $fetch(`https://api.quran.com/api/v3/chapters/${verse.value}/verses?limit=${result.chapter.verses_count}&translations=21&language=en&text_type=words`).then((response) => {
                data.value = response.verses
                console.log(data.value)
            })
        });
    });
</script>