import React from 'react'
import axios from 'axios'
import { Image } from 'cloudinary-react'

const imageStyle = {
	'borderRadius': '2px'
}

export default class GaleriaMarca extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			allPhotos: null
		}
	}
	componentDidMount() {
		axios.get(`https://res.cloudinary.com/ziro/image/list/${this.props.marca.toLowerCase()}.json`)
			.then( (response) => {
				console.log(response.data.resources)
				this.setState({
					allPhotos: response.data.resources
				})
			})
	}
	render() {
		const whatsappLink = 'whatsapp://send?phone=5511996454922&text=https://res.cloudinary.com/ziro/image/upload/v'
		return (
			<div style={{'textAlign': 'center'}}>
			<h1>{this.props.marca}</h1>
				{this.state.allPhotos ?
			  	this.state.allPhotos.map( (photo, index) => {
			  		return ( 
				  		<a key={index} href={`${whatsappLink}${photo.version}/${photo.public_id}.jpg`}>
				  			<Image style={imageStyle} cloudName='ziro' width='400' publicId={photo.public_id} format='jpg' />
				  		</a>
				  	)
			  	})
				:
					<div>Loading...</div>
				}
			</div>
		)
	}
}
