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
      className="mt-12 min-w-0"
    >
      <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h3
            id="secondary-title"
            className="text-xl font-semibold tracking-tight"
          >
            Outras ideias em construção
          </h3>
          <p className="mt-2 text-sm text-muted">
            Projetos pessoais, experimentos e próximos passos.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Projeto anterior"
            aria-controls="secondary-slide"
            onClick={() => move(-1)}
            className="flex size-11 items-center justify-center rounded-lg border border-line hover:bg-surface"
          >
            <ArrowLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Próximo projeto"
            aria-controls="secondary-slide"
            onClick={() => move(1)}
            className="flex size-11 items-center justify-center rounded-lg border border-line hover:bg-surface"
          >
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
      <div
        id="secondary-slide"
        role="group"
        aria-roledescription="slide"
        aria-label={`${active + 1} de ${secondaryProjects.length}: ${project.name}`}
        tabIndex={0}
        className="rounded-xl border border-line bg-surface p-6 sm:p-8"
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
        <div className="flex items-start gap-4 sm:gap-6">
          <Icon
            size={28}
            className="mt-1 shrink-0 text-accent"
            aria-hidden="true"
          />
          <div className="min-w-0">
            <p className="font-mono text-xs text-accent">{project.status}</p>
            <h4 className="mt-3 text-2xl font-semibold">{project.name}</h4>
            <p className="mt-3 max-w-2xl leading-7 text-muted">
              {project.description}
            </p>
            <div className="mt-5 min-h-6 text-sm">
              {project.url ? (
                <ExternalLink href={project.url}>Ver repositório</ExternalLink>
              ) : (
                <span className="text-muted">Ainda não publicado</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
        {/* Announce slide changes without moving keyboard focus to new content. */}
        <p className="text-xs text-muted" aria-live="polite" aria-atomic="true">
          {active + 1} / {secondaryProjects.length} · {project.name}
        </p>
        <div className="flex gap-1" aria-label="Escolher projeto">
          {secondaryProjects.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Mostrar ${item.name}`}
              aria-current={active === index ? 'true' : undefined}
              onClick={() => setActive(index)}
              className="flex size-11 items-center justify-center rounded-lg"
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
      </div>
    </section>
  )
}
