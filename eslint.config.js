import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import reactThreeFiber from "@react-three/fiber";

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        React: "readonly", // Added React to globals
      },
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: { react: { version: "18.3" } }, // Fixed syntax
    plugins: {
      // Fixed syntax
      react: react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "react-three": reactThree,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      "react/prop-types": "off",
      "react/no-unknown-property": "off", // Added missing comma
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }, // Moved object inside the array
      ],
      "react/react-in-jsx-scope": "off", // Moved outside of the array and added comma
    },
  },
];
