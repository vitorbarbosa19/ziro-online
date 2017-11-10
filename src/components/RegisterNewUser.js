import React from 'react'
import UserOrientationCNPJ from './UserOrientationCNPJ'
import UserOrientationLeads from './UserOrientationLeads'
import FormCNPJ from './FormCNPJ'
import FormLeads from './FormLeads'

export default (props) => (
  <div
    style={{
  		fontFamily: 'karla',
  		fontSize: '16px',
  		textAlign: 'center'
  	}}>
    {props.cnpjValidated === false
      ? <div>
        <UserOrientationCNPJ />
        <FormCNPJ
          CNPJ={props.CNPJ}
          handleCNPJ={props.handleCNPJ}
          verifyCNPJ={props.verifyCNPJ}
        />
      </div>
      : <div>
        <UserOrientationLeads />
        <hr style={{ width: '80%', margin: '0 auto 20px' }} />
        <h2 style={{ fontFamily: 'hind vadodara' }}>Cadastro de Usuário</h2>
        <FormLeads
          handleForm={props.handleForm}
          handleSubmit={props.handleSubmit}
          CNPJ={props.CNPJ}
          firstName={props.firstName}
          lastName={props.lastName}
          email={props.email}
          whatsapp={props.whatsapp}
          hasStore={props.hasStore}
          maxPay={props.maxPay}
          referral={props.referral}
          when={props.when}
        />
      </div>
    }
  </div>
)
