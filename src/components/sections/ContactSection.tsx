import { ArrowRight, Mail } from 'lucide-react'
import { ExternalLink } from '../ExternalLink'
import { github, linkedin } from '../../data/profile'

export function ContactSection() {
  return (
    <section
      id="contato"
      aria-labelledby="contact-title"
      className="py-20 sm:py-24"
    >
      <p className="mb-4 font-mono text-xs tracking-wider text-accent">
        04 / CONTATO
      </p>
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <h2
            id="contact-title"
            className="text-4xl font-semibold tracking-tight sm:text-5xl"
          >
            Vamos trocar uma ideia<span className="text-accent">?</span>
          </h2>
          <p className="mt-5 max-w-lg leading-7 text-muted">
            Sobre back-end, um projeto interessante ou uma oportunidade de
            construir algo juntos.
          </p>
        </div>
        <a
          href="mailto:lopslucas12@gmail.com"
          className="inline-flex w-fit shrink-0 items-center gap-3 rounded-lg bg-accent px-5 py-3.5 text-sm font-semibold text-on-accent hover:bg-accent-hover"
        >
          Entrar em contato <ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>
      <div className="mt-9 flex flex-wrap gap-x-7 gap-y-4 text-sm text-muted">
        <a
          className="inline-flex items-center gap-2 break-all"
          href="mailto:lopslucas12@gmail.com"
        >
          <Mail size={16} className="shrink-0" aria-hidden="true" />
          lopslucas12@gmail.com
        </a>
        <ExternalLink href={github}>GitHub</ExternalLink>
        <ExternalLink href={linkedin}>LinkedIn</ExternalLink>
      </div>
    </section>
  )
}
