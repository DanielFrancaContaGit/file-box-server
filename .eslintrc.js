module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    camelcase: 'off',
    '@typescript-eslint/camelcase': 'off',
    'class-methods-use-this': 'off',
    'no-useless-constructor': 'off',
    'no-console': 'off',
    'import/extensions': [0],
    'import/no-unresolved': [0],
    'import/prefer-default-export': [0],
    'no-unused-vars': [0],
  },
};
