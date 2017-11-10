export default (statesObject) => {
  const formStatesArray = Object.values(statesObject).splice(0, 9) // there are 9 fields in the form
  return formStatesArray.every((state) => {
    return state !== ''
  })
}
