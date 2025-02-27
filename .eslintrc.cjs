const { init } = require('@fullstacksjs/eslint-config/init');

module.exports = init({
  modules: {
    auto: true,
    esm: true,
    typescript: {
      parserProject: ['./tsconfig.eslint.json'],
      resolverProject: ['./tsconfig.json'],
    },
    react: true,
    tailwind: true,
    next: true,
  },
  rules: {
    '@typescript-eslint/no-useless-template-literals': 'off',
    '@typescript-eslint/prefer-promise-reject-errors': 'off',
    '@typescript-eslint/object-curly-spacing': 'off',
    'import/no-cycle': 'off',
  },
});
