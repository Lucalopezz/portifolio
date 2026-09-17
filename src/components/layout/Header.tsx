import { Braces, Moon, Sun } from 'lucide-react'
import { useTheme } from '../../hooks/useTheme'

export function Header() {
  const { theme, toggleTheme } = useTheme()
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-page/95 backdrop-blur-md">
      <div className="mx-auto flex min-h-20 max-w-6xl flex-wrap items-center justify-between gap-x-5 px-6 sm:px-10">
        <a
          href="#inicio"
          aria-label="Lucas Lopes — início"
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <Braces size={21} className="text-accent" aria-hidden="true" />
          lucas<span className="text-muted">.dev</span>
        </a>
        <nav
          aria-label="Navegação principal"
          className="order-3 flex w-full items-center justify-between gap-3 overflow-x-auto pb-4 text-sm text-muted sm:order-none sm:w-auto sm:gap-7 sm:pb-0"
        >
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#experiencia">Experiência</a>
          <a href="#contato">Contato</a>
        </nav>
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={`Ativar tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
          className="flex size-10 items-center justify-center rounded-lg border border-line bg-surface text-muted hover:text-ink"
        >
          {theme === 'dark' ? (
            <Sun size={18} aria-hidden="true" />
          ) : (
            <Moon size={18} aria-hidden="true" />
          )}
        </button>
      </div>
    </header>
  )
}
