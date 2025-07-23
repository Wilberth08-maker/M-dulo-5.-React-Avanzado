import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      "prettier" // Evita conflictos con prettier (reglas de formato)
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      "no-unused-vars": ["error", { varsIgnorePattern: "^[A-Z_]" }],
      // forzamos comillas dobles 
      "semi": ["error", "never"],
      "quotes": ["error", "single"],
      //fuerza usar solo minúsculas
      "react/jsx-pascal-case": ["error", { "allowAllCaps": true, }],
      // siempre usar punto y coma (en caso de conflicto con prettier)
    },
    settings: {
      react: {
        version: "detected"
      }
    },
  },
])
