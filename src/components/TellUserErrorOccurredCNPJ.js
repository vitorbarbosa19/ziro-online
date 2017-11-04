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
        style={{margin: '20px 0'}}
        cloudName='ziro' 
        width='40'
        publicId='error-icon_dqsgnx'
        version='1508212649'
        format='png'
        secure='true'
      />
      {props.errorNetwork ?
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <p>Estamos enfrentando instabilidade em nosso sistema.</p>
          <p>Lamentamos o incoveniente.</p>
          <p>Por favor aguarde alguns minutos e tente validar seu CNPJ novamente.</p>
        </div>
      :        
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <p>Infelizmente, nosso sistema detectou um erro durante a validação do seu CNPJ.</p>
          <p>Lembramos que <strong>não é possível</strong> se cadastrar usando um número de CPF.</p>
          <p>Se acredita que seu CNPJ é do <strong>ramo certo</strong> e não houve erro de preenchimento do formulário, mande um Whatsapp para a gente.</p>
          <p>Estaremos prontos para ajudá-lo a acessar o aplicativo: <strong>(11) 98877-6655</strong></p>
        </div>
      }
      <a style={buttonStyleDark} href='/cadastro'>Voltar</a>
  </div>
)
