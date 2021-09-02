module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-extra-semi": "off",
    "no-var": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off"

  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
};
