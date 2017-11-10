import React from 'react'
import { inputStyle, labelStyle, buttonStyleDark, radioFormStyle } from '../styles/styles'

export default (props) => (
  <form
    style={{
      margin: '10px 15px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}
    onChange={props.handleForm}>
    <label style={{ fontSize: '18px', margin: '30px 0 10px' }}>Qual o seu nome?</label>
    <input
      style={inputStyle}
      type='text'
      name='firstName'
      value={props.firstName}
      placeholder='Nome...'
    />
    <label style={labelStyle}>Qual o seu último nome?</label>
    <input
      style={inputStyle}
      type='text'
      name='lastName'
      value={props.lastName}
      placeholder='Sobrenome...'
    />
    <label style={labelStyle}>Qual o seu email?</label>
    <input
      style={inputStyle}
      type='email'
      name='email'
      value={props.email}
      placeholder='Email...'
    />
    <label style={labelStyle}>Qual o seu número de WhatsApp (com DDD)?</label>
    <input
      style={inputStyle}
      type='tel'
      name='whatsapp'
      value={props.whatsapp}
      placeholder='WhatsApp...'
    />
    <label style={labelStyle}>Você tem loja física?</label>
    <div style={radioFormStyle}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label style={{ fontSize: '14px' }}>Sim</label>
        <input
          className='lead-form-input-radio'
          type='radio'
          name='hasStore'
          value='Sim'
          checked={props.hasStore === 'Sim'}
        />
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label style={{ marginRight: '30px', fontSize: '14px' }}>Não</label>
        <input
          className='lead-form-input-radio'
          type='radio'
          name='hasStore'
          value='Não'
          checked={props.hasStore === 'Não'}
        />
      </div>
    </div>
    <label style={labelStyle}>Quanto pagaria por uma peça, no máximo?</label>
    <div style={radioFormStyle}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label style={{ fontSize: '14px' }}>Até R$59,00</label>
        <input
          className='lead-form-input-radio'
          type='radio'
          name='maxPay'
          value='Até R$59,00'
          checked={props.maxPay === 'Até R$59,00'}
        />
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label style={{ marginRight: '30px', fontSize: '14px' }}>Entre R$59,00 e R$200,00</label>
        <input
          className='lead-form-input-radio'
          type='radio'
          name='maxPay'
          value='Entre R$59,00 e R$200,00'
          checked={props.maxPay === 'Entre R$59,00 e R$200,00'}
        />
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label style={{ fontSize: '14px' }}>Acima de R$200,00</label>
        <input
          className='lead-form-input-radio'
          type='radio'
          name='maxPay'
          value='Acima de R$200,00'
          checked={props.maxPay === 'Acima de R$200,00'}
        />
      </div>
    </div>
    <label style={labelStyle}>Como descobriu o catálogo online da Ziro?</label>
    <div style={radioFormStyle}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label style={{ fontSize: '14px' }}>Instagram</label>
        <input
          className='lead-form-input-radio'
          type='radio'
          name='referral'
          value='Instagram'
          checked={props.referral === 'Instagram'}
        />
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label style={{ fontSize: '14px' }}>Blog</label>
        <input
          className='lead-form-input-radio'
          type='radio'
          name='referral'
          value='Blog'
          checked={props.referral === 'Blog'}
        />
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label style={{ fontSize: '14px' }}>Indicação</label>
        <input
          className='lead-form-input-radio'
          type='radio'
          name='referral'
          value='Indicação'
          checked={props.referral === 'Indicação'}
        />
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label style={{ marginRight: '30px', fontSize: '14px' }}>Já sou cliente</label>
        <input
          className='lead-form-input-radio'
          type='radio'
          name='referral'
          value='Já sou cliente'
          checked={props.referral === 'Já sou cliente'}
        />
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label style={{ fontSize: '14px' }}>Não lembro</label>
        <input
          className='lead-form-input-radio'
          type='radio'
          name='referral'
          value='Não lembro'
          checked={props.referral === 'Não lembro'}
        />
      </div>
    </div>
    {props.referral === 'Já sou cliente'
      ? null
      : <label style={labelStyle}>Quando pretende comprar?</label>
    }
    {props.referral === 'Já sou cliente'
      ? null
      : <div style={radioFormStyle}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label style={{ fontSize: '14px' }}>O quanto antes</label>
          <input
            className='lead-form-input-radio'
            type='radio'
            name='when'
            value='O quanto antes'
            checked={props.when === 'O quanto antes'}
          />
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label style={{ fontSize: '14px' }}>Em até 3 meses</label>
          <input
            className='lead-form-input-radio'
            type='radio'
            name='when'
            value='Em até 3 meses'
            checked={props.when === 'Em até 3 meses'}
          />
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <label style={{ marginRight: '30px', fontSize: '14px' }}>Ainda não sei, estou pesquisando</label>
          <input
            className='lead-form-input-radio'
            type='radio'
            name='when'
            value='Ainda não sei, estou pesquisando'
            checked={props.when === 'Ainda não sei, estou pesquisando'}
          />
        </div>
      </div>
    }
    <div style={{ marginTop: '60px', display: 'flex' }}>
      <a
        style={buttonStyleDark}
        href='#'
        onClick={props.handleSubmit}>
            Concluir cadastro
      </a>
    </div>
  </form>
)
