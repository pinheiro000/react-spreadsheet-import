const booleanWhitelist: Record<string, boolean> = {
  yes: true,
  no: false,
  true: true,
  false: false,
  sim: true,
  não: false,
  nao: false,
  s: true,
  n: false,
}

export const normalizeCheckboxValue = (value: string | undefined): boolean => {
  if (value && value.toLowerCase() in booleanWhitelist) {
    return booleanWhitelist[value.toLowerCase()]
  }
  return false
}
