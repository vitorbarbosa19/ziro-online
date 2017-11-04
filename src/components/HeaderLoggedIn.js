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
          padding: '0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
        {/*---Logo---*/}
          <Image
            style={{margin: '0 0 0 12px'}}
            cloudName='ziro' 
            width='85' 
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
                    fontFamily: 'karla',
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
                    fontFamily: 'karla',
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
                    fontFamily: 'karla',
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
                    fontFamily: 'karla',
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
            </div>
          }
        {/*---Login Icon---*/}
          <Link 
            to='/login'
            style={{
              margin: '30px 12px 10px 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <Image
                style={{margin: '0'}}
                cloudName='ziro'
                width='27'
                publicId='profile-icon_mtjw08'
                version='1509403995'
                format='png'
                secure='true'
              />
              <p 
                style={{
                  color: '#fff',
                  fontFamily: 'karla',
                  fontSize: '11px',
                  margin: '0',
                }}>
                  Meu perfil
              </p>
          </Link>
      </div>
  </div>
)
