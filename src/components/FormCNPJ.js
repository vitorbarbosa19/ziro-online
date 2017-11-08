import React from 'react'
import formatCNPJ from '../utils/formatCNPJ'
import { inputStyle, buttonStyleDark } from '../styles/styles'

export default (props) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <p style={{fontFamily: 'karla', fontSize: '10px', margin: '0', color: 'rgba(0,0,0,0.5)'}}>CNPJ com apenas números</p>
      <input
        style={inputStyle}
        type='text'
        name='CNPJ'
        value={formatCNPJ(props.CNPJ)}
        onChange={props.handleCNPJ}
        placeholder='CNPJ...'
      />
      <a 
        style={buttonStyleDark}
        href='#'
        onClick={props.verifyCNPJ}>
          Validar CNPJ
      </a>
  </div>
)
