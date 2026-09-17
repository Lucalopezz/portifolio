export function SectionTitle({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <div className="mb-9">
      <p className="mb-3 font-mono text-xs tracking-wider text-accent">
        {number} / {title.toLocaleUpperCase('pt-BR')}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-3 max-w-xl leading-relaxed text-muted">{description}</p>
    </div>
  )
}
