import { PROJECTS } from "../data";
import { SectionHeader } from "./UI/SectionHeader";
import { ProjectCard } from "./UI/ProjectCard";

export function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
        <SectionHeader
          title="Projetos"
          description="Explore minha coleção de projetos desenvolvidos com as mais recentes tecnologias. Cada projeto representa uma jornada de aprendizado e inovação."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
