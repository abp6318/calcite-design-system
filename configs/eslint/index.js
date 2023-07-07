module.export = {
  extends: ["plugin:@typescript-eslint/recommended", "plugin:jsdoc/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      "./tsconfig-eslint.json",
      "./packages/*/tsconfig-eslint.json",
      "./tsconfig.json",
      "./packages/*/tsconfig.json"
    ],
    ecmaVersion: 2021,
  },
  plugins: ["@typescript-eslint", "import", "jsdoc", "prettier", "unicorn"],
  rules: {
    "@typescript-eslint/ban-types": "warn",
    "@typescript-eslint/explicit-module-boundary-types": [
      "error",
      {
        allowArgumentsExplicitlyTypedAsAny: true,
        allowedNames: [
          "connectedCallback",
          "disconnectedCallback",
          "componentWillRender",
          "componentDidRender",
          "componentWillLoad",
          "componentDidLoad",
          "componentWillUpdate",
          "componentDidUpdate",
          "render"
        ]
      }
    ],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "error",
    curly: "error",
    "import/no-dynamic-require": ["error", { esmodule: true }],
    "jsdoc/check-tag-names": "off",
    "jsdoc/require-jsdoc": "off",
    "jsdoc/tag-lines": ["error", "any", { startLines: 1 }],
    "lines-between-class-members": ["error", "always"],
    "no-eval": "error",
    "no-implied-eval": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1
      }
    ],
    "no-new-func": "error",
    "no-unneeded-ternary": "error",
    "unicorn/prefer-ternary": "error",
    "unicorn/prevent-abbreviations": [
      "error",
      {
        allowList: {
          e2ePage: true
        },
        extendDefaultReplacements: false,
        replacements: {
          e: {
            error: true,
            event: true
          }
        },
        checkProperties: false,
        checkFilenames: false
      }
    ]
  },
  settings: {
    jsdoc: {
      ignoreInternal: true,
      ignorePrivate: true
    }
  }
};
