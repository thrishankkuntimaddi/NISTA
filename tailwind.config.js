/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./App.{js,jsx,ts,tsx}",
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}"
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                antrika: "#121417",
                obsidian: "#1A1D21",
                ash: "#E6E6E6",
                stone: "#9A9A9A",
                saffron: "#C47A2C",
                earth: "#8B3A3A",
                forest: "#3F5F4C"
            },
            fontFamily: {
                newsreader: ["Newsreader_400Regular"],
                newsreaderItalic: ["Newsreader_400Regular_Italic"],
                inter: ["Inter_400Regular"],
                interMedium: ["Inter_500Medium"],
                interBold: ["Inter_600SemiBold"]
            }
        }
    },
    plugins: []
}
