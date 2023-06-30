/** @type {import("prettier").Config} */
module.exports = {
  singleQuote: true,
  semi: false,
  trailingComma: 'all',
  printWidth: 80,
  tabWidth: 2,
  arrowParens: 'always',
  endOfLine: 'auto',
  plugins: ['prettier-plugin-tailwindcss'],
}
