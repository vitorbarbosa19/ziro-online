import React from 'react'
import OktaSignIn from '@okta/okta-signin-widget'

export default class Login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			user: null
		}
		this.widget = new OktaSignIn({
		  baseUrl: process.env.OKTA_URL,
		  redirectUri: process.env.OKTA_REDIRECT_UIR,
		  clientId: process.env.OKTA_CLIENT_ID,
		  authParams: {
		  	responseType: 'id_token'
		  },
		  features: {
		  	registration: true
		  }
		})
		this.login = this.login.bind(this)
		this.logout = this.logout.bind(this)
	}
	componentDidMount() {
		this.widget.session.get( (response) => {
			if(response.status !== 'INACTIVE') {
				this.setState({
					user: response.login
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
					user: response.claims.email
				})
			},
			(error) => {
				console.log(error)
			}
		)
	}
	logout() {
		this.widget.signOut( () => {
			this.setState({
				user: null
			})
			this.login()
		})
	}
	render() {
		return (
			<div>
				{this.state.user ?
						<div>
							<p>Hello,{this.state.user}</p>
							<button onClick={this.logout}>Logout</button>
						</div>
					:
						null
				}
				{this.state.user ?
						null
					:
						<div ref={(div) => {this.loginContainer = div}} />
				}
			</div>
		)
	}
}
