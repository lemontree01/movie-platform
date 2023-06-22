module.exports = {
  ignorePatterns: ["**/.eslintrc.js"],
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  extends: ["plugin:react/recommended", "standard-with-typescript"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json"
  },
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  rules: {
    "semi": ['error', 'always'],
    "react/jsx-filename-extension": [2, {
      extensions: [".js", ".jsx", ".tsx"]
    }],
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "no-unused-vars": "warn",
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "react/prop-types": "off",
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/no-floating-promises": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false
        }
      }
    ]
  },
  overrides: [{
    files: ["*.ts", "*.mts", "*.cts"],
    rules: {
      "@typescript-eslint/explicit-function-return-type": "error"
    }
  }]
};