import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  as?: 'button' | 'a'
  href?: string
  className?: string
  children: React.ReactNode
}

export default function Button({
  children,
  variant = 'primary',
  as = 'button',
  href,
  className = '',
  ...props
}: ButtonProps) {
  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-[var(--color-navy-900)] text-[var(--color-ivory-50)] border-[var(--color-navy-900)] hover:bg-[var(--color-navy-700)]',
    secondary: 'bg-transparent text-[var(--color-navy-900)] border-[var(--color-navy-900)] hover:bg-[var(--color-ivory-100)]',
    ghost: 'bg-transparent text-[var(--color-navy-700)] border-transparent hover:bg-[var(--color-ivory-100)]'
  }

  const shared = `inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${variants[variant]} ${className}`

  if (as === 'a') {
    return (
      <a href={href} className={shared} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button className={shared} {...props}>
      {children}
    </button>
  )
}
