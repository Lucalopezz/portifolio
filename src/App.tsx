import { Code2 } from 'lucide-react'

function App() {
  return (
    <main className="flex min-h-svh items-center justify-center px-6 py-16">
      <section className="w-full max-w-2xl" aria-labelledby="portfolio-title">
        <Code2 className="mb-6 size-10 text-emerald-400" aria-hidden="true" />
        <p className="text-sm font-medium uppercase tracking-widest text-emerald-400">
          Em construção
        </p>
        <h1
          id="portfolio-title"
          className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl"
        >
          Meu portfólio
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-400">
          Em breve, meus projetos, habilidades e experiências em desenvolvimento
          web estarão por aqui.
        </p>
      </section>
    </main>
  )
}

export default App
