const generateUniqueKey = () => {
  return Math.random().toString(36).substring(2, 10)
}

// @ts-ignore
const exportToJson = (stateData, domain) => {
  const uniqueKey = generateUniqueKey()
  const dataWithKey = {
    uniqueKey: uniqueKey,
    ...stateData,
  }

  const json = JSON.stringify(dataWithKey, null, 2)
  const blob = new Blob([json], { type: 'application/json' })
  const url = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url
  a.download = `visiosnap_${domain}_${uniqueKey}.json`
  a.click()

  URL.revokeObjectURL(url)
}

export default exportToJson
