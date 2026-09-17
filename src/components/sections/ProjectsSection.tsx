import { SectionTitle } from '../SectionTitle'
import { ProjectCard } from '../ProjectCard'
import { SecondaryProjects } from '../SecondaryProjects'
import { projects } from '../../data/projects'

export function ProjectsSection() {
  return (
    <section
      id="projetos"
      aria-label="Projetos"
      className="border-b border-line py-20"
    >
      <SectionTitle
        number="02"
        title="Projetos selecionados"
        description="Produtos próprios e construções em equipe. Um pouco dos problemas que resolvo com código."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
      <SecondaryProjects />
    </section>
  )
}
