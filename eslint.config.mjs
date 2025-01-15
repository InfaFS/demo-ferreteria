import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals', // Configuración recomendada para Next.js
    'next/typescript', // Soporte para TypeScript en Next.js
    'plugin:prettier/recommended', // Integra Prettier con ESLint
  ),
  {
    plugins: ['prettier'], // Agrega el plugin de Prettier
    rules: {
      'prettier/prettier': 'warn', // Muestra advertencias de formato según Prettier
    },
  },
];

export default eslintConfig;
