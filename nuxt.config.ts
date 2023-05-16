// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon'
    ],
    app: {
        head: {
            title: "Hudalinas — Path to Righteousness",
            meta: [
                {
                    name: "description",
                    content: "Hudalinas is a powerful and enlightening literary work that explores the tenets, principles, and spiritual essence of Islam. Authored by a devout follower of the faith, this book serves as a guide for individuals seeking a deeper understanding of Islam and its profound impact on personal transformation."
                }
            ]
        }
    }
})