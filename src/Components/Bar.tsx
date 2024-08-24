interface LinkToSectionProps {
  section: string
  children: React.ReactNode
}

function LinkToSection({ section, children }: LinkToSectionProps) {
  return (
    <a href={`#${section}`} className="no-underline hover:text-slate-500">
      {children}
    </a>
  )
}

export function Bar() {
  return (
    <header className="flex font-medium text-2xl flex-row w-screen items-center justify-around px-4 py-1 h-min mt-5 ">
      <div>
        <h1 className="text-5xl">&lt;Romy /&gt;</h1>
      </div>
      <div className="flex flex-row space-x-10 text-slate-600">
        <LinkToSection section="about">About Me</LinkToSection>
        <LinkToSection section="projects">Projects</LinkToSection>
        <LinkToSection section="contact">Contact</LinkToSection>
      </div>
    </header>
  )
}
