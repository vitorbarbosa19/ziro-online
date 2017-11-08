export default (title) => {
	let titleFirstLetterUpperCaseNoDashNoSlash = title.replace(/\//g,'').replace(/\-/,' ').replace(/\b[a-z]/g, (char) => char.toUpperCase())
	if(title === '/precos')
		titleFirstLetterUpperCaseNoDashNoSlash = titleFirstLetterUpperCaseNoDashNoSlash.replace(/c/,'ç')
	return titleFirstLetterUpperCaseNoDashNoSlash
}