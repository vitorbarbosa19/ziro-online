import React from 'react'
import { buttonStyle } from '../styles/styles'

export default (props) => (
  <div
  	style={{
  		position: 'fixed',
  		bottom: '0',
  		width: '100%',
  		display: 'flex',
  		justifyContent: 'center',
  		alignItems: 'center',
  		fontSize: '13px',
  		fontFamily: 'karla',
  		color: '#fff',
  		backgroundColor: 'rgba(48, 62, 77, 0.95)',
  		padding: '12px 0',
  		boxShadow: '0px -2px 6px 1px rgba(0,0,0,0.1), 0px -2px 6px 1px rgba(0,0,0,0.1)'
  	}}>
  	<p 
  		style={{
  			margin: '0 10px 0 0'
  		}}>
  		Quer ver preços? Acesse com seu CNPJ
  	</p>
  	<a style={buttonStyle} href='/acesso'>Ver preços</a>
  </div>
)
