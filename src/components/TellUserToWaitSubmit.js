import React from 'react'
import Spinner from './Spinner'

export default (props) => (
  <div
    style={{
      marginTop: '20px',
      fontFamily: 'karla',
      fontSize: '16px',
      textAlign: 'center'
    }}>
      <p>Por favor, aguarde enquanto efetuamos seu cadastro...</p>
      <Spinner/>
  </div>
)
