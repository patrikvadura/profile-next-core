'use client'
import React, { useState, FormEvent } from 'react'
import { useDomain } from '@/app/components/Customizer/DNSChecker/DomainContext'
import { Icon } from '@iconify/react'
import { Check } from '@/app/ui/Icons/Check'
import { Close } from '@/app/ui/Icons/Close'
import { Input } from '@/app/ui/Input'
import Button from '@/app/ui/Button'
import Link from 'next/link'

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
      const response = await fetch('/api/verify-domain', {
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
        if (!data.available && data.error) {
          setError(data.error)
        }
      } else {
        setError(data.error || 'Došlo k chybě při ověřování domény')
      }
    } catch (err) {
      setError('Došlo k chybě při ověřování domény')
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

        {error && (
          <p className="text-sm font-semibold text-red-500 text-opacity-75">
            <Icon
              icon="material-symbols:error-circle-rounded-outline-sharp"
              className="inline mr-1 text-lg"
            ></Icon>
            {error}
          </p>
        )}

        <div className="flex flex-row space-x-2">
          <Button type="submit" className={`${classButton} !px-4 !py-2 rounded-full !normal-case`}>
            {buttonText}
          </Button>

          {error && (
            <Button
              asLink
              href={`/websites/${domain}`}
              className={`bg-[#E5E5E9] bg-opacity-50 !px-4 !py-2 rounded-full !normal-case`}
            >
              Přejít na web
            </Button>
          )}
        </div>

        {error && (
          <p className="text-sm text-black text-opacity-50">
            Je tenhle web tvůj? Smazat nebo upravit tenhle web můžeš v sekci{' '}
            <Link href="/studio/websites" target="_blank" className="underline font-semibold">
              Tvoje weby
            </Link>
            .
          </p>
        )}
      </form>
    </div>
  )
}
