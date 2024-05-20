interface Section {
  name: string
  price: number
  time: number
}

type ShowStates = {
  [key: string]: boolean
}

const sections: Section[] = [
  { name: 'hero', price: 0, time: 0 },
  { name: 'about', price: 0, time: 0 },
  { name: 'services', price: 0, time: 0 },
  { name: 'reference', price: 0, time: 0 },
  { name: 'portfolio', price: 1000, time: 0 },
  { name: 'contact', price: 0, time: 0 },
  { name: 'analytics', price: 2000, time: 1 },
  { name: 'analyticsCode', price: 1000, time: 1 },
  { name: 'analyticsSetup', price: 1000, time: 1 },
  { name: 'cookie', price: 500, time: 0 },
]

export function calculateTotals(showStates: ShowStates): { totalPrice: number; totalTime: number } {
  let totalP = 3000
  let totalT = 3

  sections.forEach(section => {
    if (showStates[section.name]) {
      totalP += section.price
      totalT += section.time
    }
  })

  return { totalPrice: totalP, totalTime: totalT }
}
