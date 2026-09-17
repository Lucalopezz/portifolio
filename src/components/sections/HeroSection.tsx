import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Database,
  Server,
  Terminal,
} from 'lucide-react'
import { ExternalLink } from '../ExternalLink'
import { github, linkedin } from '../../data/profile'

export function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="grid items-center gap-14 border-b border-line py-20 lg:grid-cols-[1.3fr_1fr] lg:gap-16 lg:py-28"
    >
      <div>
        <p className="mb-7 flex items-center gap-2.5 font-mono text-xs text-muted">
          <span className="size-2 rounded-full bg-accent" />
          FULL STACK · FOCO EM BACK-END
        </p>
        <p className="mb-3 text-lg text-muted">Olá, sou Lucas Dalossa Lopes.</p>
        <h1
          id="hero-title"
          className="text-5xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-6xl"
        >
          Da ideia à API.
          <br />
          <span className="text-accent">Do código ao uso.</span>
        </h1>
        <p className="mt-7 max-w-lg text-base leading-7 text-muted">
          Desenvolvo aplicações web, gosto de criar APIs e de entender o que
          acontece por trás de cada interface. Atualmente, construo e mantenho
          sistemas na EESC-USP.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            className="inline-flex items-center gap-3 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-on-accent hover:bg-accent-hover"
            href="#projetos"
          >
            Explorar projetos <ArrowDown size={16} aria-hidden="true" />
          </a>
          <a
            className="inline-flex items-center gap-3 rounded-lg border border-line bg-surface px-5 py-3 text-sm font-medium"
            href="#contato"
          >
            Vamos conversar <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="mt-8 flex items-center gap-6 text-sm text-muted">
          <ExternalLink href={github}>
            <Code2 size={16} aria-hidden="true" />
            GitHub
          </ExternalLink>
          <ExternalLink href={linkedin}>LinkedIn</ExternalLink>
        </div>
      </div>
      <div
        className="overflow-hidden rounded-xl border border-line bg-surface shadow-sm"
        aria-label="Áreas de atuação: interface, API e dados"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <span className="flex items-center gap-2 font-mono text-xs text-muted">
            <Terminal size={14} aria-hidden="true" />
            como eu construo
          </span>
          <span className="font-mono text-xs text-accent">~/lucas</span>
        </div>
        <div className="p-6 sm:p-8">
          <p className="mb-6 font-mono text-xs text-muted">
            // Da interface à persistência
          </p>
          <div className="flex items-center gap-4 rounded-lg border border-line p-4">
            <Code2
              className="shrink-0 text-muted"
              size={21}
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-medium">
                Interfaces que fazem sentido
              </p>
              <p className="mt-1 font-mono text-xs text-muted">
                React · Next.js
              </p>
            </div>
          </div>
          <div className="ml-7 h-6 border-l border-dashed border-line" />
          <div className="flex items-center gap-4 rounded-lg border border-accent/40 bg-accent/5 p-4">
            <Server
              className="shrink-0 text-accent"
              size={21}
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-medium">APIs e regras de negócio</p>
              <p className="mt-1 font-mono text-xs text-accent">
                NestJS · Laravel
              </p>
            </div>
          </div>
          <div className="ml-7 h-6 border-l border-dashed border-line" />
          <div className="flex items-center gap-4 rounded-lg border border-line p-4">
            <Database
              className="shrink-0 text-muted"
              size={21}
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-medium">Dados bem estruturados</p>
              <p className="mt-1 font-mono text-xs text-muted">
                PostgreSQL · MySQL · Prisma
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 border-t border-line px-5 py-3 font-mono text-xs text-muted">
          <span className="text-accent">↳</span> meu lugar favorito é no
          back-end.
        </div>
      </div>
    </section>
  )
}
