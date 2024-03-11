/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins"]
      }
    },
    animation: {
      shine: "shine 2s linear infinite"
    },
    keyframes: {
      shine: {
        from: {
          backgroundPosition: "0 0"
        },
        to: {
          backgroundPosition: "-200% 0"
        }
      }
  }
  },
  plugins: [
    function({ addBase }: { addBase: (styles: any) => void }) {
      addBase({
        '::-webkit-scrollbar': {
          width: '10px',
        },
        '::-webkit-scrollbar-track': {
          background: '#040404',
        },
        '::-webkit-scrollbar-thumb': {
          background: '#5B7AC4',
        },
        '::-webkit-scrollbar-thumb:hover': {
          background: '#152D53',
        },
      })
    },
  ]
}