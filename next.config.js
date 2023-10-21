/** @type {import('next').NextConfig} */
const nextConfig = {
        content: [
          './pages/**/*.{js,ts,jsx,tsx}',
          './components/**/*.{js,ts,jsx,tsx}',
          './app/**/*.{js,ts,jsx,tsx}',
        ],
        images: {
          domains: ["uploads-ssl.webflow.com", "res.cloudinary.com"],
        },
        theme: {
          extend: {
            fontFamily: {
              sans: ['var(--font-inter)'],
              mono: ['var(--font-roboto-mono)'],
            },
          },
        },
        plugins: [],
}

module.exports = nextConfig
