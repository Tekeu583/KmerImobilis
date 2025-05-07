/** @type {import('tailwindcss').Config} */
module.exports = {  // <-- Remplacez 'export default' par 'module.exports'  content: [],
  content: [
    "./resources/**/*.blade.php", // Toutes les vues Blade
    "./resources/js/**/*.{js,jsx,ts,tsx}",
    "./storage/framework/views/*.php",    
    "../../vendor/laravel/.../*.blade.php",
  ],
  // 2. Activation du dark mode (class-based)
  darkMode: 'class', // Utilisez 'dark' class dans <html>
  theme: {
    extend: {
      colors: {
        brown: {
          600: '#7A3D12', // Couleur marron pour l'état actif
          700: '#8B4513',  // Couleur marron par défaut
          800: '#8c481d', // Nouvelle teinte marron sombre
        }
    },
  },
  plugins: [require('tailwindcss-animate')],
  corePlugins: {
    preflight: true, // Active le reset CSS de Tailwind
  }
}

}