import React from 'react'
import cloudinaryApi from '../utils/cloudinaryApi'
import { Image } from 'cloudinary-react'
import Spinner from './Spinner'

const imageStyle = {
	borderRadius: '2px'
}

export default class BrandGallery extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			allPhotos: null
		}
	}
	componentDidMount() {
		cloudinaryApi.getBrandGallery(this.props.brand)
			.then( (response) => {
				this.setState({
					allPhotos: response.data.resources
				})
			})
	}
	render() {
		const whatsappLink = 'whatsapp://send?phone=5511996454922&text=https://res.cloudinary.com/ziro/image/upload/v'
		return (
			<div style={{textAlign: 'center'}}>
			<h1 style={{	fontSize: '32px',
  									fontWeight: '600',
  									color: 'rgba(48, 62, 77, 0.9)',
  									fontFamily: 'hind vadodara',
  									marginTop: '2.5rem',
  									marginBottom: '0.7rem'
  							}}>{this.props.brand}</h1>
				{this.state.allPhotos ?
			  	this.state.allPhotos.map( (photo, index) => {
			  		return ( 
				  		<a key={index} href={`${whatsappLink}${photo.version}/${photo.public_id}.jpg`}>
				  			<Image style={imageStyle} cloudName='ziro' width='400' publicId={photo.public_id} format='jpg' secure='true' />
				  		</a>
				  	)
			  	})
				:
					<Spinner />
				}
			</div>
		)
	}
}
