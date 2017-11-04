import React from 'react'
import Spinner from './Spinner'

export default (props) => (
  <div
    style={{
      margin: '20px 20px 0',
      fontFamily: 'karla',
      fontSize: '16px',
      textAlign: 'center'
    }}>
      <p>Por favor, aguarde enquanto validamos seu CNPJ...</p>
      <Spinner/>
  </div>
)
