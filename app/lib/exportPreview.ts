//@ts-ignore
const exportToJson = stateData => {
  const json = JSON.stringify(stateData, null, 2)
  const blob = new Blob([json], { type: 'application/json' })
  const url = URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.href = url
  a.download = 'export.json'
  a.click()

  URL.revokeObjectURL(url)
}

export default exportToJson
