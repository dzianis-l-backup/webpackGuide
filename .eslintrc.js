module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "sort-imports-es6-autofix",
        "import"
    ],
    "globals": {
        "React": false,
        "PropTypes": false,
        "ReactDOM": false,
        "$": false,
        "jQuery": false,
        "moment": false,
        "DOMPurify": false,
        "ga": false,
        "LOGIN_URL": false
    },
    "rules": {
        "indent": ["error", 4, {"SwitchCase": 1}],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "single", { "allowTemplateLiterals": true, "avoidEscape": true }],
        "semi": ["error", "never"],
        "constructor-super": "error",
        "curly": ["error", "all"],
        "default-case": "warn",
        "dot-location": ["error", "property"],
        "eol-last": ["error", "always"],
        "eqeqeq": ["error", "smart"],
        "func-call-spacing": ["error", "never"],
        "getter-return": "error",
        "jsx-quotes": ["error", "prefer-double"],
        "key-spacing": ["error", {
            "beforeColon": false,
            "afterColon": true
        }],
        "keyword-spacing": ["error", { "after": true, "before": true }],
        "max-depth": ["warn", 3],
        "max-len": ["error", {
            code: 120,
            ignoreComments: true,
            ignoreTrailingComments: true,
            ignoreUrls: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals: true
        }],
        "max-nested-callbacks": ["warn", 3],
        "max-params": ["error", 5],
        "new-parens": "error",
        "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 2 }],
        "padded-blocks": ["error", { "blocks": "never", "classes": "always", "switches": "never" }],
        "no-alert": "error",
        "no-array-constructor": "error",
        "no-class-assign": "error",
        "no-compare-neg-zero": "error",
        "no-cond-assign": "error",
        "no-confusing-arrow": "error",
        "no-console": "warn", // TODO: EK: we don't have dedicated logger to use a console wrapper. Sometimes you have to say that smth goes wrong
        "no-const-assign": "error",
        "no-constant-condition": "error",
        "no-control-regex": "warn",
        "no-debugger": "error",
        "no-delete-var": "error",
        "no-dupe-args": "error",
        "no-dupe-class-members": "error",
        "no-dupe-keys": "error",
        "no-duplicate-case": "error",
        "no-else-return": "error",
        "no-empty": "warn",
        "no-empty-character-class": "error",
        "no-empty-pattern": "error",
        "no-eval": "error",
        "no-ex-assign": "error",
        "no-extend-native": "off",
        "no-extra-boolean-cast": "warn",
        "no-extra-semi": "error",
        "no-fallthrough": "warn",
        "no-floating-decimal": "error",
        "no-func-assign": "error",
        "no-global-assign": "error",
        "no-inner-declarations": "error",
        "no-invalid-regexp": "error",
        "no-irregular-whitespace": "error",
        "no-mixed-spaces-and-tabs": "error",
        "no-multi-spaces": "error",
        "no-nested-ternary": "error",
        "no-new-symbol": "error",
        "no-obj-calls": "error",
        "no-octal": "error",
        "no-param-reassign": "error",
        "no-redeclare": "error",
        "no-regex-spaces": "error",
        "no-self-assign": "error",
        "no-sparse-arrays": "error",
        "no-this-before-super": "error",
        "no-trailing-spaces": "error",
        "no-undef": "error",
        "no-unexpected-multiline": "error",
        "no-unneeded-ternary": "error",
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "no-unsafe-negation": "error",
        "no-unused-labels": "error",
        "no-unused-vars": "error",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-escape": "error",
        "object-curly-newline": ["off", { // TODO: needs review sometime later
            "ObjectExpression": { "minProperties": 3 },
            "ObjectPattern": { "minProperties": 3 }
        }],
        "object-curly-spacing": ["error", "always"],
        "operator-linebreak": ["error", "after"],
        "quote-props": ["error", "as-needed"],
        "sort-imports-es6-autofix/sort-imports-es6": [2, {
            "ignoreCase": false,
            "ignoreMemberSort": false,
            "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
        }],
        "space-before-blocks": "error",
        "space-before-function-paren": "off",
        "space-in-parens": ["error", "never"],
        "switch-colon-spacing": "error",
        "template-curly-spacing": ["error", "never"],

        "template-tag-spacing": ["error", "never"],
        "prefer-template": "warn",
        "use-isnan": "error",
        "valid-typeof": "error",
        // TODO: need to add rule to ensure that all ES6 import specify file extensions

        /**
         * React
         */
        "react/jsx-uses-vars": 2,
        "react/display-name": ['error', { "ignoreTranspilerName": true }],
        'react/boolean-prop-naming': ['warn', { 'rule': "^(is|has|can)[A-Z]([A-Za-z0-9]?)+" }],
        'react/default-props-match-prop-types': ['error', { "allowRequiredDefaults": false }],
        "react/forbid-component-props": ['error', { "forbid": ['className', 'style'] }],
        "react/forbid-prop-types": ['warn', { "forbid": ['any', 'array', 'object'] }],
        "react/no-array-index-key": 'warn',
        "react/no-children-prop": 'error',
        "react/no-danger-with-children": 'error',
        "react/no-deprecated": 'error',
        "react/no-did-mount-set-state": 'error',
        "react/no-did-update-set-state": 'error',
        "react/no-direct-mutation-state": 'error',
        "react/no-find-dom-node": 'warn',
        "react/no-is-mounted": 'error',
        "react/no-redundant-should-component-update": 'error',
        "react/no-render-return-value": 'error',
        "react/no-typos": 'warn', // warn due to bug in rule
        "react/no-string-refs": 'error',
        "react/no-unescaped-entities": 'error',
        "react/no-unknown-property": 'error',
        "react/no-unused-prop-types": 'error',
        "react/no-unused-state": 'warn',
        "react/prefer-es6-class": ['error', 'always'],
        "react/prefer-stateless-function": ['warn', { "ignorePureComponents": true }],
        "react/prop-types": "error",
        "react/no-will-update-set-state": 'error',
        "react/require-render-return": 'error',
        "react/style-prop-object": 'error',
        "react/void-dom-elements-no-children": 'error',
        "react/sort-comp": "warn",

        /**
         * React JSX
         */
        "react/jsx-boolean-value": ["error", "always"],
        "react/jsx-closing-bracket-location": ['warn', {
            "nonEmpty": "after-props",
            "selfClosing": "after-props"
        }],
        "react/jsx-curly-spacing": ['error', {"when": "never", "attributes": true, "children": false}],
        "react/jsx-equals-spacing": ['error', 'never'],
        "react/jsx-indent": ['error', 4],
        "react/jsx-indent-props": ['error', 4],
        "react/jsx-key": 'error',
        "react/jsx-max-props-per-line": ["error", { "maximum": 3, "when": "always" }],
        "react/jsx-no-bind": ['warn', {"allowArrowFunctions": true}],
        "react/jsx-no-comment-textnodes": 'error',
        "react/jsx-no-duplicate-props": ['error', { "ignoreCase": true }],
        "react/jsx-no-literals": 'off',
        "react/jsx-no-target-blank": 'off',
        "react/jsx-curly-brace-presence": ["error", { "props": "never", "children": "never" }],
        "react/jsx-no-undef": ["error", { "allowGlobals": true }],
        "react/jsx-pascal-case": 'error',
        "react/jsx-tag-spacing": ["error", {
            "closingSlash": "never",
            "beforeSelfClosing": "always",
            "afterOpening": "never"
        }],
        "react/jsx-wrap-multilines": ["error", {
            "declaration": "parens-new-line",
            "assignment": "parens-new-line",
            "return": "parens-new-line",
            "arrow": "parens-new-line",
            "condition": "parens-new-line",
            "logical": "parens-new-line",
            "prop": "parens-new-line"
        }],

        /**
         * "Import" plugin rules
         */
        "import/extensions": ["error", "always"],
        "import/no-unresolved": ["error"]
    },
    "overrides": [
        {
            "files": ["*.spec.js"],
            "globals": {
                "ShallowRenderer": false,
                "ReactTestUtils": false,
                "TestRenderer": false,
                "shallow": false,
                "render": false,
                "mount": false,

                "afterAll": false,
                "afterEach": false,
                "beforeAll": false,
                "beforeEach": false,
                "describe": false,
                "expect": false,
                "fit": false,
                "it": false,
                "jest": false,
                "pending": false,
                "pit": false,
                "test": false,
                "xdescribe": false,
                "xit": false,
                "xtest": false,
            }
        }
    ]
};
