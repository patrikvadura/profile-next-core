import React, { useState } from 'react'
import data from '@/app/lib/data.json'
import Button from '@/app/ui/Button'
import { getBreakpointStyles } from '@/app/lib/breakpointHelper'

interface Props {
  recipient: string
  breakpoint?: any | undefined
  preview?: boolean
}

export function Form({ recipient, breakpoint, preview }: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    if (name === '' && email === '') {
      alert('Prosím vyplňte jméno i emailovou adresu.')
      setIsSubmitting(false)
      return false
    }

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message, recipient }),
      })

      const result = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setError('Omlouváme se, zkuste to znovu později.')
      }
    } catch (error) {
      console.error('An error occurred while sending the form:', error)
      setError('Omlouváme se, zkuste to znovu později.')
    } finally {
      setIsSubmitting(false)
    }

    return true
  }

  const inputClass = 'flex flex-col gap-2'
  const inputFieldClass =
    'block w-full border-0 px-3.5 py-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
  const inputLabelClass =
    'block text-sm font-semibold leading-6 text-[var(--contact-typo)] dark:text-white'
  const textareaClass =
    'block w-full border-0 px-3.5 py-2 text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
  const textareaLabelClass = 'block text-sm font-semibold leading-6 text-[var(--contact-typo)]'

  return (
    <form
      className={getBreakpointStyles('w-full flex flex-col gap-6', breakpoint, preview)}
      onSubmit={handleSubmit}
    >
      <div
        className={getBreakpointStyles(
          'grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2',
          breakpoint,
          preview,
        )}
      >
        <div className={getBreakpointStyles(inputClass, breakpoint, preview)}>
          <label
            htmlFor={data.contact.form.name.name}
            className={getBreakpointStyles(inputLabelClass, breakpoint, preview)}
          >
            {data.contact.form.name.label}
          </label>

          <input
            type={data.contact.form.name.type}
            name={data.contact.form.name.name}
            value={name}
            id={data.contact.form.name.name}
            autoComplete="name"
            required={data.contact.form.name.isRequired}
            className={getBreakpointStyles(inputFieldClass, breakpoint, preview)}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className={getBreakpointStyles(inputClass, breakpoint, preview)}>
          <label
            htmlFor={data.contact.form.email.name}
            className={getBreakpointStyles(inputLabelClass, breakpoint, preview)}
          >
            {data.contact.form.email.label}
          </label>

          <input
            type={data.contact.form.email.type}
            name={data.contact.form.email.name}
            value={email}
            required={data.contact.form.email.isRequired}
            id={data.contact.form.email.name}
            autoComplete="email"
            className={getBreakpointStyles(inputFieldClass, breakpoint, preview)}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className={getBreakpointStyles(inputClass, breakpoint, preview)}>
        <label
          htmlFor={data.contact.form.textarea.name}
          className={getBreakpointStyles(textareaLabelClass, breakpoint, preview)}
        >
          {data.contact.form.textarea.placeholder}
        </label>

        <textarea
          name={data.contact.form.textarea.name}
          value={message}
          required={data.contact.form.textarea.isRequired}
          id={data.contact.form.textarea.name}
          rows={4}
          className={getBreakpointStyles(textareaClass, breakpoint, preview)}
          onChange={e => setMessage(e.target.value)}
        ></textarea>
      </div>

      {isSubmitted ? (
        <p className="text-green-600 font-semibold text-center">Děkujeme za vaši zprávu</p>
      ) : (
        <Button
          type="submit"
          className={getBreakpointStyles(
            'flex justify-center w-full text-center bg-[var(--contact-accent-bg)] dark:bg-white text-[var(--contact-accent-fg)] dark:text-black',
            breakpoint,
            preview,
          )}
          ariaLabel="Odeslat zprávu"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Odesílám zprávu...' : 'Odeslat zprávu'}
        </Button>
      )}

      {error && <p className="text-red-500 font-semibold text-center">{error}</p>}
    </form>
  )
}
