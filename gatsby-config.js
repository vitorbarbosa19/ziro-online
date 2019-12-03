require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

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
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '1008325152564716'
      }
    }
  ],
}