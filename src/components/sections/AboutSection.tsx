import { Code2, Database, GraduationCap, Server } from 'lucide-react'
import { Tags } from '../Tags'

export function AboutSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="about-title"
      className="grid gap-10 border-b border-line py-20 md:grid-cols-[1fr_1.25fr] md:gap-20"
    >
      <div>
        <p className="mb-3 font-mono text-xs tracking-wider text-accent">
          01 / SOBRE MIM
        </p>
        <h2
          id="about-title"
          className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
        >
          Curiosidade para entender.
          <br />
          Código para resolver.
        </h2>
        <p className="mt-5 leading-7 text-muted">
          Sou estudante de Engenharia de Software no Instituto Federal de São
          Carlos, no 4º semestre. Gosto de transformar problemas em aplicações
          úteis e de participar de projetos em equipe.
        </p>
        <p className="mt-4 leading-7 text-muted">
          Gosto muito da área de tecnologia e estou sempre estudando para
          aprofundar meus conhecimentos e colocar novas ideias em prática. Minha
          base está em TypeScript e PHP. O back-end é onde mais gosto de
          trabalhar, especialmente criando APIs. Agora, também estou explorando
          Go e infraestrutura.
        </p>
        <div className="mt-6 flex items-start gap-3 text-sm text-muted">
          <GraduationCap
            size={20}
            className="shrink-0 text-accent"
            aria-hidden="true"
          />
          <div className="space-y-3">
            <p>
              Engenharia de Software · IFSP São Carlos
              <br />
              <span className="text-xs">Em andamento · 4º semestre</span>
            </p>
            <p>
              Ensino médio integrado ao Técnico em Redes de Computadores
              <br />
              <span className="text-xs">IFSP Câmpus Catanduva · Concluído</span>
            </p>
          </div>
        </div>
      </div>
      <div className="self-center space-y-6">
        {[
          {
            label: 'No back-end',
            icon: Server,
            items: ['TypeScript', 'NestJS', 'PHP', 'Laravel'],
          },
          {
            label: 'No front-end',
            icon: Code2,
            items: ['React', 'Next.js', 'TypeScript'],
          },
          {
            label: 'Nos projetos',
            icon: Database,
            items: ['PostgreSQL', 'MySQL', 'Prisma', 'BullMQ'],
          },
        ].map(({ label, icon: Icon, items }) => (
          <div key={label}>
            <h3 className="mb-3 flex items-center gap-2 text-sm font-medium">
              <Icon size={16} className="text-muted" aria-hidden="true" />
              {label}
            </h3>
            <Tags items={items} />
          </div>
        ))}
        <p className="border-t border-line pt-5 text-sm text-muted">
          <span className="font-mono text-accent">Aprendendo agora ↗</span>
          <br />
          <span className="mt-2 inline-block">Go e infraestrutura</span>
        </p>
      </div>
    </section>
  )
}
