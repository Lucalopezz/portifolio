import { useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { cn } from '../lib/utils'
import { ExternalLink } from './ExternalLink'
import { secondaryProjects } from '../data/secondaryProjects'

export function SecondaryProjects() {
  const [active, setActive] = useState(0)
  const touchStart = useRef<number | null>(null)
  const project = secondaryProjects[active]
  const Icon = project.icon

  function move(direction: number) {
    // Adding the item count keeps the index positive when wrapping backwards.
    setActive(
      (current) =>
        (current + direction + secondaryProjects.length) %
        secondaryProjects.length,
    )
  }

  return (
    <section
      aria-labelledby="secondary-title"
      aria-roledescription="carrossel"
      className="flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-line bg-surface"
    >
      <div className="border-b border-line px-6 py-5 sm:px-8">
        <div>
          <h3
            id="secondary-title"
            className="text-xl font-semibold tracking-tight sm:text-2xl"
          >
            Outras ideias em construção
          </h3>
          <p className="mt-2 text-sm text-muted">
            Projetos pessoais, experimentos e próximos passos.
          </p>
        </div>
      </div>
      <div
        id="secondary-slide"
        role="group"
        aria-roledescription="slide"
        aria-label={`${active + 1} de ${secondaryProjects.length}: ${project.name}`}
        tabIndex={0}
        className="min-w-0 flex-1 p-6 sm:p-8"
        onKeyDown={(event) => {
          // Only handle keys on the slide itself; nested links keep their native behavior.
          if (event.target !== event.currentTarget) return
          if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault()
            move(event.key === 'ArrowRight' ? 1 : -1)
          }
        }}
        onTouchStart={(event) => {
          touchStart.current = event.touches[0].clientX
        }}
        onTouchCancel={() => {
          touchStart.current = null
        }}
        onTouchEnd={(event) => {
          if (touchStart.current === null) return
          const distance = event.changedTouches[0].clientX - touchStart.current
          // Ignore short touch movements so a tap does not accidentally change slides.
          if (Math.abs(distance) > 60) move(distance < 0 ? 1 : -1)
          touchStart.current = null
        }}
      >
        <div className="flex min-w-0 items-start gap-4 sm:gap-6">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-line bg-tint sm:size-14">
            <Icon size={24} className="text-accent" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <span className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
              {project.status}
            </span>
            <h4 className="mt-5 text-2xl font-semibold tracking-tight sm:text-3xl">
              {project.name}<span className="text-accent">.</span>
            </h4>
            <p className="mt-3 max-w-2xl leading-7 text-muted">
              {project.description}
            </p>
            <div className="mt-6 min-h-6 text-sm">
              {project.url ? (
                <ExternalLink href={project.url}>Ver repositório</ExternalLink>
              ) : (
                <span className="text-muted">Ainda não publicado</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-line bg-tint px-6 py-2 sm:px-8">
        {/* Announce slide changes without moving keyboard focus to new content. */}
        <p className="text-xs text-muted" aria-live="polite" aria-atomic="true">
          {active + 1} / {secondaryProjects.length} · {project.name}
        </p>
        <div className="flex items-center gap-1">
          <div className="flex" aria-label="Escolher projeto">
            {secondaryProjects.map((item, index) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Mostrar ${item.name}`}
                aria-current={active === index ? 'true' : undefined}
                onClick={() => setActive(index)}
                className="flex size-10 items-center justify-center rounded-lg"
              >
                <span
                  className={cn(
                    'h-1.5 rounded-full',
                    active === index ? 'w-6 bg-accent' : 'w-2 bg-muted/50',
                  )}
                />
              </button>
            ))}
          </div>
          <button
            type="button"
            aria-label="Projeto anterior"
            aria-controls="secondary-slide"
            onClick={() => move(-1)}
            className="flex size-10 items-center justify-center rounded-lg border border-line bg-surface hover:bg-page"
          >
            <ArrowLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Próximo projeto"
            aria-controls="secondary-slide"
            onClick={() => move(1)}
            className="flex size-10 items-center justify-center rounded-lg border border-line bg-surface hover:bg-page"
          >
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
