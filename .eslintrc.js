module.exports = {
  parser: "@babel/eslint-parser",
  extends: ["eslint:recommended", "prettier", "plugin:react/recommended"],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  rules: {
    "prettier/prettier": "error",
    // suppress errors for missing 'import React' in files
    "react/react-in-jsx-scope": "off",
    // suppress errors for not defining props types
    "react/prop-types": "warn",
    // allow jsx syntax in js files (for next.js project)
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
  plugins: ["prettier"],
  overrides: [
    {
      files: ["*.js"],
      extends: ["eslint:recommended", "prettier"],
    },
  ],
  parserOptions: {
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
