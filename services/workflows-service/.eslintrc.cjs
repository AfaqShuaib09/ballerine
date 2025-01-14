const config = require('../../packages/config/eslintrc.base.cjs');

module.exports = {
  ...config,
  extends: ['plugin:import/recommended', 'plugin:import/typescript', ...config.extends],
  parserOptions: {
    ...config.parserOptions,
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  env: {
    ...config.env,
    node: true,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
      node: true,
    },
  },
  rules: {
    'import/no-cycle': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
  },
  ignorePatterns: ['.eslintrc.cjs'],
};
