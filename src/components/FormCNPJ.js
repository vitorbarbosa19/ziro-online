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
    <p style={{ fontFamily: 'karla', fontSize: '12px', margin: '0', color: 'rgba(0,0,0,0.5)' }}>{formatCNPJ(props.CNPJ)}</p>
    <input
      style={inputStyle}
      type='number'
      name='CNPJ'
      value={props.CNPJ}
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
