'use client'

import React, { useState } from 'react'
import data from '@/app/lib/data.json'
import classes from './index.module.scss'

export function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  //@ts-ignore
  const handleSubmit = async e => {
    setLoading(true)
    e.preventDefault()

    if (name == '' && email == '') {
      alert(data.contact.form.alerts.v01)
      setLoading(false)
      return false
    }

    await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
    })
      .then(res => res.json())
      .then(data => {
        setLoading(false)
        if (data && data.id) {
          alert(`${data.contact.form.alerts.v02} ${name}! ${data.contact.form.alerts.v03}!`)
          setName('')
          setEmail('')
          setMessage('')
        } else {
          alert(data.contact.form.alerts.v04)
        }
      })
      .catch(err => {
        setLoading(false)
        alert(data.contact.form.alerts.v05)
      })
    return true
  }

  return (
    <form className={classes.main} onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor={data.contact.form.name.name}
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            {data.contact.form.name.label}
          </label>
          <div className="mt-2.5">
            <input
              type={data.contact.form.name.type}
              name={data.contact.form.name.name}
              value={name}
              id={data.contact.form.name.name}
              autoComplete="name"
              required={data.contact.form.name.isRequired}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={e => setName(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor={data.contact.form.email.name}
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            {data.contact.form.email.label}
          </label>
          <div className="mt-2.5">
            <input
              type={data.contact.form.email.type}
              name={data.contact.form.email.name}
              value={email}
              required={data.contact.form.email.isRequired}
              id={data.contact.form.email.name}
              autoComplete="email"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="sm:col-span-2">
        <label
          htmlFor={data.contact.form.textarea.name}
          className="block text-sm font-semibold leading-6 text-gray-900"
        >
          {data.contact.form.textarea.placeholder}
        </label>

        <div className="mt-2.5">
          <textarea
            name={data.contact.form.textarea.name}
            value={message}
            required={data.contact.form.textarea.isRequired}
            id={data.contact.form.textarea.name}
            rows={4}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={e => setMessage(e.target.value)}
          ></textarea>
        </div>
      </div>

      <div className="mt-10">
        <button type="submit" className={classes.submit}>
          {data.contact.form.submit}
        </button>
      </div>
    </form>
  )
}
