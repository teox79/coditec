module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'footer-max-line-length': [0, 'never'],
        'body-max-line-length': [0, 'always', 0]
    }
};