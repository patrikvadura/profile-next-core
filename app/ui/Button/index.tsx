import React from 'react'
import Link from 'next/link'
import classes from './index.module.scss'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  style?: any
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  href?: string
  asLink?: boolean
  target?: '_blank' | '_self'
  disabled?: boolean
  ariaLabel?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  style,
  type = 'button',
  onClick,
  href,
  asLink = false,
  target = '_blank',
  disabled = false,
  ariaLabel,
  ...props
}) => {
  const buttonClass = `${classes.button} ${className}`

  if (asLink && href) {
    return (
      <Link href={href} className={buttonClass} target={target} style={style} {...props} passHref>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClass}
      style={style}
      disabled={disabled}
      aria-label={ariaLabel || 'Tlačítko'}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
