import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = (props) => (
  <div
    style={{
      background: '#364657',
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
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: '#FFD807',
            textDecoration: 'none',
          }}>
          ZIRO
        </Link>
      </h1>
      {props.page === '/' ? null : 
      <Link
        to="/" 
        style={{
          color: '#fff'
        }}>
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
