import React from 'react'
import Link from 'gatsby-link'
import cloudinaryApi from '../utils/cloudinaryApi'
import { Image } from 'cloudinary-react'

const containerStyle = {
	'display': 'flex',
  'flexDirection': 'column',
	'justifyContent': 'center'
}

const titleStyle = {
	'textAlign': 'center'
}

const imageStyle = {
	'borderRadius': '2px',
  'margin': '0'
}

const allBrands = [
  'Loubucca',
  'Blessed',
  'Talgui',
  'Karmani',
  'Villon'
]

export default class GalleryAllBrands extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allBrandsWithThumbs: null
    }
  }
  componentDidMount() {
    cloudinaryApi.getThumbnails(allBrands)
      .then( (response) => {
        this.setState({
          allBrandsWithThumbs: response
        })
      })
  }
  render() {
    return (
      <div style={containerStyle}>
        {this.state.allBrandsWithThumbs ? 
          this.state.allBrandsWithThumbs.map( (brand, index) => {
            return (
              <Link key={index} to={`/${brand.name}`} >
                <Image style={imageStyle} cloudName='ziro' width='400' publicId={brand.thumb_id[0]} format='jpg' />
                <h1 style={titleStyle}>{brand.name}</h1>
              </Link>
            )
          })
        : <div>Loading...</div>
        }
      </div>
    )
  }
}
