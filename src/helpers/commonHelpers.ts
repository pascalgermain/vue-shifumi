export const sleep = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms))

export const ucfirst = (string: string) => string[0].toUpperCase() + string.substr(1)
