/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue, js, ts, jsx, tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'consolas': ['Consolas','sans'],
                'courier': ['"Courier Prime"', 'monospace'],
                'barlow': ['"Barlow Condensed"','sans-serif'],
                'barlow-w': ['"Barlow"','sans-serif'],
                'open-sans': ['"Open Sans"'],
                'nunito': ['"Nunito"'],
            }
        },
    container: {
        center: true,
    },
    colors: {
        'default':"#090909",
        'black': "#000000",
        'white': "#FFFFFF",

        'yellow-1': "#FCF9F3",
        'yellow-2':"#F9E289",
        'yellow-3':"#F7C626",
        'yellow-4': "#F3BE19",

        'blue-1': "#F0F7FF",
        'blue-2': "#C2E6F4",
        'blue-3':"#71A4F7",
        'blue-4': "#0099DA",

        'gray-1': "#F3F3F3",
        'gray-2': "#EDEDED",
        'gray-3': "#E4E4E4",
        'gray-4': "#BFBFBF",
        'gray-5': "#929292",
        'gray-6': "#7E7E7E",
        'gray-7': "#707070",
        'gray-8': "#5E5E5E",
        'gray-9': "#515151",
        'gray-10': "#404040",
        'gray-11': "#383838",
    },
    },
    plugins: [],
}