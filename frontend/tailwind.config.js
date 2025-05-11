export default {
  content: [
    './index.html',           // Include the template HTML
    './src/**/*.{js,jsx}',    // Scan all JS/JSX files in src for Tailwind classes
  ],
  theme: {
    extend: {},              // Customize Tailwind theme if needed
  },
  plugins: [],               // Add plugins if needed
};