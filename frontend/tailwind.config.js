/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#181818',      // Primary Background (Darker and softer for less strain on eyes)
          secondary: '#30343F',       // Secondary Background (Soft neutral for subtle contrast)
          text: '#E8E6E3',            // Primary Text (Off-white for reduced glare)
          'text-secondary': '#A8A9AD', // Secondary Text (Muted gray for secondary information)
          accent: '#E94560',          // Accent Color (A vibrant pinkish-red for a modern pop)
          highlight: '#00BFA6',       // Highlight Color (Slightly softer teal for interactive elements)
          border: '#3E4149',          // Borders / Dividers (Slightly lighter gray for subtle dividers)
          error: '#E05353',           // Error Color (A bold red that stands out without being harsh)
          success: '#3AD29F',         // Success Color (A bright green with better contrast)
          hover: '#252A34',           // Hover Effect (Soft dark gray for depth and interaction feedback)
          
        },
      },
    },
  },
  plugins: [],
};


