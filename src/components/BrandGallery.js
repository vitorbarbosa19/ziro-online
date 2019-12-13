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
      loading: true,
      allPhotos: null,
      next: null
    }
    this.lazyLoading = this.lazyLoading.bind(this)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.lazyLoading)
    cloudinaryApi.getBrandGallery(this.props.brand)
      .then((response) => {
        this.setState({
          loading: false,
          allPhotos: response.data.resources,
          next: response.data.next_cursor
        })
      })
      .catch((error) => {
        this.setState({
          loading: false
        })
        console.log(error.response)
      })
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.lazyLoading)
  }
  lazyLoading() {
    // in the future add loading icon to indicate that more photos are being fetched when bottom is reached
    if (this.state.next && (window.innerHeight + window.scrollY) >= 0.9 * document.body.offsetHeight) {
      window.removeEventListener('scroll', this.lazyLoading)
      cloudinaryApi.getBrandGallery(this.props.brand, this.state.next)
        .then((response) => {
          this.setState((prevState) => {
            prevState.allPhotos.push(...response.data.resources)
            return {
              allPhotos: prevState.allPhotos,
              next: response.data.next_cursor
            }
          }, () => { window.addEventListener('scroll', this.lazyLoading) })
        })
        .catch((error) => {
          console.log(error.response)
        })
    }
  }
  render() {
    const whatsappLink = 'whatsapp://send?phone=551133340920&text=https://res.cloudinary.com/ziro/image/upload/v'
    return (
      <div onScroll={this.lazyLoading} style={{ textAlign: 'center' }}>
        {this.state.loading
			  	? <Spinner />
          : this.state.allPhotos
            ? this.state.allPhotos.map((photo, index) => {
    			  		return (
                <a
                  key={index}
                  href={`${whatsappLink}${photo.version}/${photo.public_id}.jpg?${this.props.brand.replace(/\s/, '-')}`}>
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
            <div style={{
              margin: '20px 40px',
              fontFamily: 'karla'
            }}>
                Ainda sem fotos para esta marca. Volte em breve!
            </div>
        }
      </div>
    )
  }
}
