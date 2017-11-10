import React from 'react'
import { Image } from 'cloudinary-react'
import { buttonStyleDark } from '../styles/styles'

export default (props) => (
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
        <p>Se o erro persistir, mande um Whatsapp para a gente que iremos ajudá-lo: <strong><a style={{ textDecoration: 'underline' }} href='tel:-11-98176-8088'>(11) 98176-8088</a></strong></p>
      </div>
      : <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 10px' }}>
        <p>Infelizmente, nosso sistema detectou um erro durante a validação do seu CNPJ.</p>
        <p>Lembramos que <strong>não é possível</strong> se cadastrar usando um número de CPF.</p>
        <p>Se acredita que seu CNPJ é do <strong>ramo certo</strong> e não houve erro de preenchimento do formulário, mande um Whatsapp para a gente.</p>
        <p>Estaremos prontos para ajudá-lo a acessar o aplicativo: <strong><a style={{ textDecoration: 'underline' }} href='tel:-11-98176-8088'>(11) 98176-8088</a></strong></p>
      </div>
    }
    <a style={buttonStyleDark} href='/cadastro'>Voltar</a>
  </div>
)
