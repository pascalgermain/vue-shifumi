export const sleep = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms))

export const ucfirst = (string: string, lower = false) => {
  if (lower) string = string.toLowerCase()
  return string[0].toUpperCase() + string.substr(1)
}
