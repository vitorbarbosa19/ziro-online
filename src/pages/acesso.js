import React from 'react'
import Link from 'gatsby-link'
import { Image } from 'cloudinary-react'
import { buttonStyleDark, buttonStyleGhost } from '../styles/styles'

export default () =>
  (<div
    style={{
  		fontFamily: 'karla',
  		fontSize: '14px',
  		padding: '20px 25px 0',
  		textAlign: 'justify'
  	}}>
    <div style={{ textAlign: 'center' }}>
      <Image
        style={{ margin: '0 auto' }}
        cloudName='ziro'
        width='85'
        publicId='access-icon-new_eyu328'
        version='1510008753'
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
	  			Consultar nossos assessores sobre grade e preço de cada peça;
	  		</li>
      <li>
	  			Efetuar pedidos à distância, direto do seu celular, sem precisar viajar.
	  		</li>
    </ul>
    <p>
	  		Faça seu cadastro e inicie agora mesmo.
	  	</p>
    <div
      style={{
	  			display: 'flex',
	  			justifyContent: 'space-between'
		  	}}>
      <Link
        to='/cadastro'
        style={buttonStyleDark}>
		  				Cadastrar CNPJ
		  		</Link>
      <Link
        to='/login'
        style={buttonStyleGhost}>
		  				Retornando? Fazer login
		  		</Link>
    </div>
  </div>)
