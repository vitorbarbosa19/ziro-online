import React from 'react'
import Link from 'gatsby-link'
import { Image } from 'cloudinary-react'
import cloudinaryApi from '../utils/cloudinaryApi'
import allBrands from '../utils/allBrands'
import Spinner from '../components/Spinner'
import {
  containerStyle,
  titleStyle,
  imageStyle,
  linkStyle
} from '../styles/styles'

export default class GalleryAllBrands extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allBrandsWithThumbs: null
    }
  }
  componentDidMount() {
    cloudinaryApi.getThumbnailsAndNames(allBrands)
      .then( (response) => {
        console.log(response.sort( (a, b) => { return Date.parse(b.updated_at) - Date.parse(a.updated_at) }))
        this.setState({
          allBrandsWithThumbs: response
        })
      })
      .catch( (error) => {
        console.log(error)
      })
  }
  render() {
    return (
      <div style={containerStyle}>
        {this.state.allBrandsWithThumbs ? 
          this.state.allBrandsWithThumbs.sort( (a, b) => {
            return Date.parse(b.updated_at) - Date.parse(a.updated_at)
          }).map( (brand, index) => {
            if(brand) {
              return (
                <Link style={linkStyle} key={index} to={`/${brand.name.toLowerCase().replace(/\s+/g, '-')}`} >
                  <Image style={imageStyle} cloudName='ziro' width='400' publicId={brand.thumb_id[0]} format='jpg' secure='true' />
                  <h1 style={titleStyle}>{brand.name}</h1>
                </Link>
              )
            }
          })
        : <Spinner style={{textAlign: 'center'}} />
        }
      </div>
    )
  }
}
