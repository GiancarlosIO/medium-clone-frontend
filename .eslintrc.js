const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  parser: 'typescript-eslint-parser',
  extends: [
    'airbnb',
    'prettier',
    "typescript",
    "typescript/react",
    "typescript/prettier"
  ],
  plugins: ['import', 'prettier', 'typescript', 'react', 'jsx-a11y'],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      "experimentalObjectRestSpread": true,
      "impliedStrict": true,
      "classes": true,
      jsx: true
    }
  },
  rules: {
    'prettier/prettier': ['error', prettierOptions],
    "no-param-reassign": [
      2,
      {
        "props": false
      }
    ],
    "no-nested-ternary": "warn",
    "newline-after-var": [
      "error",
      "always"
    ],
    "no-underscore-dangle": "off",
    "no-console": "off",
    "max-len": 0,
    "react/no-unused-prop-types": 1,
    "import/prefer-default-export": 0,
    "import": 0,
    "func-names": 0,
    "space-before-function-paren": 0,
    "comma-dangle": 0,
    "import/extensions": 0,
    "consistent-return": 0,
    "prefer-const": [
      "error",
      {
        "destructuring": "all"
      }
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [
          ".js",
          ".jsx",
          '.ts',
          '.tsx'
        ]
      }
    ],
    "react/prop-types": [
      1,
      {
        "ignore": [
          "context",
          "tracking"
        ]
      }
    ],
    "react/no-array-index-key": 1,
    "jsx-a11y/no-static-element-interactions": "off",
    "react/sort-comp": [
      0,
      {
        "order": [
          "static-methods",
          "lifecycle",
          "everything-else",
          "render"
        ]
      }
    ],
    "react/display-name": 1
    // 'arrow-body-style': [2, 'as-needed'],
    // 'class-methods-use-this': 0,
    // 'comma-dangle': [2, 'always-multiline'],
    // 'import/imports-first': 0,
    // 'import/newline-after-import': 0,
    // 'import/no-dynamic-require': 0,
    // 'import/no-extraneous-dependencies': 0,
    // 'import/no-named-as-default': 0,
    // 'import/no-unresolved': 2,
    // 'import/no-webpack-loader-syntax': 0,
    // 'import/prefer-default-export': 0,
    // indent: [
    //   2,
    //   2,
    //   {
    //     SwitchCase: 1,
    //   },
    // ],
    // 'jsx-a11y/aria-props': 2,
    // 'jsx-a11y/heading-has-content': 0,
    // 'jsx-a11y/label-has-associated-control': [
    //   2,
    //   {
    //     // NOTE: If this error triggers, either disable it or add
    //     // your custom components, labels and attributes via these options
    //     // See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
    //     controlComponents: ['Input'],
    //   },
    // ],
    // 'jsx-a11y/label-has-for': 0,
    // 'jsx-a11y/mouse-events-have-key-events': 2,
    // 'jsx-a11y/role-has-required-aria-props': 2,
    // 'jsx-a11y/role-supports-aria-props': 2,
    // 'max-len': 0,
    // 'newline-per-chained-call': 0,
    // 'no-confusing-arrow': 0,
    // 'no-console': 1,
    // 'no-unused-vars': 2,
    // 'no-use-before-define': 0,
    // 'prefer-template': 2,
    // 'react/destructuring-assignment': 0,
    // 'react/jsx-closing-tag-location': 0,
    // 'react/forbid-prop-types': 0,
    // 'react/jsx-first-prop-new-line': [2, 'multiline'],
    // 'react/jsx-filename-extension': 0,
    // 'react/jsx-no-target-blank': 0,
    // 'react/jsx-uses-vars': 2,
    // 'react/require-default-props': 0,
    // 'react/require-extension': 0,
    // 'react/self-closing-comp': 0,
    // 'react/sort-comp': 0,
    // 'redux-saga/no-yield-in-race': 2,
    // 'redux-saga/yield-effects': 2,
    // 'require-yield': 0,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack/config/prod.js',
      },
    },
  },
};