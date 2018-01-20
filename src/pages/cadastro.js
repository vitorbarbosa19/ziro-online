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
      loadingCNPJ: false,
      loadingSubmit: false,
      cnpjValidated: false,
      isCnpjAlreadyRegistered: false,
      errorValidatingCNPJ: false,
      errorNetwork: false,
      errorSubmit: false
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
          return leadInfo[1]
        }).find((cnpj) => {
          return (cnpj === this.state.CNPJ.toString())
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
    switch (event.target.name) {
    case 'firstName':
      this.setState({ firstName: event.target.value })
      break
    case 'lastName':
      this.setState({ lastName: event.target.value })
      break
    case 'email':
      this.setState({ email: event.target.value })
      break
    case 'whatsapp':
      this.setState({ whatsapp: event.target.value })
      break
    case 'hasStore':
      this.setState({ hasStore: event.target.value })
      break
    case 'maxPay':
      this.setState({ maxPay: event.target.value })
      break
    case 'referral':
      if (event.target.value === 'Já sou cliente') {
        this.setState({ referral: event.target.value, when: 'N/A - Já era cliente' })
      } else	{
        this.setState({ referral: event.target.value })
      }
      break
    case 'when':
      this.setState({ when: event.target.value })
    }
  }
  handleSubmit(event) {
    event.preventDefault()
    if (validateForm(this.state)) {
      // send lead information to Okta API and Google spreadsheet
      this.setState({ loadingSubmit: true })
      axios({
        url: `https://ziro-data.now.sh?
					type=lojistas&
					firstName=${this.state.firstName}&
					lastName=${this.state.lastName}&
					name=${this.state.firstName + '' + this.state.lastName}&
					cnpj=${this.state.CNPJ}&
					email=${this.state.email}&
					whatsapp=${this.state.whatsapp}&
					hasStore=${this.state.hasStore}&
					maxPay=${this.state.maxPay}&
					referral=${this.state.referral}&
					when=${this.state.when}`,
        method: 'post'
      })
        .then((response) => {
          this.setState({
            loadingSubmit: false
          })
          console.log(response)
          // It might happen to alert user the signup was a success when it was not
          alert('Cadastro enviado!')
          this.props.history.push('/conta-criada')
        })
        .catch((error) => {
          this.setState({
            loadingSubmit: false,
            errorSubmit: true
          })
          console.log(error)
        })
    } else {
      alert('Preencha todos os campos de cadastro!')
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
