export default (statesObject) => {
	const { firstName, lastName, email, whatsapp, hasStore, maxPay, referral, when } = statesObject
	const firstNameIsValid = Boolean(firstName)
	const lastNameIsValid = Boolean(lastName)
	const emailIsValid = Boolean(email) && email.includes('@') && email.includes('.com')
	return {
		firstNameIsValid: firstNameIsValid,
		lastNameIsValid: lastNameIsValid,
		emailIsValid: emailIsValid
	}
}
