import React from 'react'
import Link from 'gatsby-link'
import { Image } from 'cloudinary-react'
import { buttonStyleDark, buttonStyleGhost } from '../styles/styles'

export default (props) =>
  <div 
  	style={{
  		fontFamily: 'karla',
  		fontSize: '14px',
  		padding: '20px 25px 0',
  		textAlign: 'justify'
  	}}>
      <div style={{textAlign: 'center'}}>
	      <Image
	        style={{margin: '0 auto'}}
	        cloudName='ziro' 
	        width='85' 
	        publicId='access-icon-new_ddibg9'
	        version='1509250208'
	        format='png'
	        secure='true'
	      />
	    </div>
	  	<p>
	  		Ao acessar nosso catálogo com seu <strong>CNPJ de lojista</strong>, você tem uma série de vantagens:
	  	</p>
	  	<ul>
	  		<li>
	  			Ver a faixa de preços (mínimo e máximo) e o valor médio praticado por cada marca;
	  		</li>
	  		<li>
	  			Consultar nossos assessores para saber sobre grade e preço individuais das peças;
	  		</li>
	  		<li>
	  			Efetuar um pedido à distância, direto do seu celular, com simplicidade e conforto.
	  		</li>
	  	</ul>
	  	<p>
	  		Basta preencher um rápido formulário de cadastro. Inicie abaixo!
	  	</p>
	  	<div 
	  		style={{
	  			display: 'flex',
	  			justifyContent: 'space-between',
		  	}}>
		  		<Link style={buttonStyleDark}>
		  			Cadastrar CNPJ
		  		</Link>
		  		<Link to='/login' style={buttonStyleGhost}>
		  			Retornando? Fazer login
		  		</Link>
	  	</div>
  </div>
