'use client'
import React, { useState, FormEvent } from 'react'
import { useDomain } from '@/app/components/Customizer/DNSChecker/DomainContext'
import { Check } from '@/app/ui/Icons/Check'
import { Close } from '@/app/ui/Icons/Close'
import { Input } from '@/app/ui/Input'
import Button from '@/app/ui/Button'

type Props = {
  layout?: 'row' | 'col'
  classInput?: string
  classButton?: string
  buttonText?: string
}

export default function DNSChecker({
  layout = 'col',
  classInput,
  classButton = 'bg-[#E5E5E9]',
  buttonText = 'Ověřit',
}: Props) {
  const { domain, setDomain, availability, setAvailability } = useDomain()

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  const checkDomain = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    if (setAvailability) {
      setAvailability(null)
    }

    try {
      const response = await fetch('/api/check-domain', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ domain }),
      })

      const data = await response.json()

      if (response.ok) {
        if (setAvailability) {
          setAvailability(data.available)
        }
      } else {
        setError(data.error || 'An error occurred')
      }
    } catch (err) {
      setError('An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <form
        onSubmit={checkDomain}
        className={`${
          layout === 'col'
            ? 'flex flex-col items-start space-y-4'
            : 'flex flex-row justify-start items-center space-x-2'
        }`}
      >
        <div className="relative">
          <Input
            type="text"
            value={domain}
            onChange={(e: { target: { value: string } }) =>
              setDomain ? setDomain(e.target.value) : ''
            }
            classInput={classInput}
            placeholder="Vložte doménové jméno"
            isRequired
          />

          {availability !== null && !loading && (
            <span
              className={`${
                availability ? 'bg-[#72E790]' : 'bg-[#FF7070]'
              } absolute right-2 top-1/2 p-0.5 -translate-y-1/2 rounded-full`}
            >
              {availability ? (
                <Check size={16} className="text-white" />
              ) : (
                <Close size={16} className="text-white" />
              )}
            </span>
          )}
        </div>

        {loading && <p>Kontroluji...</p>}
        {availability !== null && (
          <p className="text-sm text-black text-opacity-75">
            Doména <b>{domain}</b> je {availability ? 'dostupná' : 'obsazená'}.
          </p>
        )}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <Button type="submit" className={`${classButton} !px-4 !py-2 rounded-full !normal-case`}>
          {buttonText}
        </Button>
      </form>
    </div>
  )
}
