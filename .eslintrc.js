module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  root: true,
  env: {
    node: true,
    es2022: true
  },
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'max-len': [
      2,
      80,
      4,
      {
        ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
        ignoreUrls: true
      }
    ],
    indent: [0, 2],
    semi: [1, 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0
      }
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'object-shorthand': ['error', 'always']
  }
};
