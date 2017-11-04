import React from 'react'
import cloudinaryApi from '../utils/cloudinaryApi'
import { Image } from 'cloudinary-react'
import Spinner from './Spinner'

const imageStyle = {
	borderRadius: '5px',
	padding: '0 1%'
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
				{this.state.allPhotos ?
			  	this.state.allPhotos.map( (photo, index) => {
			  		return ( 
				  		<a 
				  			key={index} 
				  			href={`${whatsappLink}${photo.version}/${photo.public_id}.jpg?${this.props.brand.replace(/\s/,'-')}`}>
					  			<Image 
					  				style={imageStyle}
					  				cloudName='ziro' 
					  				width='400'
					  				publicId={photo.public_id}
					  				format='jpg'
					  				secure='true'
					  			/>
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
