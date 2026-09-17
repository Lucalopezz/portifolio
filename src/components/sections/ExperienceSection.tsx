import { ExternalLink } from '../ExternalLink'
import { SectionTitle } from '../SectionTitle'
import { uspdev, contributions } from '../../data/profile'

export function ExperienceSection() {
  return (
    <section
      id="experiencia"
      aria-label="Experiência"
      className="grid gap-10 border-b border-line py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
    >
      <SectionTitle
        number="03"
        title="Código em colaboração"
        description="Experiência prática com sistemas internos e contribuições em projetos de código aberto."
      />
      <div>
        <div className="flex items-start gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-line bg-surface font-mono text-sm font-semibold">
            USP
          </div>
          <div>
            <p className="font-mono text-xs text-accent">FEV 2026 — ATUAL</p>
            <h3 className="mt-2 text-xl font-semibold">
              Estágio em desenvolvimento
            </h3>
            <p className="mt-1 text-sm text-muted">
              STI · Escola de Engenharia de São Carlos
            </p>
          </div>
        </div>
        <p className="mt-6 leading-7 text-muted">
          No meu estágio na STI da EESC-USP, crio e mantenho sistemas internos
          com código público no ecossistema USPdev. Gestão de Projetos,
          Equivalência e API Keys fazem parte dessa experiência. Também apoio a
          equipe em atividades de infraestrutura interna.
        </p>
        <ul className="mt-6 space-y-4 border-l border-line pl-5">
          {contributions.map((item) => (
            <li key={item.repo}>
              <ExternalLink
                href={`${uspdev}/${item.repo}`}
                className="text-sm font-medium"
              >
                {item.name}
              </ExternalLink>
              <p className="mt-1 text-sm text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
          <span>Também no estágio, de uso interno e código aberto:</span>
          <ExternalLink href={`${uspdev}/toolkit`}>toolkit</ExternalLink>
          <ExternalLink href={`${uspdev}/forms`}>forms</ExternalLink>
        </div>
      </div>
    </section>
  )
}
