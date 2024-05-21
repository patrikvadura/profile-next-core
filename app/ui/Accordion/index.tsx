'use client'
import React, { useState, FunctionComponent } from 'react'
import { ChevronDown } from '@/app/ui/Icons/Chevron/Down'
import { ChevronUp } from '@/app/ui/Icons/Chevron/Up'

type AccordionItem = {
  title: string
  content: string
}

type AccordionProps = {
  items: AccordionItem[]
  className?: string
}

const Accordion: FunctionComponent<AccordionProps> = ({ items, className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="flex flex-col w-full">
      {items.map((item, index) => (
        <div key={index} className="mb-2">
          <button
            className="flex justify-between items-center w-full py-2 border-b-2 border-b-transparent hover:border-b-gray-100"
            onClick={() => toggleItem(index)}
          >
            <span className="font-semibold">{item.title}</span>
            <span>{openIndex === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}</span>
          </button>
          {openIndex === index && (
            <div className="text-black text-sm text-opacity-75 w-full py-2 mt-2">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Accordion
