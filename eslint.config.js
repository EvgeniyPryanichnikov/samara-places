// eslint.config.js
import js from '@eslint/js'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

export default tseslint.config(
  // Базовые настройки
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '*.d.ts'
    ]
  }, js.configs.recommended, ...tseslint.configs.recommended, ...pluginVue.configs['flat/recommended'],

  // Основные правила
  {
    files: [ '**/*.{js,ts,vue}' ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021
      },
      parserOptions: {
        parser: tseslint.parser
      }
    },
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      // Отключенные правила
      'vue/no-v-html': 'off',
      'vue/multi-word-component-names': 'off',

      // Базовые JavaScript правила
      'comma-dangle': [ 'error', 'never' ],
      semi: [ 'error', 'never' ],
      quotes: [ 'error', 'single' ],
      eqeqeq: [ 'error', 'always' ],
      'no-unused-vars': 'warn',

      // Vue правила из вашего конфига
      'vue/mustache-interpolation-spacing': [ 'error', 'always' ],
      'vue/no-multi-spaces': 'error',
      'vue/html-indent': [ 'error', 2 ],
      'vue/max-attributes-per-line': [ 'error', {
        singleline: 1
      } ],
      'vue/first-attribute-linebreak': [ 'error', {
        multiline: 'below'
      } ],
      'vue/padding-line-between-blocks': 'error',
      'vue/html-closing-bracket-newline': [ 'error', {
        singleline: 'never',
        multiline: 'always',
        selfClosingTag: {
          singleline: 'never',
          multiline: 'always'
        }
      } ],
      'vue/html-closing-bracket-spacing': [ 'error', {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always'
      } ],
      'vue/multiline-html-element-content-newline': [ 'error', {
        ignoreWhenEmpty: true,
        allowEmptyLines: false
      } ],
      'vue/no-spaces-around-equal-signs-in-attribute': [ 'error' ],
      'vue/no-template-shadow': [ 'error' ],
      'vue/prop-name-casing': [ 'error', 'camelCase' ],
      'vue/require-default-prop': [ 'error' ],
      'vue/require-prop-types': [ 'error' ],
      'vue/singleline-html-element-content-newline': [ 'error' ],
      'vue/v-bind-style': [
        'error',
        'shorthand',
        {
          sameNameShorthand: 'ignore'
        }
      ],
      'vue/v-on-style': [ 'error', 'shorthand' ],
      'vue/v-slot-style': [ 'error', {
        atComponent: 'shorthand',
        default: 'shorthand',
        named: 'shorthand'
      } ],
      'vue/require-explicit-emits': [ 'error' ],
      'vue/v-on-event-hyphenation': [ 'error', 'always' ],
      'vue/attributes-order': [ 'error', {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          [ 'UNIQUE', 'SLOT' ],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ]
      } ],
      'vue/block-order': [ 'error', {
        order: [
          'template',
          'script',
          'style'
        ]
      } ],
      'vue/component-api-style': [ 'error', [ 'script-setup', 'composition' ] ],
      'vue/block-lang': [ 'error', {
        script: {
          lang: 'ts'
        }
      } ],
      'vue/component-name-in-template-casing': [ 'error', 'PascalCase' ],
      'vue/custom-event-name-casing': [ 'error', 'kebab-case' ],
      'vue/define-emits-declaration': [ 'error', 'type-based' ],
      'vue/define-macros-order': [ 'error', {
        order: [ 'defineProps', 'defineEmits' ]
      } ],
      'vue/define-props-declaration': [ 'error', 'type-based' ],
      'vue/define-props-destructuring': [ 'error', {
        destructure: 'always'
      } ],
      'vue/html-button-has-type': [ 'error', {
        button: true
      } ],
      'vue/new-line-between-multi-line-property': [ 'error', {
        minLineOfMultilineProperty: 2
      } ],
      'vue/no-empty-component-block': [ 'error' ],
      'vue/no-undef-components': [ 'error' ],
      'vue/no-undef-properties': [ 'error' ],
      'vue/no-unused-emit-declarations': [ 'error' ],
      'vue/no-unused-properties': [ 'error' ],
      'vue/no-unused-refs': [ 'error' ],
      'vue/no-use-v-else-with-v-for': [ 'error' ],
      'vue/no-useless-mustaches': [ 'error' ],
      'vue/no-useless-v-bind': [ 'error' ],
      'vue/padding-line-between-tags': [ 'error' ],
      'vue/padding-lines-in-component-definition': [ 'error' ],
      'vue/prefer-use-template-ref': [ 'error' ],
      'vue/require-typed-ref': [ 'error' ],
      'vue/script-indent': [ 'error' ],
      'vue/v-for-delimiter-style': [ 'error' ],

      // Stylistic правила
      '@stylistic/array-bracket-newline': [ 'error', {
        minItems: 3
      } ],
      '@stylistic/indent': [ 'error', 2 ],
      '@stylistic/array-bracket-spacing': [ 'error', 'always' ],
      '@stylistic/array-element-newline': [ 'error', {
        minItems: 3
      } ],
      '@stylistic/arrow-parens': [ 'error', 'as-needed' ],
      '@stylistic/arrow-spacing': 'error',
      '@stylistic/block-spacing': [ 'error', 'always' ],
      '@stylistic/brace-style': 'error',
      '@stylistic/comma-dangle': [ 'error', 'never' ],
      '@stylistic/comma-spacing': [ 'error', {
        before: false,
        after: true
      } ],
      '@stylistic/comma-style': [ 'error', 'last' ],
      '@stylistic/computed-property-spacing': [ 'error', 'never' ],
      '@stylistic/curly-newline': [ 'error', 'always' ],
      '@stylistic/dot-location': [ 'error', 'object' ],
      '@stylistic/eol-last': [ 'error', 'always' ],
      //'@stylistic/function-call-argument-newline': [ 'error', 'never' ],
      '@stylistic/function-call-spacing': [ 'error', 'never' ],
      '@stylistic/function-paren-newline': [ 'error', 'never' ],
      '@stylistic/implicit-arrow-linebreak': [ 'error', 'beside' ],
      '@stylistic/key-spacing': [ 'error', {
        beforeColon: false
      } ],
      '@stylistic/keyword-spacing': [ 'error', {
        before: true
      } ],
      '@stylistic/linebreak-style': [ 'error', 'windows' ],
      '@stylistic/max-statements-per-line': [ 'error', {
        max: 1
      } ],
      '@stylistic/member-delimiter-style': [ 'error' ],
      '@stylistic/multiline-ternary': [ 'error', 'always-multiline' ],
      '@stylistic/newline-per-chained-call': [ 'error' ],
      '@stylistic/no-mixed-operators': 'error',
      '@stylistic/no-mixed-spaces-and-tabs': 'error',
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/no-multiple-empty-lines': [ 'error', {
        max: 1
      } ],
      '@stylistic/no-tabs': [ 'error', {
        allowIndentationTabs: true
      } ],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/no-whitespace-before-property': 'error',
      '@stylistic/object-curly-spacing': [ 'error', 'always' ],
      '@stylistic/object-curly-newline': [ 'error', {
        ObjectExpression: {
          minProperties: 1
        },
        ImportDeclaration: 'never'
      } ],
      '@stylistic/object-property-newline': 'error',
      '@stylistic/quote-props': [ 'error', 'as-needed' ],
      '@stylistic/rest-spread-spacing': [ 'error', 'never' ],
      '@stylistic/semi-spacing': 'error',
      '@stylistic/space-before-blocks': 'error',
      '@stylistic/space-before-function-paren': 'error',
      '@stylistic/space-infix-ops': 'error',
      '@stylistic/space-unary-ops': 'error',
      '@stylistic/switch-colon-spacing': 'error',
      '@stylistic/template-curly-spacing': 'error',
      '@stylistic/type-annotation-spacing': 'error',
      '@stylistic/type-generic-spacing': [ 'error' ],
      '@stylistic/type-named-tuple-spacing': [ 'error' ]
    }
  })
