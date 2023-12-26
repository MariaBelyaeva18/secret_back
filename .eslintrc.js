module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'import',
  ],
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
  ],
  root: true,
  env: {
    node: true,
  },
  ignorePatterns: ['.eslintrc.js', '*.model.ts', '*.schema.ts', 'ip.validation.ts'],
  rules: {
    "import/prefer-default-export": "off",
    "max-classes-per-file": ["error", 3],
    "no-useless-constructor": "off",
    "dot-notation": "off",
    "camelcase": "off",
    "import/no-cycle": "off",
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
    ],
    "indent": ["error", 2, {
      "SwitchCase": 1,
      "ignoredNodes": ["PropertyDefinition"]
    }],
    "semi": "off" ,
    "@typescript-eslint/semi": [ "error" ],
    "import/no-extraneous-dependencies": "warn",
    "class-methods-use-this": "off",
    "object-curly-newline": "warn",
    "no-empty-function": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-var-requires": "warn"
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/named": "off",
    "import/resolver": {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    }
  }
};

