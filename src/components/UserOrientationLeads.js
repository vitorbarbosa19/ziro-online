import React from 'react'
import { Image } from 'cloudinary-react'

export default () => (
  <div style={{ marginBottom: '40px' }}>
    <Image
      style={{ margin: '20px 0' }}
      cloudName='ziro'
      width='40'
      publicId='ok-icon_bskbxm'
      version='1508212647'
      format='png'
      secure='true'
    />
    <p>Seu CNPJ foi validado com sucesso!</p>
    <p>Agora, termine de preencher o formulário abaixo para acessar o aplicativo. É rapidinho ;)</p>
  </div>
)
