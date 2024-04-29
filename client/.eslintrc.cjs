module.exports = {
  root: true,
  env: { browser: true, es2020: true, node:true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", ".css"],
  parserOptions: {
    ecmaVersion: "2021",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: { react: { version: "18.2" } },
  plugins: ["react", "react-hooks", "jsx-a11y", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-no-target-blank": "off",

  },
};
