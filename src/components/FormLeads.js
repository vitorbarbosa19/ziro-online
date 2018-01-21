import React from 'react'
import AlertIcon from './AlertIcon'
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
    <label style={{ fontSize: '18px', margin: '30px 0 10px' }}>Qual o seu primeiro nome?</label>
    <label style={{ 
      display: 'flex',
      alignItems: 'center',
      padding: '8px 8px 0px',
      fontSize: '13px',
      fontWeight: '700',
      color: '#F16B6F'}}>
        {props.errorFirstName ? AlertIcon(16,16) : null}&nbsp;{props.errorFirstName}
    </label>
    <input
      style={inputStyle}
      type='text'
      name='firstName'
      value={props.firstName}
      placeholder='Nome...'
    />
    <label style={labelStyle}>Qual o seu último nome?</label>
    <label style={{ 
      display: 'flex',
      alignItems: 'center',
      padding: '8px 8px 0px',
      fontSize: '13px',
      fontWeight: '700',
      color: '#F16B6F'}}>
        {props.errorLastName ? AlertIcon(16,16) : null}&nbsp;{props.errorLastName}
    </label>
    <input
      style={inputStyle}
      type='text'
      name='lastName'
      value={props.lastName}
      placeholder='Sobrenome...'
    />
    <label style={labelStyle}>Qual o seu email?</label>
    <label style={{ 
      display: 'flex',
      alignItems: 'center',
      padding: '8px 8px 0px',
      fontSize: '13px',
      fontWeight: '700',
      color: '#F16B6F'}}>
        {props.errorEmail ? AlertIcon(16,16) : null}&nbsp;{props.errorEmail}
    </label>
    <input
      style={inputStyle}
      type='email'
      name='email'
      value={props.email}
      placeholder='Email...'
    />
    <label style={labelStyle}>Qual o seu número de WhatsApp (com DDD)?</label>
    <label style={{ 
      display: 'flex',
      alignItems: 'center',
      padding: '8px 8px 0px',
      fontSize: '13px',
      fontWeight: '700',
      color: '#F16B6F'}}>
        {props.errorWhatsapp ? AlertIcon(16,16) : null}&nbsp;{props.errorWhatsapp}
    </label>
    <input
      style={inputStyle}
      type='tel'
      name='whatsapp'
      value={props.whatsapp}
      placeholder='WhatsApp...'
    />
    <label style={labelStyle}>Você tem loja física?</label>
    <label style={{ 
      display: 'flex',
      alignItems: 'center',
      padding: '8px 8px 0px',
      fontSize: '13px',
      fontWeight: '700',
      color: '#F16B6F'}}>
        {props.errorHasStore ? AlertIcon(16,16) : null}&nbsp;{props.errorHasStore}
    </label>
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
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label style={{ marginRight: '30px', fontSize: '14px' }}>Estou abrindo</label>
        <input
          className='lead-form-input-radio'
          type='radio'
          name='hasStore'
          value='Estou abrindo'
          checked={props.hasStore === 'Estou abrindo'}
        />
      </div>
    </div>
    <label style={labelStyle}>Quanto pagaria por uma peça, no máximo?</label>
    <label style={{ 
      display: 'flex',
      alignItems: 'center',
      padding: '8px 8px 0px',
      fontSize: '13px',
      fontWeight: '700',
      color: '#F16B6F'}}>
        {props.errorMaxPay ? AlertIcon(16,16) : null}&nbsp;{props.errorMaxPay}
    </label>
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
        <label style={{ marginRight: '30px', fontSize: '14px' }}>Até R$200,00</label>
        <input
          className='lead-form-input-radio'
          type='radio'
          name='maxPay'
          value='Até R$200,00'
          checked={props.maxPay === 'Até R$200,00'}
        />
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <label style={{ fontSize: '14px' }}>Acima de R$200,00&nbsp;&nbsp;</label>
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
    <label style={{ 
      display: 'flex',
      alignItems: 'center',
      padding: '8px 8px 0px',
      fontSize: '13px',
      fontWeight: '700',
      color: '#F16B6F'}}>
        {props.errorReferral ? AlertIcon(16,16) : null}&nbsp;{props.errorReferral}
    </label>
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
      : 
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '70px', marginBottom: '10px'}}>
        <label style={{fontSize: '18px'}}>Quando pretende comprar?</label>
        <label style={{ 
          display: 'flex',
          alignItems: 'center',
          padding: '8px 8px 0px',
          fontSize: '13px',
          fontWeight: '700',
          color: '#F16B6F'}}>
            {props.errorWhen ? AlertIcon(16,16) : null}&nbsp;{props.errorWhen}
        </label>
        <div style={radioFormStyle}>
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
            <label style={{ marginRight: '30px', fontSize: '14px' }}>Ainda não sei</label>
            <input
              className='lead-form-input-radio'
              type='radio'
              name='when'
              value='Ainda não sei'
              checked={props.when === 'Ainda não sei'}
            />
          </div>
        </div>
      </div>
    }
    {props.referral === 'Já sou cliente'
      ? null
      : 
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '70px', marginBottom: '10px'}}>
        <label style={{fontSize: '18px'}}>Quanto pretende gastar por mês?</label>
        <label style={{ 
          display: 'flex',
          alignItems: 'center',
          padding: '8px 8px 0px',
          fontSize: '13px',
          fontWeight: '700',
          color: '#F16B6F'}}>
            {props.errorMonthSpend ? AlertIcon(16,16) : null}&nbsp;{props.errorMonthSpend}
        </label>
        <div style={radioFormStyle}>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label style={{ fontSize: '14px' }}>Até R$ 5.000,00</label>
            <input
              className='lead-form-input-radio'
              type='radio'
              name='monthSpend'
              value='Até R$ 5.000,00'
              checked={props.monthSpend === 'Até R$ 5.000,00'}
            />
          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label style={{ fontSize: '14px' }}>Até R$ 15.000,00</label>
            <input
              className='lead-form-input-radio'
              type='radio'
              name='monthSpend'
              value='Até R$ 15.000,00'
              checked={props.monthSpend === 'Até R$ 15.000,00'}
            />
          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label style={{ fontSize: '14px' }}>Acima de R$ 15.000,00&nbsp;&nbsp;</label>
            <input
              className='lead-form-input-radio'
              type='radio'
              name='monthSpend'
              value='Acima de R$ 15.000,00'
              checked={props.monthSpend === 'Acima de R$ 15.000,00'}
            />
          </div>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <label style={{ marginRight: '30px', fontSize: '14px' }}>Ainda não sei</label>
            <input
              className='lead-form-input-radio'
              type='radio'
              name='monthSpend'
              value='Ainda não sei'
              checked={props.monthSpend === 'Ainda não sei'}
            />
          </div>
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
