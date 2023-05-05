module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    // should not be needed
    "no-underscore-dangle": "off",
    "import/no-cycle": "off",

    // global rules
    "no-console": "warn",
    "no-debugger": "error",
    "no-unused-vars": "off",
    "no-plusplus": "off",
    "no-undef": "off",
    "no-restricted-syntax": "off",
    "no-await-in-loop": "warn",
    "vue/multi-word-component-names": "off",
    "vue/custom-event-name-casing": "off",
    "vue/script-setup-uses-vars": "error",

    // make typescript happy
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-comment": "off",

    // to be evaluated
    "prefer-const": "error",
    "import/prefer-default-export": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "no-restricted-imports": [
      "error",
      {
        patterns: ["@/strobbo-modules/*", "@strobbo/*/*"],
      },
    ],
    "id-length": [
      "error",
      {
        min: 3,
        exceptions: [
          "_", // unused parameters
          "__", // unused parameters
          "$t", // translations
          "$v", // vuelidate
          "ms", // milliseconds
          "el", // DOM element
          "fn", // function
          "id", // identifier
          "on", // listeners
          "t", // translations
          "to", // date range
          "vm", // Vue instance
        ],
      },
    ],
  },
};
