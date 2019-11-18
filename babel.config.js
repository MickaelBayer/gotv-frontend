// eslint-disable-next-line no-undef
module.exports = {
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    {
      optionalChaining: true
    }
  ],
  presets: [
    [
      '@babel/preset-typescript',
      {
        allowDeclareFields: true
      }
    ]
  ]
};
