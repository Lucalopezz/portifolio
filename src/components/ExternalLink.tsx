import type { ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '../lib/utils'

export function ExternalLink({
  href,
  children,
  className,
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        'inline-flex items-center gap-2 hover:underline underline-offset-4',
        className,
      )}
    >
      {children}
      <ArrowUpRight size={15} aria-hidden="true" />
      <span className="sr-only"> (abre em nova aba)</span>
    </a>
  )
}
