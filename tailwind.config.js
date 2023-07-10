/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gray: '#5a5959',
                yellow: '#ffeaae',
                'dark-yellow': '#fcca3f',
                orange: "#f6820c",


            }
        },
    },
    plugins: [],
}



// background: #000000;
// background: #F4BD62;
// background: #F6820C;
// background: #FCCA3F;
// background: #FDE068;
// background: #FFA50E;
// background: #FFA712;
// background: #FFC24A;