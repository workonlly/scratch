// tailwind.config.js

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Adjust this to match your project structure
    './components/**/*.{js,ts,jsx,tsx}',
    // etc.
  ],
  
  // ADD THIS SAFELIST BLOCK
  safelist: [
    {
      pattern: /^(ani|ani2|yo)$/, // Safelists your keyframe animation names
    },
  ],

  theme: {
    extend: {
      // You can also define your keyframes here for better organization
      keyframes: {
        ani: {
          'from': { maskPosition: '100% 0' },
          'to': { maskPosition: '0 0' },
        },
        ani2: {
          'from': { maskPosition: '0 0' },
          'to': { maskPosition: '100% 0' },
        },
        yo: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        }
      },
      animation: {
        'sprite-forward': 'ani 0.7s steps(22) forwards',
        'sprite-reverse': 'ani2 0.7s steps(22) forwards',
        'bobble': 'yo 0.7s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}