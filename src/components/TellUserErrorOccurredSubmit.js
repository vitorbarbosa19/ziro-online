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
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <p>Infelizmente, nosso sistema apresentou um erro durante o envio do seu cadastro.</p>
        <p>Lamentamos muito o incoveniente.</p>
        <p>Sugerimos que tente enviar o formulário novamente mais tarde.</p>
        <p>Se continuar encontrando problemas, mande um Whatsapp pra gente: <strong>(11) 98877-6655</strong></p>
      </div>
      <a style={buttonStyleDark} href='#' onClick={props.handleGoBack}>Voltar</a>
  </div>
)
