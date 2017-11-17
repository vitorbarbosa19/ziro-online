export default (cnpjNumber) => {
  if (cnpjNumber.replace(/\W/g, '').length === 14) {
    return cnpjNumber.slice(0, 2) + '.' + cnpjNumber.slice(2, 5) + '.' + cnpjNumber.slice(5, 8) + '/' + cnpjNumber.slice(8, 12) + '-' + cnpjNumber.slice(12, 14)
  }
  if (cnpjNumber.replace(/\W/g, '').length > 14) {
  	return cnpjNumber.slice(0, 2) + '.' + cnpjNumber.slice(2, 5) + '.' + cnpjNumber.slice(5, 8) + '/' + cnpjNumber.slice(8, 12) + '-' + cnpjNumber.slice(12, 14)
  }
  return cnpjNumber
}
