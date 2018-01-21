export default (statesObject) => {
	const { firstName, lastName, email, whatsapp, hasStore, maxPay, referral, when, monthSpend } = statesObject
	const firstNameIsValid = Boolean(firstName)
	const lastNameIsValid = Boolean(lastName)
	const emailIsValid = Boolean(email) && email.includes('@') && email.includes('.com')
	const whatsappIsValid = whatsapp.toString().length === 10 || whatsapp.toString().length === 11
	const hasStoreIsValid = Boolean(hasStore)
	const maxPayIsValid = Boolean(maxPay)
	const referralIsValid = Boolean(referral)
	const whenIsValid = Boolean(when)
	const monthSpendIsValid = Boolean(monthSpend)
	return {
		firstNameIsValid: firstNameIsValid,
		lastNameIsValid: lastNameIsValid,
		emailIsValid: emailIsValid,
		whatsappIsValid: whatsappIsValid,
		hasStoreIsValid: hasStoreIsValid,
		maxPayIsValid: maxPayIsValid,
		referralIsValid: referralIsValid,
		whenIsValid: whenIsValid,
		monthSpendIsValid: monthSpendIsValid
	}
}
