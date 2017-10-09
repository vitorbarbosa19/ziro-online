import React from 'react'
import axios from 'axios'
import { Image } from 'cloudinary-react'

const imageStyle = {
	'borderRadius': '2px'
}

const indexArray = [1,2,3,4,5,6]

export default class GaleriaMarca extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			imageURL: null
		}
		this.buildURL = this.buildURL.bind(this)
	}
	buildURL() {
		console.log('hi')

	}
	componentDidMount() {
		axios.get('https://671677445128172:kGGw_85ho6y3yo7xUKBmQprdB_I@api.cloudinary.com/v1_1/ziro/resources/image')
			.then( (response) => {
				console.log(response)
			})
	}
	render() {
		return (
			<div>
		  	{indexArray.map( (index) => {
		  		return ( 
			  		<a key={index} onClick={this.buildURL} href={`whatsapp://send?phone=15302048900&text=${index}`}>
			  			<Image style={imageStyle} cloudName='ziro' width='400' publicId={`loubucca-${index}`} />
			  		</a>
			  	)
		  	})}
		  </div>
		)
	}
}
