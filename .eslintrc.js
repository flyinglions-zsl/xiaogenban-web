// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // @fixable 禁止出现多余的分号
    'no-extra-semi': 'error',
    // @fixable 结尾必须有分号
    'semi': [
      'error',
      'always',
      {
        omitLastInOneLineBlock: true
      }
    ],
    // @fixable 一行有多个语句时，分号前面禁止有空格，分号后面必须有空格
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true
      }
    ],
    // @fixable 分号必须写在行尾，禁止在行首出现
    'semi-style': [
      'error',
      'last'
    ]
  }
}
