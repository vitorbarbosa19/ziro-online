import React from 'react'
import Link from 'gatsby-link'
import { Image } from 'cloudinary-react'
import WhatsappIcon from '../components/WhatsappIcon'
import { buttonStyleDark } from '../styles/styles'

export default () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'karla',
    fontSize: '14px',
    marginTop: '20px',
    textAlign: 'center'
  }}>
    <Image
      style={{ margin: '0 auto 10px' }}
      cloudName='ziro'
      width='85'
      publicId='stock-icon_jksghh'
      version='1510350801'
      format='png'
      secure='true'
	  />
    <p style={{
      margin: '10px 30px'
    }}>
      Fale com nossos assessores para consultar grade e preço de uma peça específica.
    </p>
    <h5 style={{
      margin: '35px 0 20px',
      textTransform: 'uppercase'
    }}>
      Veja como é simples
    </h5>
    <ol style={{
      margin: '0 50px',
      textAlign: 'justify'
    }}>
      <li style={{ paddingLeft: '10px' }}>
        Adicione em seu Whatsapp o nosso número:&nbsp;
        <strong>
          <a style={{ textDecoration: 'underline', paddingLeft: '2px' }} href='tel:-11-95349-7908'>(11) 95349-7908</a>
        </strong>&nbsp;
        <WhatsappIcon />;
      </li>
      <li style={{ paddingLeft: '10px' }}>
        Defina uma peça do nosso catálogo;
      </li>
      <li style={{ paddingLeft: '10px' }}>
        Envie para nosso assessor:
      </li>
      <ul style={{ marginLeft: '9px' }}>
        <li>
          Se você tem <strong>iOS:</strong> aperte uma vez na foto para abrir o Whatsapp já com o link da imagem pronto para compartilhar.
        </li>
        <li>
          Se você tem <strong>Android:</strong> aperte e segure a foto. Escolha a opção 'compartilhar foto' e envie.
        </li>
      </ul>
    </ol>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '60px'
    }}>
      <Link style={buttonStyleDark} to='/'>Ver catálogo</Link>
    </div>
  </div>
)
