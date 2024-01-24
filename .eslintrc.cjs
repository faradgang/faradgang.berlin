module.exports = {
  extends: ["plugin:astro/recommended", "plugin:astro/jsx-a11y-strict"],
  overrides: [
    {
      files: ["*.astro"],
      processor: "astro/client-side-ts",
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {},
    },
  ],
};
