module.exports = {
  siteMetadata: {
    title: `Ziro Online`,
  },
  plugins: [
  `gatsby-plugin-react-helmet`,
  {
  	resolve: 'gatsby-plugin-google-fonts',
  	options: {
  		fonts: [
  			'source sans pro\:300,400,700',
  			'karla\:300,400,700',
  			'hind vadodara\:300,400,500,600,700',
  			'mukta\:300,400,700',
  		]
  	}
  }
  ],
}
