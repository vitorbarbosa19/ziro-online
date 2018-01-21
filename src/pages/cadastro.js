import React from 'react'
import axios from 'axios'
import listAllCompanyActivities from '../utils/listAllCompanyActivities'
import validateForm from '../utils/validateForm'
import TellUserToWaitCNPJ from '../components/TellUserToWaitCNPJ'
import TellUserToWaitSubmit from '../components/TellUserToWaitSubmit'
import TellUserErrorOccurredCNPJ from '../components/TellUserErrorOccurredCNPJ'
import TellUserErrorOccurredSubmit from '../components/TellUserErrorOccurredSubmit'
import UserAlreadyRegistered from '../components/UserAlreadyRegistered'
import RegisterNewUser from '../components/RegisterNewUser'

export default class Cadastro extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      CNPJ: '',
      firstName: '',
      lastName: '',
      email: '',
      whatsapp: '',
      hasStore: '',
      maxPay: '',
      referral: '',
      when: '',
      monthSpend: '',
      loadingCNPJ: false,
      loadingSubmit: false,
      cnpjValidated: false,
      isCnpjAlreadyRegistered: false,
      errorValidatingCNPJ: false,
      errorNetwork: false,
      errorSubmit: false,
      /* error messages */
      errorFirstName: '',
      errorLastName: '',
      errorEmail: '',
      errorWhatsapp: '',
      errorHasStore: '',
      errorMaxPay: '',
      errorReferral: '',
      errorWhen: '',
      errorMonthSpend: ''
    }
    this.handleCNPJ = this.handleCNPJ.bind(this)
    this.verifyCNPJ = this.verifyCNPJ.bind(this)
    this.handleForm = this.handleForm.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleGoBack = this.handleGoBack.bind(this)
  }
  handleCNPJ(event) {
    this.setState({
      CNPJ: event.target.value.replace(/\W/g, '')
    })
  }
  verifyCNPJ(event) {
    event.preventDefault()
    this.setState({
      loadingCNPJ: true
    })
    axios.get(`https://sheets.googleapis.com/v4/spreadsheets/${process.env.RESELLER_SHEET_ID || process.env.GATSBY_RESELLER_SHEET_ID}/values/lojistas?key=${process.env.GOOGLE_API_KEY || process.env.GATSBY_GOOGLE_API_KEY}`)
      .then((sheetResponse) => {
        const cnpjAlreadyRegistered = sheetResponse.data.values.splice(1, sheetResponse.data.values.length).map((leadInfo) => {
          return leadInfo[5]
        }).find((cnpj) => {
          return (cnpj.replace(/\W/g, '') === this.state.CNPJ.toString())
        })
        if (cnpjAlreadyRegistered) {
          this.setState({
            isCnpjAlreadyRegistered: true,
            loadingCNPJ: false
          })
        } else {
          return axios.get(`https://zirocnpj.now.sh?cnpj=${this.state.CNPJ}`)
            .then((response) => {
              console.log('Validação CNPJ:', response)
              this.setState({
                loadingCNPJ: false
              })
              if (response.data.status === 'ERROR') {
                this.setState({ errorValidatingCNPJ: true })
              } else {
                const isActivityValidated = !listAllCompanyActivities(response.data.atividade_principal, response.data.atividades_secundarias).map((activity) => {
                  if (activity !== '47.81-4-00') {
                    return true
                  }
                }).every((activityCondition) => {
                  return activityCondition === true
                })
                if (isActivityValidated && response.data.situacao === 'ATIVA') {
                  this.setState({
                    cnpjValidated: true
                  })
                } else {
                  this.setState({
                    errorValidatingCNPJ: true
                  })
                }
              }
            })
            .catch((error) => {
              console.log(error)
              this.setState({
                loadingCNPJ: false,
                errorValidatingCNPJ: true,
                errorNetwork: true
              })
            })
        }
      })
  }
  handleForm(event) {
    const value = event.target.value
    switch (event.target.name) {
    case 'firstName':
      this.setState({ firstName: value })
      break
    case 'lastName':
      this.setState({ lastName: value })
      break
    case 'email':
      this.setState({ email: value })
      break
    case 'whatsapp':
      this.setState({ whatsapp: value.replace(/\W/g, '') })
      break
    case 'hasStore':
      this.setState({ hasStore: value })
      break
    case 'maxPay':
      this.setState({ maxPay: value })
      break
    case 'referral':
      if (value === 'Já sou cliente') {
        this.setState({ referral: value, when: 'N/A - Já era cliente', monthSpend: 'N/A - Já era cliente' })
      } else	{
        this.setState((prevState) => {
          if (prevState.referral === 'Já sou cliente')
            return { referral: value, when: '', monthSpend: '' }
          return { referral: value }
        })
      }
      break
    case 'when':
      this.setState({ when: value })
      break
    case 'monthSpend':
      this.setState({ monthSpend: value })
      break
    }
  }
  handleSubmit(event) {
    event.preventDefault()
    const { firstNameIsValid, lastNameIsValid, emailIsValid, whatsappIsValid,
      hasStoreIsValid, maxPayIsValid, referralIsValid, whenIsValid, monthSpendIsValid } = validateForm(this.state)
    firstNameIsValid ?
      this.setState({ errorFirstName: '' })
    :
      this.setState({ errorFirstName: 'Preencha esse campo' })
    lastNameIsValid ?
      this.setState({ errorLastName: '' })
    :
      this.setState({ errorLastName: 'Preencha esse campo' })
    emailIsValid ? 
      this.setState({ errorEmail: '' })
    :
      this.setState({ errorEmail: 'Formato inválido' })
    whatsappIsValid ? 
      this.setState({ errorWhatsapp: '' })
    :
      this.setState({ errorWhatsapp: 'Deve ter 10 ou 11 dígitos' })
    hasStoreIsValid ? 
      this.setState({ errorHasStore: '' })
    :
      this.setState({ errorHasStore: 'Escolha uma opção' })
    maxPayIsValid ? 
      this.setState({ errorMaxPay: '' })
    :
      this.setState({ errorMaxPay: 'Escolha uma opção' })
    referralIsValid ? 
      this.setState({ errorReferral: '' })
    :
      this.setState({ errorReferral: 'Escolha uma opção' })
    whenIsValid ? 
      this.setState({ errorWhen: '' })
    :
      this.setState({ errorWhen: 'Escolha uma opção' })
    monthSpendIsValid ? 
      this.setState({ errorMonthSpend: '' })
    :
      this.setState({ errorMonthSpend: 'Escolha uma opção' })
    if (firstNameIsValid && lastNameIsValid && emailIsValid && whatsappIsValid && hasStoreIsValid && maxPayIsValid && referralIsValid && whenIsValid && monthSpendIsValid) {
      // format first and last name properly
      const formattedFName = this.state.firstName.trim().charAt(0).toUpperCase() + this.state.firstName.trim().toLowerCase().substr(1)
      const formattedLName = this.state.lastName.trim().charAt(0).toUpperCase() + this.state.lastName.trim().toLowerCase().substr(1)
      // send lead information to Okta API and Google spreadsheet
      this.setState({ loadingSubmit: true })
      axios({ url: `https://ziro-data.now.sh?type=okta&firstName=${formattedFName}&lastName=${formattedLName}&email=${this.state.email}&cnpj=${this.state.CNPJ}` })
        .then((response) => {
          axios({ url: `https://ziro-data.now.sh?type=lojistas&cadastro=${response.data.id}&dataCadastro=${response.data.created}&lojista=${formattedFName + ' ' + formattedLName}&cnpj=${this.state.CNPJ}&email=${this.state.email}&whatsapp=${this.state.whatsapp}&hasStore=${this.state.hasStore}&maxPay=${this.state.maxPay}&referral=${this.state.referral}&when=${this.state.when}&monthSpend=${this.state.monthSpend}` })
            .then((response) => {
              this.setState({
                loadingSubmit: false
              })
              console.log(response)
              // It might happen to alert user the signup was a success when it was not
              alert('Cadastro enviado!')
              this.props.history.push('/conta-criada')
            })
        })
        .catch((error) => {
          this.setState({
            loadingSubmit: false,
            errorSubmit: true
          })
          console.log(error)
        })
    } else {
      alert('Corrija os erros!')
    }
  }
  handleGoBack(event) {
    event.preventDefault()
    this.setState({ errorSubmit: false })
  }
  render() {
    return (
      <div>
        {this.state.loadingSubmit
          ? <TellUserToWaitSubmit />
          :					<div>
            {this.state.errorSubmit
              ? <TellUserErrorOccurredSubmit errorSubmit={this.state.errorSubmit} handleGoBack={this.handleGoBack} />
              :							<div>
                {this.state.loadingCNPJ
                  ? <TellUserToWaitCNPJ />
                  :									<div>
                    {this.state.errorValidatingCNPJ
                      ? <TellUserErrorOccurredCNPJ errorNetwork={this.state.errorNetwork} />
                      : <div>
                        {this.state.isCnpjAlreadyRegistered
										    	? <UserAlreadyRegistered />
										    : <RegisterNewUser
                            handleCNPJ={this.handleCNPJ}
                            verifyCNPJ={this.verifyCNPJ}
                            handleForm={this.handleForm}
                            handleSubmit={this.handleSubmit}
                            cnpjValidated={this.state.cnpjValidated}
                            CNPJ={this.state.CNPJ}
                            firstName={this.state.firstName}
                            lastName={this.state.lastName}
                            email={this.state.email}
                            whatsapp={this.state.whatsapp}
                            hasStore={this.state.hasStore}
                            maxPay={this.state.maxPay}
                            referral={this.state.referral}
                            when={this.state.when}
                            monthSpend={this.state.monthSpend}
                          /*  Error messages  */
                            errorFirstName={this.state.errorFirstName}
                            errorLastName={this.state.errorLastName}
                            errorEmail={this.state.errorEmail}
                            errorWhatsapp={this.state.errorWhatsapp}
                            errorHasStore={this.state.errorHasStore}
                            errorMaxPay={this.state.errorMaxPay}
                            errorReferral={this.state.errorReferral}
                            errorWhen={this.state.errorWhen}
                            errorMonthSpend={this.state.errorMonthSpend}
										      />
										    }
								      </div>
                    }
                  </div>
                }
              </div>
            }
          </div>
        }
      </div>
    )
  }
}
