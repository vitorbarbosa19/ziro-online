import React from 'react'
import AlertIcon from './AlertIcon'
import formatCNPJ from '../utils/formatCNPJ'
import { inputStyle, buttonStyleDark } from '../styles/styles'

export default (props) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
    <p style={{ fontFamily: 'karla', fontSize: '14px', margin: '0', color: 'rgba(0,0,0,0.5)' }}>{formatCNPJ(props.CNPJ)}</p>
    <input
      style={inputStyle}
      type='number'
      name='CNPJ'
      value={props.CNPJ}
      onChange={props.handleCNPJ}
      placeholder='CNPJ...'
    />
    <label style={{ 
      display: 'flex',
      alignItems: 'center',
      padding: '0px 8px 8px',
      fontSize: '13px',
      fontWeight: '700',
      color: '#F16B6F'}}>
        {props.errorCnpj ? AlertIcon(16,16) : null}&nbsp;{props.errorCnpj}
    </label>
    <a
      style={buttonStyleDark}
      href='#'
      onClick={props.verifyCNPJ}>
          Validar CNPJ
    </a>
  </div>
)
