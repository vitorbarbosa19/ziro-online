import React from 'react'
import Headroom from 'react-headroom'
import Link from 'gatsby-link'
import { Image } from 'cloudinary-react'
import { buttonStyleBright } from '../styles/styles'
import normalizeTitle from '../utils/normalizeTitle'

export default (props) => (
  <Headroom
    style={{
      background: '#303E4D',
      boxShadow: '0 1px 6px 1px rgba(0,0,0,0.3)',
    }}>
      <div
        style={{
          margin: '0 auto',
          maxWidth: '400px',
          padding: '0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
        {/*---Logo---*/}
          <Image
            style={{margin: '0 0 0 18px'}}
            cloudName='ziro' 
            width='80' 
            publicId='logo-original_lork1u'
            version='1508000699'
            format='png'
            secure='true'
          />
        {/*---Home nav---*/}
          {props.page === '/' ? 
            <div 
              style={{
                display: 'flex'
              }}>
                <Link
                  to="/precos" 
                  style={{
                    margin: '0 15px 0 0',
                    color: '#fff',
                    fontFamily: 'hind vadodara',
                    fontSize: '15px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    Preços
                </Link> 
                <Link
                  className='nav-link-active'
                  to="/"
                  style={{
                    margin: '0 0 0 15px',
                    color: '#fff',
                    fontFamily: 'hind vadodara',
                    fontSize: '15px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    Catálogo
                </Link>
            </div> 
          : 
            null
          }
        {/*---Prices Nav---*/}
          {props.page === '/precos' ? 
            <div 
              style={{
                display: 'flex'
              }}>
                <Link
                  className='nav-link-active'
                  to="/precos" 
                  style={{
                    margin: '0 15px 0 0',
                    color: '#fff',
                    fontFamily: 'hind vadodara',
                    fontSize: '15px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    Preços
                </Link> 
                <Link
                  to="/"
                  style={{
                    margin: '0 0 0 15px',
                    color: '#fff',
                    fontFamily: 'hind vadodara',
                    fontSize: '15px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    Catálogo
                </Link>
            </div> 
          : 
            null
          }
        {/*---Back Button Layout---*/}
          {props.page === '/' || props.page === '/precos' ?
            null 
          : 
            <div
              style={{
                display: 'flex'
              }}>
                <Link
                  to="/" 
                  style={{
                    color: '#fff',
                    fontFamily: 'hind vadodara',
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
            </div>
          }
        {/*---Login Icon---*/}
          <Link 
            to='/login'
            style={{
              margin: '18px 18px 10px 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <Image
                style={{margin: '0'}}
                cloudName='ziro'
                width='25'
                publicId='profile-icon_mtjw08'
                version='1509403995'
                format='png'
                secure='true'
              />
              <p 
                style={{
                  color: '#fff',
                  fontFamily: 'hind vadodara',
                  fontSize: '11px',
                  margin: '0',
                }}>
                  Meu perfil
              </p>
          </Link>
      </div>
  </Headroom>
)
