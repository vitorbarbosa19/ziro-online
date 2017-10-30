exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-html') {
    config.loader('null', {
      test: /@okta\/okta-signin-widget/,
      loader: 'null-loader'
    })
  }
  return config
}