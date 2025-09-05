 /** @type {import('tailwindcss').Config} */
export default {
   content: ["index.html"],
   theme: {
     extend: {
       colors: {
        text: "hsl(0, 0%, 98%)",
        background: "#011627",
        primary: "#FF3366",
        secondary: "hsl(243, 100%, 93%)",
        accent: "#20A4F3",
      },
      fontFamily:{
        primary:['Ubuntu','sans-serif'],
        secondary:['Poppins','sans-serif']
      },
       boxShadow: {
        'white-shadow': '0px 5px 15px rgba(255, 255, 255, 0.35)',
      },
     },
   },
   plugins: [
   ],
 }