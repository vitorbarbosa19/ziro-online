export default (cnpjNumber) => {
	const chars = cnpjNumber.split('')
  return `${(chars[0] || '0')}${(chars[1] || '0')}.${(chars[2] || '0')}${(chars[3] || '0')}${(chars[4] || '0')}.${(chars[5] || '0')}${(chars[6] || '0')}${(chars[7] || '0')}/${(chars[8] || '0')}${(chars[9] || '0')}${(chars[10] || '0')}${(chars[11] || '0')}-${(chars[12] || '0')}${(chars[13] || '0')}`
}
