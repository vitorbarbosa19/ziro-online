import React from 'react'
import Link from 'gatsby-link'
import buttonStyleDark from '../styles/styles'

const NotFoundPage = () => (
  <div style={{textAlign: 'center', fontFamily: 'karla', margin: '30px 20px'}}>
    <h1>Essa página não existe!</h1>
    <p>Você digitou no navegador um endereço que não existe.</p>
    <p>Clique no botão abaixo para voltar para a página principal.</p>
    <Link style={buttonStyleDark} to='/'>Voltar</Link>
  </div>
)

export default NotFoundPage
