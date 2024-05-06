import React, { useState } from 'react'
import data from '@/app/lib/data.json'

import classes from './index.module.scss'
import { Input, Textarea, Button } from '@nextui-org/react'
import { Icon } from '@iconify/react'
//@ts-ignore
import ReCAPTCHA from 'react-google-recaptcha'

export function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const [recaptchaValue, setRecaptchaValue] = useState(null)

  //@ts-ignore
  const handleRecaptcha = value => {
    setRecaptchaValue(value)
  }
  //@ts-ignore
  const handleSubmit = async e => {
    setLoading(true)
    e.preventDefault()

    if ((name == '' && email == '') || recaptchaValue === null) {
      alert('Please enter both name & email id and verify you are not a robot')
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
          alert(`Děkujeme za zájem ${name}! Ozveme se hned jak to bude možné!`)
          setName('')
          setEmail('')
          setMessage('')
        } else {
          alert('Omlouváme se, zkuste to znovu později.')
        }
      })
      .catch(err => {
        setLoading(false)
        alert('Ooops! Někde se stala chyba. Zkuste to později')
      })
    return true
  }

  return (
    <form className={classes.main} onSubmit={handleSubmit}>
      <div className={classes.columns}>
        <Input
          type={data.contact.form.name.type}
          name={data.contact.form.name.name}
          label={data.contact.form.name.label}
          labelPlacement="outside"
          //placeholder={data.contact.form.name.placeholder}
          value={name}
          required={data.contact.form.name.isRequired}
          variant="underlined"
          classNames={{
            input: classes.inputInput,
          }}
          endContent={<Icon icon={data.contact.form.name.icon} className={classes.inputIcon} />}
          onChange={e => setName(e.target.value)}
        />

        <Input
          type={data.contact.form.email.type}
          name={data.contact.form.email.name}
          label={data.contact.form.email.label}
          labelPlacement="outside"
          //placeholder={data.contact.form.email.placeholder}
          value={email}
          required={data.contact.form.email.isRequired}
          variant="underlined"
          classNames={{
            input: classes.inputInput,
          }}
          endContent={<Icon icon={data.contact.form.email.icon} className={classes.inputIcon} />}
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <Textarea
        name={data.contact.form.textarea.name}
        value={message}
        variant="underlined"
        //label={data.contact.form.textarea.label}
        //labelPlacement="outside"
        placeholder={data.contact.form.textarea.placeholder}
        classNames={{
          mainWrapper: 'col-span-12 md:col-span-6',
          label: '',
          input: 'p-2',
        }}
        required={data.contact.form.textarea.isRequired}
        onChange={e => setMessage(e.target.value)}
      />

      <ReCAPTCHA sitekey={`${process.env.NEXT_APP_RECAPTCHA}`} onChange={handleRecaptcha} />

      <Button type="submit" size="lg" radius="none" className={classes.submit}>
        {loading ? <div className={classes.submitLoading}></div> : data.contact.form.submit}
      </Button>
    </form>
  )
}
