import React from 'react'
import Link from 'next/link'
import classes from './index.module.scss'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  href?: string
  asLink?: boolean
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  type = 'button',
  onClick,
  href,
  asLink = false,
  disabled = false,
  ...props
}) => {
  const buttonClass = `${className} ${classes.button}`

  if (asLink && href) {
    return (
      <Link href={href} className={buttonClass} {...props} passHref>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={buttonClass} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export default Button
