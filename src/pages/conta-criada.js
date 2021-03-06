import React from 'react'

export default class ContaCriada extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      countdown: 4
    }
  }
  componentDidMount() {
    window.setTimeout(() => {
      alert('Seu LOGIN é o seu email. Sua SENHA é o seu CNPJ (apenas números)')
      this.props.history.push('/login')
    }, 5000)
    let countdownId = window.setInterval(() => {
      this.setState((prevState) => {
        return { countdown: prevState.countdown - 1 }
      }, () => {
        if (this.state.countdown === 0) {
          clearInterval(countdownId)
        }
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
        <h2>Sucesso!</h2>
        <p>Você já pode fazer login! Redirecionando em instantes</p>
        <p>{this.state.countdown}...</p>
      </div>
    )
  }
}
