const generateUniqueKey = (): string => {
  return Math.random().toString(36).substring(2, 10)
}

const exportToJson = async (stateData: Record<string, any>, domain: string) => {
  const uniqueKey = generateUniqueKey()
  const createdAt = new Date().toISOString() // Přidání aktuálního data a času

  const dataWithKey = {
    uniqueKey: uniqueKey,
    createdAt: createdAt,
    ...stateData,
  }

  // Save to MongoDB
  try {
    const response = await fetch('/api/saveData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataWithKey),
    })

    const result = await response.json()

    if (!result.success) {
      console.error('Failed to save data to MongoDB:', result.error)
    } else {
      console.log('Data successfully saved to MongoDB:', result.data)
    }
  } catch (error) {
    console.error('Error saving data to MongoDB:', error)
  }

  // Save to JSON file
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
