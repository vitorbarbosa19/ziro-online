export default (title) => {
	const titleFirstLetterUpperCaseNoDashNoSlash = title.replace(/\//g,'').replace(/\-/,' ').replace(/\b[a-z]/g, (char) => char.toUpperCase())
	return titleFirstLetterUpperCaseNoDashNoSlash
}