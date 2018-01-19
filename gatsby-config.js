module.exports = {
  siteMetadata: {
    title: `Ziro`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
    	resolve: 'gatsby-plugin-google-fonts',
    	options: {
    		fonts: [
    			'karla\:300,400,700',
    			'hind vadodara\:300,400,500,600,700',
    		]
    	}
    }
  ],
}
