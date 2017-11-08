import React from 'react'

export default class ContaCriada extends React.Component {
	componentDidMount() {
		window.setTimeout( () => {
			alert('Seu LOGIN é o seu email. Sua SENHA é o seu CNPJ (apenas números)')
			this.props.history.push('/login')
		}, 5000)
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
	      	<p>Você será redirecionado em instantes...</p>
			</div>
		)
	}
}
