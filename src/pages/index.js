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
  linkStyle,
  filter
} from '../styles/styles'

export default class GalleryAllBrands extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      allBrandsWithThumbs: null,
      filterValue: ''
    }
    this.updateFilter = this.updateFilter.bind(this)
  }
  componentDidMount() {
    cloudinaryApi.getThumbnailsAndNames(allBrands)
      .then((response) => {
        console.log(response.sort((a, b) => {
          return Date.parse(b.updated_at) - Date.parse(a.updated_at)
        }))
        this.setState({
          allBrandsWithThumbs: response
        }, () => {
          // after new state is set, scroll to previous position before navigating away
          if (this.props.scrollPositionY) {
            window.scrollTo(0, this.props.scrollPositionY)
          }
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  updateFilter(event) {
    this.setState({ filterValue: event.target.value })
  }
  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <input style={filter} type='text' placeholder='Procurar marca...' onChange={this.updateFilter} value={this.state.filterValue} />
        <div style={containerStyle}>
          {this.state.allBrandsWithThumbs
            ? this.state.allBrandsWithThumbs
            .filter((brand) => {
              return Boolean(brand)
            })
            .sort((a, b) => {
              // return b.name > a.name ? -1 : 1
              return Date.parse(b.updated_at) > Date.parse(a.updated_at) ? -1 : 1
            })
            .filter((brand) => {
              return brand.name.toLowerCase().includes(this.state.filterValue.toLowerCase())
            })
            .map((brand, index) => {
              if (brand) {
                return (
                  <Link style={linkStyle} key={index} to={`/${brand.name.toLowerCase().replace(/\s+/g, '-')}`} >
                    <Image style={imageStyle} cloudName='ziro' width='400' publicId={brand.thumb_id[0]} format='jpg' secure='true' />
                    <h1 style={titleStyle}>{brand.name}</h1>
                  </Link>
                )
              }
              return (
                <div/>
              )
            })
            : <Spinner style={{ textAlign: 'center' }} />
          }
        </div>
      </div>
    )
  }
}
