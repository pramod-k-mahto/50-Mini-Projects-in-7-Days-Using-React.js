// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adjust the path according to your project structure
  ],
  theme: {
    extend: {
      keyframes: {
        goIn: {
          '0%': { transform: 'translate(-50%, -50%) rotate(120deg)' },
          '30%': { transform: 'translate(-50%, -50%) rotate(-20deg)' },
          '60%': { transform: 'translate(-50%, -50%) rotate(10deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
        },
        goOut: {
          '0%': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          '60%': { transform: 'translate(-50%, -50%) rotate(20deg)' },
          '100%': { transform: 'translate(-50%, -50%) rotate(-120deg)' },
        },
        shake: {
          '0%': { transform: 'rotate(-5deg)' },
          '60%': { transform: 'rotate(5deg)' },
          '100%': { transform: 'rotate(-5deg)' },
        },
        hide: {
          '0%': { transform: 'translate(-50%, -50%) scale(1)' },
          '100%': { transform: 'translate(-50%, -50%) scale(0)' },
        },
        show: {
          '0%': { transform: 'translate(-50%, -50%) scale(0)' },
          '30%': { transform: 'translate(-50%, -50%) scale(1.4)' },
          '100%': { transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        goIn: 'goIn 0.5s ease-in-out',
        goOut: 'goOut 0.5s ease-in-out',
        shake: 'shake 1s ease infinite',
        hide: 'hide 0.2s ease-out',
        show: 'show 0.2s ease-out',
      },
    },
  },
  plugins: [],
}
