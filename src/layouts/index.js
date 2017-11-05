import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ReactGA from 'react-ga'
import OktaSignIn from '@okta/okta-signin-widget'
import HeaderLoggedIn from '../components/HeaderLoggedIn'
import HeaderLoggedOut from '../components/HeaderLoggedOut'
import Footer from '../components/Footer'
import './index.css'

export default class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: null
    }
    //initialize Okta widget to allow fetching users from Okta's database
    this.widget = new OktaSignIn({
      baseUrl: process.env.OKTA_URL,
      redirectUri: process.env.OKTA_REDIRECT_URI,
      clientId: process.env.OKTA_CLIENT_ID,
      authParams: {
        responseType: 'id_token'
      },
      language: 'pt-BR'
    })
    //call function to fire google analytics on page load, once
    this.onPageChange(props.location.pathname)
    this.method = this.method.bind(this)
  }
  method() {
    alert('works')
  }
  componentWillReceiveProps(nextProps) {
    //call function to fire google analytics when path changes
    if(this.props.location.pathname !== nextProps.location.pathname)
      this.onPageChange(nextProps.location.pathname)
  }
  onPageChange(pathname) {
    // initialize google analytics
    ReactGA.initialize('UA-109221012-1')
    //verify if user is logged in
    this.widget.session.get( (response) => {
      if(response.status !== 'INACTIVE') {
    //if he is, associate the pageview with this userId and send a pageview
        ReactGA.set({ userId: response.userId })
        ReactGA.pageview(pathname)
    //initiate a session storage and set state to reuse userId where necessary
        if(sessionStorage.getItem('userId') === null) {
          sessionStorage.setItem('userId', response.userId)
          sessionStorage.setItem('userLogin', response.login)
          this.setState({ userId: response.userId })
        }
        else
          this.setState({ userId: sessionStorage.getItem('userId') })
      }
      else
        ReactGA.pageview(pathname)
    })
  }
  render() {
    return (
      <div>
        <Helmet
          title="Ziro Online"
          meta={[
            { name: 'description', content: 'Catalogo de marcas de atacado' },
            { name: 'keywords', content: 'atacado, bom retiro, moda' },
          ]}/>
        {this.state.userId ? 
          <HeaderLoggedIn page={this.props.location.pathname} />
        :
          <HeaderLoggedOut page={this.props.location.pathname} />
        }
        <div
          className='home-container'
          style={{
            margin: '0 auto 35px',
            maxWidth: 400,
            padding: '98px 0px 1.45rem',
          }}>
            {this.props.children({...this.props, ...this.state, method: this.method})}
        </div>
        {this.state.userId || this.props.location.pathname === '/login' || this.props.location.pathname === '/cadastro' ? 
          null 
        :
          <Footer page={this.props.location.pathname} />
        }
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}
