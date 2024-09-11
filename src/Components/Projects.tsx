import { PROJECTS } from '../data'
import { Button } from './UI/Button'
import { Title } from './UI/Title'
import { Icon } from './UI/Icon'

export function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col h-svh py-10 mx-auto w-5/6  justify-between"
    >
      <Title title="Projects" extraClass="self-start text-center self-center" />
      <ul className="grid grid-cols-3 w-full gap-8 h-4/5 rounded-lg">
        {PROJECTS.map((project) => {
          return (
            <li key={project.title}>
              <div className="flex flex-col shadow-lg bg-slate-100 border-2 border-slate-800  rounded-lg h-80 hover:scale-105 transition duration-600 ease-in-out p-2">
                <img
                  className="rounded-lg h-52"
                  src={`https://portifolio-five-chi-10.vercel.app/projetos/${project.img}`}
                  alt={project.title}
                />
                <h3 className="text-xl text-slate-800 font-bold p-2">
                  {project.title}
                </h3>
                <div className="flex justify-between px-1">
                  <div className="flex gap-5">
                    <ul className="flex  items-center">
                      {project.technologies.map((technique) => {
                        return (
                          <li key={technique}>
                            <Icon name={technique} />
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                  <div className="flex gap-2 font-semibold">
                    <a target="_blank" href={project.link}>
                      <Button extraClass="">Visit Project</Button>
                    </a>
                    <a target="_blank" href={project.repositorio}>
                      <Button>Repositorio</Button>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
