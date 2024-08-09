/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
module.exports = {
    plugins: [
        plugin(function ({addUtilities}) {
            addUtilities({
                '.myBackdrop': {
                    /* From https://css.glass */
                    'background': 'rgba(255, 255, 255, 0.06)',
                    'border-radius': '16px',
           ' box-shadow': '0 4px 30px rgba(0, 0, 0, 0.1)',
            'backdrop-filter': 'blur(0.9px)',
            '-webkit-backdrop-filter': 'blur(0.9px)',
            'border': '1px solid rgba(255, 255, 255, 0.3)',
                },
                '.greenShadow': {
                    '-webkit-box-shadow': 'inset 5px -61px 146px -48px rgb(24, 71, 33)',
                    '-moz-box-shadow': 'inset 5px -61px 146px -48px rgb(24, 71, 33)',
                    'box-shadow': 'inset 10px -61px 146px -48px rgb(24, 71, 33)',
                    'border': '1px solid rgba(255, 255, 255, 0.20)',
                },
                '.myBorderRadius': {
                    'border': '1px solid rgba(255, 255, 255, 0.20)',
                }

            })
        })
    ],
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
        fontFamily: {}
    },

}
