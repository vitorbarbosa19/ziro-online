import React from 'react'

export default class ContaCriada extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			countdown: 4
		}
	}
	componentDidMount() {
		window.setTimeout( () => {
			alert('Seu LOGIN é o seu email. Sua SENHA é o seu CNPJ (apenas números)')
			this.props.history.push('/login')
		}, 5000)
		window.setInterval( () => {
			this.setState( (prevState, props) => {
				return { countdown: prevState.countdown - 1 }
			})
		}, 1000)
	}
	render() {
		return (
		  <div
		    style={{
		      margin: '20px 20px 0',
		      fontFamily: 'karla',
		      fontSize: '16px',
		      textAlign: 'center'
		    }}>
	      	<p>Sucesso! Você já pode fazer login!</p>
	      	<p>Você será redirecionado em instantes</p>
	      	<p>{this.state.countdown}...</p>
			</div>
		)
	}
}
