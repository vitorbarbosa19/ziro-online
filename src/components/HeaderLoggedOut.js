import React from 'react'
import Link from 'gatsby-link'
import { Image } from 'cloudinary-react'
import { buttonStyleBright } from '../styles/styles'
import normalizeTitle from '../utils/normalizeTitle'

export default (props) => (
  <div
    style={{
      background: '#303E4D',
      position: 'fixed',
      zIndex: '1',
      width: '100%',
      boxShadow: '0 1px 6px 1px rgba(0,0,0,0.3)',
    }}>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 400,
        padding: '1.45rem 1.0875rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
      <Image
        style={{margin: '0'}}
        cloudName='ziro' 
        width='85' 
        publicId='logo-original_lork1u'
        version='1508000699'
        format='png'
        secure='true'
      />
      {props.page === '/' ? 
      <Link
        to="/" 
        style={{
          color: '#fff',
          fontFamily: 'karla',
          fontSize: '16px',
          display: 'flex',
          alignItems: 'center'
        }}>
          Catálogo
      </Link> 
      : null}
      {props.page === '/' ? null : 
        <div
          style={{
            display: 'flex'
          }}>
            <Link
              to="/" 
              style={{
                color: '#fff',
                fontFamily: 'karla',
                fontSize: '16px',
                display: 'flex',
                alignItems: 'center'
              }}>
              <Image
                style={{margin: '0 3px 0 0'}}
                cloudName='ziro'
                width='12'
                publicId='back-arrow_xdfk21'
                version='1508000698'
                format='png'
                secure='true'
              />
                {normalizeTitle(props.page)}
            </Link>
        </div>}
      {/*<Link
        to="/login" 
        style={buttonStyleBright}>
          Login
      </Link>*/}
    </div>
  </div>
)
