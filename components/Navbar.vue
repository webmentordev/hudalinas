<template>
    <nav class="w-full sticky top-0 left-0 bg-white bg-opacity-60 backdrop-blur-md border-b border-gray-100 z-50">
        <div class="max-w-5xl m-auto py-3 px-4 flex items-center justify-between">
            <nuxt-link to="/" class="flex items-center">
                <img src="@/assets/images/quran.png" width="50" alt="Quran Logo">
                <h3 class="ml-3 text-xl mt-3">Hudalinas</h3>
            </nuxt-link>
            <ul class="flex items-center font-semibold">
                <nuxt-link class="ml-7" to="/">Home</nuxt-link>
                <nuxt-link class="ml-7" to="/">About</nuxt-link>
                <nuxt-link class="ml-7" to="/quran">Quran</nuxt-link>
            </ul>
        </div>
    </nav>
</template>