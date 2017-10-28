import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import HeaderLoggedIn from '../components/HeaderLoggedIn'
import HeaderLoggedOut from '../components/HeaderLoggedOut'
import Footer from '../components/Footer'
import './index.css'

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
        <HeaderLoggedOut page={this.props.location.pathname}/>
        <div
          className='home-container'
          style={{
            margin: '0 auto 35px',
            maxWidth: 400,
            padding: '98px 0px 1.45rem',
          }}>
          {this.props.children({...this.props})}
        </div>
        <Footer page={this.props.location.pathname}/>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}
