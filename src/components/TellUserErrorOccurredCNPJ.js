import React from 'react'
import { Image } from 'cloudinary-react'
import WhatsappIcon from './WhatsappIcon'
import { buttonStyleDark } from '../styles/styles'

export default (props) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'karla',
      fontSize: '16px',
      textAlign: 'center',
      margin: '0 5px'
    }}>
    <Image
      style={{ margin: '20px 0' }}
      cloudName='ziro'
      width='40'
      publicId='error-icon_dqsgnx'
      version='1508212649'
      format='png'
      secure='true'
    />
    {props.errorNetwork
      ? <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 10px' }}>
        <p>Estamos enfrentando instabilidade em nosso sistema.</p>
        <p>Lamentamos o inconveniente.</p>
        <p>Por favor, aguarde alguns minutos e tente validar seu CNPJ novamente.</p>
        <p>Se o erro persistir, mande um Whatsapp para a gente que iremos ajudá-lo:&nbsp;
          <strong>
            <a style={{ textDecoration: 'underline', paddingLeft: '2px' }} href='tel:-11-98176-8088'>(11) 98176-8088</a>
          </strong>&nbsp;
          <WhatsappIcon />
        </p>
      </div>
      : <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 20px' }}>
        <p>Não conseguimos validar seu CNPJ.</p>
        <p>Lembramos que <strong>não é possível</strong> se cadastrar usando um número de CPF.</p>
        <p>Se acredita que não errou ao digitar seu CNPJ e que ele é do <strong>ramo certo e está ativo</strong>, mande um Whatsapp para a gente.</p>
        <p>Estaremos prontos para ajudá-lo a acessar o aplicativo:&nbsp;
          <strong>
            <a style={{ textDecoration: 'underline', paddingLeft: '2px' }} href='tel:-11-98176-8088'>(11) 98176-8088</a>
          </strong>&nbsp;
          <WhatsappIcon />
        </p>
      </div>
    }
    <a style={buttonStyleDark} href='/cadastro'>Voltar</a>
  </div>
)
