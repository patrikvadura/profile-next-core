'use client'

import React, { useState } from 'react'
import data from '@/app/lib/data.json'
import Button from '@/app/ui/Button'
import classes from './index.module.scss'

export function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  //@ts-ignore
  const handleSubmit = async e => {
    e.preventDefault()

    if (name == '' && email == '') {
      alert(data.contact.form.alerts.v01)
      return false
    }

    await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
    })
      .then(res => res.json())
      .then(data => {
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
        alert(data.contact.form.alerts.v05)
      })
    return true
  }

  return (
    <form className={classes.main} onSubmit={handleSubmit}>
      <div className={classes.columns}>
        <div className={classes.input}>
          <label htmlFor={data.contact.form.name.name} className={classes.inputLabel}>
            {data.contact.form.name.label}
          </label>

          <input
            type={data.contact.form.name.type}
            name={data.contact.form.name.name}
            value={name}
            id={data.contact.form.name.name}
            autoComplete="name"
            required={data.contact.form.name.isRequired}
            className={classes.inputField}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className={classes.input}>
          <label htmlFor={data.contact.form.email.name} className={classes.inputLabel}>
            {data.contact.form.email.label}
          </label>

          <input
            type={data.contact.form.email.type}
            name={data.contact.form.email.name}
            value={email}
            required={data.contact.form.email.isRequired}
            id={data.contact.form.email.name}
            autoComplete="email"
            className={classes.inputField}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className={classes.input}>
        <label htmlFor={data.contact.form.textarea.name} className={classes.textareaLabel}>
          {data.contact.form.textarea.placeholder}
        </label>

        <textarea
          name={data.contact.form.textarea.name}
          value={message}
          required={data.contact.form.textarea.isRequired}
          id={data.contact.form.textarea.name}
          rows={4}
          className={classes.textarea}
          onChange={e => setMessage(e.target.value)}
        ></textarea>
      </div>

      <Button type="submit" href={data.about.cta.link} className={classes.submit}>
        {data.contact.form.submit}
      </Button>
    </form>
  )
}
