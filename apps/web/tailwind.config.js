/** @type {import('tailwindcss').Config} */
const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');


module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}",
    ...createGlobPatternsForDependencies(__dirname),
  ],
  preset: [require('../../tailwind.config')],
};
