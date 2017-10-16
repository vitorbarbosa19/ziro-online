import React from 'react'
import Link from 'gatsby-link'
import cloudinaryApi from '../utils/cloudinaryApi'
import { Image } from 'cloudinary-react'
import Spinner from '../components/Spinner'

const containerStyle = {
	display: 'flex',
  flexDirection: 'column',
	justifyContent: 'center',
  alignItems: 'center'
}

const titleStyle = {
	textAlign: 'center',
  fontSize: '28px',
  fontWeight: '600',
  color: 'rgba(48, 62, 77, 0.9)',
  fontFamily: 'hind vadodara',
  marginTop: '2.5rem',
  marginBottom: '0.5rem'
}

const imageStyle = {
	borderRadius: '2px',
  margin: '0 0 7px 0'
}

const allBrands = [
  'Luzia Fazzolli',
  //'Di Collani',
  'Unique Chic',
  //'Nuxx',
  //'Donna Ritz',
  //'Blessed',
  //'Innocense',
  //'Ave Rara',
  'Karmani',
  //'Amissima',
  //'Lovlity',
  'Linny',
  //'Hush',
  //'Loubucca',
  //'Champagne',
  'Muse',
  'Doce Flor',
  'Morina'
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
  }
  render() {
    return (
      <div style={containerStyle}>
        {this.state.allBrandsWithThumbs ? 
          this.state.allBrandsWithThumbs.sort( (a, b) => {
            return Date.parse(b.updated_at) - Date.parse(a.updated_at)
          }).map( (brand, index) => {
            return (
              <Link key={index} to={`/${brand.name.toLowerCase().replace(/\s+/g, '-')}`} >
                <h1 style={titleStyle}>{brand.name}</h1>
                <Image style={imageStyle} cloudName='ziro' width='400' publicId={brand.thumb_id[0]} format='jpg' secure='true' />
              </Link>
            )
          })
        : <Spinner style={{textAlign: 'center'}} />
        }
      </div>
    )
  }
}
