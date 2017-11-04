import React from 'react'
import Link from 'gatsby-link'
import { Image } from 'cloudinary-react'
import { buttonStyleDark } from '../styles/styles'

export default (props) => (
  <div>
	  {sessionStorage.getItem('userId') ? 
	  	<p>Preços</p>
	  :
		  <div 
		  	style={{
		  		display: 'flex',
		  		flexDirection: 'column',
		  		alignItems: 'center',
		  		fontFamily: 'karla',
		  		fontSize: '16px',
		  		textAlign: 'center'
		  	}}>
		      <Image
		        style={{margin: '20px 0'}}
		        cloudName='ziro' 
		        width='80'
		        publicId='register-icon_edugch'
		        version='1509496885'
		        format='png'
		        secure='true'
		      />
			  	<p>Para ver preços, cadastre seu CNPJ em nosso aplicativo</p>
			  	<Link
			  		to='/cadastro'
			  		style={buttonStyleDark}>
			  			Cadastrar CNPJ
			  	</Link>
	  	</div>
	  }
  </div>
)
