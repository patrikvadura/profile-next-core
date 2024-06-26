import React from 'react'
import Accordion from '@/app/ui/Accordion'

const faqItems = [
  {
    title: 'Kdy bude moje vizitka hotová?',
    content:
      'Vaši vizitku vám zhotovíme v termínu, který vám byl vypočten pomocí naší kalkulačky v pravé části pod cenou.',
  },
  {
    title: 'Je něco dalšího potřeba z mojí strany?',
    content:
      'Pokud jste zvolili možnost, že doménu kód pro převod domény prozatím nemáte, pak vás ještě čeká dotat tenhle kód, abychom vaši vizitku mohli dokončit. Totéž se týká toho, pokud jste zvolili možnosti "Nastavím si sám DNS záznamy", v takovém případě nemžeme spustit vaši vizitku dříve než nastavení provedete.',
  },
  {
    title: 'How to use an Accordion?',
    content: 'Click on the title of each accordion item to open or close it.',
  },
]

const FAQ: React.FC = () => {
  return (
    <div className="py-4">
      <h1 className="text-lg font-bold mb-4">Často kladené dotazy</h1>
      <Accordion items={faqItems} />
    </div>
  )
}

export default FAQ
