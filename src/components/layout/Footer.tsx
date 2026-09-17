import { ArrowUpRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 text-xs text-muted sm:px-10">
        <p>© {new Date().getFullYear()} Lucas Dalossa Lopes</p>
        <a href="#inicio" className="flex items-center gap-2 font-mono">
          Feito com intenção e código.{' '}
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
