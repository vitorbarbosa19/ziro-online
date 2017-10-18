import React from 'react'
import Link from 'gatsby-link'
import cloudinaryApi from '../utils/cloudinaryApi'
import { Image } from 'cloudinary-react'
import Spinner from '../components/Spinner'

const containerStyle = {
	display: 'flex',
  flexFlow: 'row wrap',
	justifyContent: 'center',
}

const titleStyle = {
	textAlign: 'center',
  fontSize: '16px',
  fontWeight: '600',
  color: '#fff',
  fontFamily: 'hind vadodara',
  textTransform: 'uppercase',
  margin: '-60px 0 20px',
  backgroundColor: 'rgba(48, 62, 77, 0.7)',
  position: 'relative',
  padding: '12px 0',
  zIndex: '0'
}

const imageStyle = {
	borderRadius: '2px',
  margin: '0',
  height: '250px',
  objectFit: 'cover'
}

const linkStyle = {
  width: '50%',
  padding: '0 0.6%'
}

const allBrands = [
  'Luzia Fazzolli',
  'Di Collani',
  'Unique Chic',
  'Nuxx',
  'Donna Ritz',
  'Blessed',
  'Innocense',
  'Ave Rara',
  'Karmani',
  'Amissima',
  'Lovlity',
  'Linny',
  'Hush',
  'Loubucca',
  'Champagne',
  'Muse',
  'Doce Flor',
  'Morina',
  'Chocoleite',
  'La Chocole'
]

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
