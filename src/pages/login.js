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
		  baseUrl: process.env.OKTA_URL,
		  redirectUri: process.env.OKTA_REDIRECT_URI,
		  clientId: process.env.OKTA_CLIENT_ID,
		  authParams: {
		  	responseType: 'id_token'
		  },
		  language: 'pt-BR'
		})
		this.widget.session.get( (response) => {
			if(response.status !== 'INACTIVE') {
				this.setState({
					userId: response.id,
					userLogin: response.login
				})
			}
			else
				this.login()
		})
	}
	login() {
		Backbone.history.stop()
		this.widget.renderEl({ 
			el: this.loginContainer
			},
			(response) => {
				this.setState({
					userId: response.claims.idp,
					userLogin: response.claims.email
				})
				sessionStorage.setItem('userId', response.claims.idp)
				sessionStorage.setItem('userLogin', response.claims.email)
				this.props.history.push('/') //redirects user by changing browser history
			},
			(error) => {
				console.log(error)
			}
		)
	}
	logout(event) {
		event.preventDefault()
		sessionStorage.removeItem('userId')
		sessionStorage.removeItem('userLogin')
		this.widget.signOut( () => {
			this.setState({
				userId: null,
				userLogin: null
			})
		})
		this.props.history.push('/') //redirects user by changing browser history
	}
	render() {
		return (
			<div>
				{this.state.userId ?
						<TellUserHeIsLogged
							userLogin={this.state.userLogin}
							logout={this.logout}
						/>
					:
						null
				}
				{this.state.userId ?
						null
					:
						//show Okta's login container
		        <div 
		        	style={{
		        		display: 'flex', 
		        		flexDirection: 'column',
		        		alignItems: 'center'
		        	}}>
				        <Image
				          style={{margin: '15px 0 0 0'}}
				          cloudName='ziro'
				          width='70'
				          publicId='login-icon_wb7aa2'
				          version='1509403995'
				          format='png'
				          secure='true'
				        />
								<div ref={(div) => {this.loginContainer = div}} />
						</div>
				}
				{this.state.userId ?
						null
					:
						<UserHelpLogin />
				}
			</div>
		)
	}
}
