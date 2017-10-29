import React from 'react'
import Link from 'gatsby-link'
import auth0 from 'auth0-js'

export default class Login extends React.Component {
	constructor(props) {
		super(props)
		this.login = this.login.bind(this)
		this.logout = this.logout.bind(this)
		this.handleAuthentication = this.handleAuthentication.bind(this)
		//this.isAuthenticated = this.isAuthenticated.bind(this)
	}
	auth0 = new auth0.WebAuth({
		domain: 'ziro.auth0.com',
		clientID: '3R45qylJ7QRKBCsfI2x55lqGqF7uc9H6',
		redirectUri: 'http://localhost:8000/auth-callback',
		responseType: 'token id_token'
	})
	login() {
		this.auth0.authorize()
	}
	logout() {
		localStorage.removeItem('accessToken')
		localStorage.removeItem('idToken')
	}
	handleAuthentication() {
		this.auth0.parseHash( (error, authResult) => {
			if(authResult && authResult.accessToken && authResult.idToken) {
				localStorage.setItem('accessToken', authResult.accessToken)
				localStorage.setItem('idToken', authResult.idToken)
				this.props.history.push('/')
			}
			else if (error) {
				console.log(error)
				this.props.history.push('/')
			}
		})
	}
	render() {
		return (
		  <div>
		  	<Link to='/auth-callback' onClick={this.login}>Login</Link>
			</div>
		)
	}
}
