import React from 'react'
import { Image } from 'cloudinary-react'
import OktaSignIn from '@okta/okta-signin-widget'
import UserHelpLogin from '../components/UserHelpLogin'
import TellUserHeIsLogged from '../components/TellUserHeIsLogged'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: null,
      userLogin: null
    }
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }
  componentDidMount() {
    this.widget = new OktaSignIn({
      baseUrl: process.env.OKTA_URL || process.env.GATSBY_OKTA_URL,
      redirectUri: process.env.OKTA_REDIRECT_URI || process.env.GATSBY_REDIRECT_URI,
      clientId: process.env.OKTA_CLIENT_ID || process.env.GATSBY_CLIENT_ID,
		  authParams: {
		  	responseType: 'id_token'
		  },
		  language: 'pt-BR'
    })
    this.widget.session.get((response) => {
      // check if user is active on Okta's database
      if (response.status !== 'INACTIVE') {
        console.log(response)
        this.props.updateUserFromLoginPage(response.userId)
        this.setState({
          userId: response.userId,
          userLogin: response.login
        })
      }	else {
        this.setState({
          userId: null,
          userLogin: null
        }, () => {
          sessionStorage.removeItem('userId')
          this.login()
        })
      }
    })
  }
  login() {
    Backbone.history.stop()
    this.widget.renderEl({
      el: this.loginContainer
    },
    (response) => {
      console.log('LOGIN:', response)
      if (response.status !== 'SUCCESS') {
        alert('Erro no sistema! Entre em contato conosco via WhatsApp: (11) 95349-7908')
      }
      if (response.claims) {
        this.props.updateUserAndRedirect(response.claims.sub)
      }
      if (response.user) {
        this.props.updateUserAndRedirect(response.user.id)
      }
    },
    (error) => {
      console.log(error)
    })
  }
  logout(event) {
    event.preventDefault()
    this.widget.signOut(() => {
      this.props.logoutFromLoginPage()
    })
  }
  render() {
    return (
      <div>
        {this.state.userId
          ? <TellUserHeIsLogged
            userLogin={this.state.userLogin}
            logout={this.logout}
          />
          :	null
        }
        {this.state.userId
          ? null
          :
          // show Okta's login container
		      <div
            style={{
		        		display: 'flex',
		        		flexDirection: 'column',
		        		alignItems: 'center'
		        	}}>
            <Image
              style={{ margin: '15px 0 0 0' }}
              cloudName='ziro'
              width='70'
              publicId='login-icon_wb7aa2'
              version='1509403995'
              format='png'
              secure='true'
				        />
            <div ref={(div) => {
              this.loginContainer = div
            }} />
          </div>
        }
        {this.state.userId
          ? null
          :	<UserHelpLogin />
        }
      </div>
    )
  }
}
