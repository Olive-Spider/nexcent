/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#ff0000',
      'secondary': '#263238',
      'info': '#2194f3',
      'neutral': {
        black: '#263238',
        D_Grey: '#4D4D4D',
        Grey: '#717171',
        L_Grey: '#89939E',
        Grey_blue: '#ABBED1',
        Silver: '#F5F7FA',
        White: '#FFFFFF',
      },
      'Color-Shade': {
        Shade_1: '#43A046',
        Shade_2: '#CD5C5C',
        Shade_3: '#DC143C',
        Shade_4: '#B22222',
        Shade_5: '#8B0000',
      },
      'Color-Tint': {
        Tint_1: '#66BB69',
        Tint_2: '#81C784',
        Tint_3: '#A5D6A7',
        Tint_4: '#C8E6C9',
        Tint_5: '#E8F5E9',
      },
      'Action': {
        Warning: '#FBC02D',
        Error: '#E53835',
        Success: '#2E7D31',
      }
    },
    extend: {},
  },
  plugins: [],
}

