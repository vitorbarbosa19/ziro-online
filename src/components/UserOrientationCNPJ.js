import React from 'react'
import { Image } from 'cloudinary-react'

export default (props) => (
	<div>	
		<Image
      style={{margin: '20px 0'}}
      cloudName='ziro' 
      width='80'
      publicId='register-icon_edugch'
      version='1509496885'
      format='png'
      secure='true'
    />
  	<p>Inicie preenchendo o número do seu CNPJ.</p>
  	<p>Ele precisa estar <strong>ativo</strong> e ser do ramo:</p>
  	<p><strong>Comércio varejista de artigos do vestuário e acessórios - CNAE 4781-4/00</strong></p>
  </div>
)
