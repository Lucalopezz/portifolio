import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { ExperienceSection } from './components/sections/ExperienceSection'
import { ContactSection } from './components/sections/ContactSection'

function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="fixed left-4 top-4 z-50 -translate-y-24 rounded-lg bg-accent px-4 py-3 text-on-accent focus:translate-y-0"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main
        id="conteudo"
        tabIndex={-1}
        className="mx-auto max-w-6xl px-6 sm:px-10"
      >
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
