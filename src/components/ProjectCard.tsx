import { Check, Layers } from 'lucide-react'
import { cn } from '../lib/utils'
import type { Project } from '../data/projects'
import { ExternalLink } from './ExternalLink'
import { ProjectImagesCarousel } from './ProjectImagesCarousel'
import { Tags } from './Tags'

export function ProjectCard({ project }: { project: Project }) {
  const images = project.images ?? []
  const hasImages = images.length > 0
  const featured = hasImages || Boolean(project.features)

  return (
    <article
      className={cn(
        'overflow-hidden rounded-xl border border-line bg-surface',
        featured && 'md:col-span-2',
      )}
    >
      <div
        className={cn(
          featured && 'lg:grid',
          hasImages
            ? 'lg:grid-cols-[1fr_1.08fr]'
            : project.features && 'lg:grid-cols-[1.25fr_1fr]',
        )}
      >
        <div className="flex min-w-0 flex-col p-6 sm:p-8">
          <div className="mb-5 flex flex-wrap items-center gap-3 font-mono text-xs">
            <span className="rounded-full bg-accent/10 px-3 py-1 text-accent">
              {project.category}
            </span>
            <span className="text-muted">{project.status}</span>
          </div>
          <h3
            className={cn(
              'font-semibold tracking-tight',
              featured ? 'text-3xl' : 'text-2xl',
            )}
          >
            {project.name}
            {featured && <span className="text-accent">.</span>}
          </h3>
          <p className="mt-4 leading-7 text-muted">{project.description}</p>
          <p className="mt-4 text-sm leading-6 text-muted">
            <strong className="font-medium text-ink">
              Minha participação:
            </strong>{' '}
            {project.contribution}
          </p>
          <div className="mt-6">
            <Tags items={project.tags} />
          </div>
          {!project.features && (
            <details className="mt-5 text-sm">
              <summary className="cursor-pointer text-muted">
                Mais sobre o projeto
              </summary>
              <p className="mt-3 leading-6 text-muted">{project.detail}</p>
            </details>
          )}
          {project.features && hasImages && (
            <details className="mt-5 text-sm">
              <summary className="cursor-pointer text-muted">
                Recursos e desafio técnico
              </summary>
              <ul className="mt-3 list-inside list-disc space-y-1 leading-6 text-muted">
                {project.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-3 leading-6 text-muted">{project.detail}</p>
            </details>
          )}
          <div className="mt-auto flex flex-wrap gap-x-5 gap-y-3 pt-7 text-sm">
            {project.links.map((link, index) => (
              <ExternalLink
                key={link.url}
                href={link.url}
                className={
                  index === 0 ? 'font-medium text-accent' : 'text-muted'
                }
              >
                {link.label}
              </ExternalLink>
            ))}
          </div>
        </div>

        {hasImages && (
          <ProjectImagesCarousel projectName={project.name} images={images} />
        )}

        {project.features && !hasImages && (
          <div className="border-t border-line bg-tint p-6 sm:p-8 lg:border-t-0 lg:border-l">
            <p className="mb-5 font-mono text-xs tracking-wider text-muted">
              POR TRÁS DO PROJETO
            </p>
            <ul className="space-y-4">
              {project.features.map((item) => (
                <li className="flex gap-3 text-sm leading-6" key={item}>
                  <Check
                    size={16}
                    className="mt-1 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-7 rounded-lg border border-line bg-surface p-4">
              <p className="flex items-center gap-2 text-sm font-medium">
                <Layers size={16} className="text-accent" aria-hidden="true" />O
                desafio das filas
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">
                {project.detail}
              </p>
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
