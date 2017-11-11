import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ReactGA from 'react-ga'
import OktaSignIn from '@okta/okta-signin-widget'
import HeaderLoggedIn from '../components/HeaderLoggedIn'
import HeaderLoggedOut from '../components/HeaderLoggedOut'
import UserAlreadyRegistered from '../components/UserAlreadyRegistered'
import TellUserHeNeedsToRegister from '../components/TellUserHeNeedsToRegister'
import Footer from '../components/Footer'
import './index.css'

export default class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: null
    }
    // don't run Okta's initializer on server render
    if (typeof window !== 'undefined') {
      // initialize Okta widget to allow fetching users from Okta's database
      this.widget = new OktaSignIn({
        baseUrl: process.env.OKTA_URL,
        redirectUri: process.env.OKTA_REDIRECT_URI,
        clientId: process.env.OKTA_CLIENT_ID,
        authParams: {
          responseType: 'id_token'
        },
        language: 'pt-BR'
      })
      // call function to fire google analytics on page load, once
      this.onPageChange(props.location.pathname)
    }
    this.updateUserFromLoginPage = this.updateUserFromLoginPage.bind(this)
    this.logoutFromLoginPage = this.logoutFromLoginPage.bind(this)
    this.goBack = this.goBack.bind(this)
  }
  componentWillReceiveProps(nextProps) {
    // call function to fire google analytics when path changes
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.onPageChange(nextProps.location.pathname)
    }
  }
  onPageChange(pathname) {
    // initialize google analytics
    ReactGA.initialize(process.env.ANALYTICS_TRACKING_ID)
    // check if user is in analytics goal page
    if (pathname === /\/conta-criada\/?/.test(pathname)) {
      // if does userId does not exist, user didn't enter this page through the register form
      if (sessionStorage.get('userId')) {
        ReactGA.set({ userId: sessionStorage.get('userId') })
        ReactGA.pageview(pathname)
      }
    }
    // check if user is not in the login page or goal page
    if (pathname !== /(\/conta-criada\/?)|(\/login\/?)/.test(pathname)) {
      // verify if user is logged in
      this.widget.session.get((response) => {
        if (response.status !== 'INACTIVE') {
          // if he is, associate the pageview with this userId and send a pageview to google analytics
          ReactGA.set({ userId: response.userId })
          ReactGA.pageview(pathname)
          // initiate a session storage and set state to reuse userId where necessary
          if (sessionStorage.getItem('userId') === null) {
            sessionStorage.setItem('userId', response.userId)
            this.setState({ userId: response.userId })
          } else {
            this.setState({ userId: sessionStorage.getItem('userId') })
          }
        } else {
          this.setState({ userId: null }, () => {
            sessionStorage.removeItem('userId')
            ReactGA.pageview(pathname)
          })
        }
      })
    } else if (this.state.userId !== null) {
      ReactGA.set({ userId: this.state.userId })
      ReactGA.pageview(pathname)
    } else {
      ReactGA.pageview(pathname)
    }
  }
  updateUserFromLoginPage(userId) {
    this.setState({ userId: userId }, () => {
      sessionStorage.setItem('userId', userId)
    })
  }
  logoutFromLoginPage() {
    this.setState({ userId: null }, () => {
      sessionStorage.removeItem('userId')
      this.props.history.push('/')
    })
  }
  goBack(event) {
    event.preventDefault()
    this.props.history.goBack()
  }
  render() {
    return (
      <div>
        <Helmet
          title='Ziro Online'
          meta={[
            { name: 'description', content: 'Catalogo de marcas de atacado' },
            { name: 'keywords', content: 'atacado, bom retiro, moda' }
          ]} />
        {this.state.userId
          ? <HeaderLoggedIn page={this.props.location.pathname} goBack={this.goBack} />
          : <HeaderLoggedOut page={this.props.location.pathname} goBack={this.goBack} />
        }
        <div
          className='home-container'
          style={{
            margin: '0 auto',
            maxWidth: '400px',
            padding: '7px 0px 1.45rem'
          }}>
          {/\/precos\/?/.test(this.props.location.pathname) === true
            ? this.state.userId
              ? this.props.children({ ...this.props, updateUserFromLoginPage: this.updateUserFromLoginPage, logoutFromLoginPage: this.logoutFromLoginPage })
              : <TellUserHeNeedsToRegister />
            : null
          }
          {/\/cadastro\/?/.test(this.props.location.pathname) === true
            ? this.state.userId
              ? <UserAlreadyRegistered />
              : this.props.children({ ...this.props, updateUserFromLoginPage: this.updateUserFromLoginPage, logoutFromLoginPage: this.logoutFromLoginPage })
            : null
          }
          { /\/cadastro\/?/.test(this.props.location.pathname) === false && /\/precos\/?/.test(this.props.location.pathname) === false
            ? this.props.children({ ...this.props, updateUserFromLoginPage: this.updateUserFromLoginPage, logoutFromLoginPage: this.logoutFromLoginPage })
            : null
          }
        </div>
        {this.state.userId || /(\/login\/?)|(\/cadastro\/?)|(\/404\/?)/.test(this.props.location.pathname)
          ? null
          : <Footer page={this.props.location.pathname} />
        }
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}
