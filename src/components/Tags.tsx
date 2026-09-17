export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Tecnologias">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-xs text-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}
