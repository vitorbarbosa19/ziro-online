import React from 'react'
import axios from 'axios'
import Helmet from 'react-helmet'
import { Image } from 'cloudinary-react'

const imageStyle = {
	'borderRadius': '2px'
}

export default class GaleriaMarca extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			allPhotos: null,
			photoURL: null
		}
		this.buildURL = this.buildURL.bind(this)
	}
	buildURL() {
		this.setState({
			photoURL: 'https://ziro.netlify.com/loubucca'//`https://res.cloudinary.com/ziro/image/upload/${this.state.allPhotos[0].version}/${this.state.allPhotos[0].public_id}.png`
		})
	}
	componentDidMount() {
		axios.get('https://res.cloudinary.com/ziro/image/list/loubucca.json')
			.then( (response) => {
				this.setState({
					allPhotos: response.data.resources
				})
			})
	}
	render() {
		return (
			<div>
				<Helmet 
					title={`${this.state.photoURL}`}
					meta={[
						{ name: 'description', content: `${this.state.photoURL}` },
						{ property: 'og:image', content: 'https://res.cloudinary.com/ziro/image/upload/v1507497199/loubucca-5.png' }
					]}
				/>
				{this.state.allPhotos ?
			  	this.state.allPhotos.map( (photo, index) => {
			  		return ( 
				  		<a key={index} onClick={this.buildURL} href={`whatsapp://send?phone=15302048900&text=${this.state.photoURL}`}>
				  			<Image style={imageStyle} cloudName='ziro' width='400' publicId={photo.public_id} />
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
