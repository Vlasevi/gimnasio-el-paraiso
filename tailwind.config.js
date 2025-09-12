/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'nunito': ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        gimpa: {
          // Colores extraídos del escudo
          "primary": "#3b4aa0",      // Azul del header del escudo (más fiel al original)
          "secondary": "#2d3561",    // Azul más oscuro para variaciones
          "accent": "#52b455",       // Verde del escudo (más saturado)
          "neutral": "#2a2a2a",      // Negro del borde
          "base-100": "#ffffff",     // Blanco del texto y fondo
          "base-200": "#f8f9fa",     // Gris muy claro para fondos alternativos
          "base-300": "#e9ecef",     // Gris claro para bordes
          
          // Colores complementarios inspirados en la bandera
          "info": "#ffcd3c",         // Amarillo de la bandera colombiana
          "success": "#52b455",      // Verde del escudo
          "warning": "#ff6b35",      // Naranja cálido
          "error": "#dc3545",        // Rojo de la bandera
          
          // Colores adicionales para mayor versatilidad
          "--primary-light": "#5a6bb8",
          "--primary-dark": "#2d3884",
          "--accent-light": "#6bc46e",
          "--accent-dark": "#3d8b40",
        },
      },
    ],  
  }
}