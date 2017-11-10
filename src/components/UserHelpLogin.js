import React from 'react'
import Link from 'gatsby-link'
import ReactTooltip from 'react-tooltip'

export default () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      fontFamily: 'karla',
      fontSize: '13px',
      textAlign: 'center'
    }}>
    <p
      style={{
        display: 'flex',
        alignItems: 'center',
        margin: '0 0 10px 0'
      }}>
          Dúvidas?&nbsp;
      <span
        style={{
          fontWeight: '700'
        }}
        data-tip='Seu nome de usuário é o seu email completo. Sua senha é o seu CNPJ, apenas números.'>
              Clique aqui e veja como acessar
      </span>
    </p>
    <p>
          Não tem cadastro?&nbsp;
      <Link
        to='/cadastro'
        style={{
          fontWeight: '700'
        }}>
              Clique aqui para iniciar
      </Link>
    </p>
    <ReactTooltip effect='solid' />
  </div>
)
