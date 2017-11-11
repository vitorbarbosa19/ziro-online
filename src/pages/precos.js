import React from 'react'
import Link from 'gatsby-link'
import { Image } from 'cloudinary-react'
import PriceTable from '../components/PriceTable'
import { buttonStyleDark } from '../styles/styles'

export default () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'karla',
    marginTop: '20px',
    textAlign: 'center'
  }}>
    <Image
      style={{ margin: '0 auto 10px' }}
      cloudName='ziro'
      width='85'
      publicId='price-icon-new_v2te8e'
      version='1510345906'
      format='png'
      secure='true'
    />
    <p style={{
      margin: '0 25px 10px',
      fontSize: '14px'
    }}>
      Quer solicitar grade e preço de uma peça específica?
    </p>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '60px'
    }}>
      <Link style={buttonStyleDark} to='/solicitar-grade'>Saiba como</Link>
    </div>
    <h2 style={{
      fontFamily: 'hind vadodara'
    }}>
      Preços
    </h2>
    <PriceTable />
  </div>
)
