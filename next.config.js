/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate-plugin')
const nextConfig = {
    ...nextTranslate(),
    i18n: {
        locales: ['en', 'rus', 'arm'],
        defaultLocale: 'en'
    },
    reactStrictMode: false,
}
module.exports = nextConfig
