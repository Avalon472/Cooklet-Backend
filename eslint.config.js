import js from "@eslint/js";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";

export default [
  js.configs.recommended,

  ...tseslint.configs.recommended,

  {
    files: ["**/*.ts"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      // Good defaults for backend TS
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],

      "no-console": "off",

      // Helps with ESM import correctness
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "always",
          ts: "never",
        },
      ],
    },
  },
];
