import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Image } from 'cloudinary-react'
import './index.css'

const Header = (props) => (
  <div
    style={{
      background: '#303E4D',
      marginBottom: '1.45rem',
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
        width='120' 
        publicId='logo-original_lork1u'
        version='1508000699'
        format='png'
        secure='true'
      />
      {props.page === '/' ? null : 
      <Link
        to="/" 
        style={{
          color: '#fff',
          fontFamily: 'karla',
          display: 'flex',
          alignItems: 'center'
        }}>
        <Image
          style={{margin: '0 5px 0 0'}}
          cloudName='ziro'
          width='14'
          publicId='back-arrow_xdfk21'
          version='1508000698'
          format='png'
          secure='true'
        />
        Voltar
      </Link>}
    </div>
  </div>
)

export default class TemplateWrapper extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title="Ziro Online"
          meta={[
            { name: 'description', content: 'Catalogo de marcas de atacado' },
            { name: 'keywords', content: 'atacado, bom retiro, moda' },
          ]}
        />
        <Header page={this.props.location.pathname}/>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 400,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}>
          {this.props.children({...this.props})}
        </div>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}
