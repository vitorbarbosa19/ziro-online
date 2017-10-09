import React from 'react'
import Link from 'gatsby-link'
import { Image } from 'cloudinary-react'

const containerStyle = {
	'display': 'flex',
	'justifyContent': 'center'
}

const titleStyle = {
	'textAlign': 'center'
}

const imageStyle = {
	'borderRadius': '2px'
}

const IndexPage = () => (
  <div style={containerStyle}>
    <Link to='/loubucca'>
    	<Image style={imageStyle} cloudName='ziro' publicId='loubucca-1_qhi1si' width='400' />
    	<h1 style={titleStyle}>Loubucca</h1>
    </Link>
  </div>
)

export default IndexPage
