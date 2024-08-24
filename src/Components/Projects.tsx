import { PROJECTS } from '../data'
import { Button } from './UI/Button'
import { Title } from './UI/Title'
import React from 'assets/React.svg'

export function Projects() {
  return (
    <section className="flex flex-col h-svh py-10 m-auto w-5/6 justify-between">
      <Title title="Projects" extraClass="self-start text-center self-center" />
      <ul className="grid grid-cols-3 w-full gap-8 h-4/5 rounded-lg">
        {PROJECTS.map((project) => {
          return (
            <li key={project.title}>
              <div className="flex flex-col bg-slate-700 rounded-lg h-80 hover:scale-105 transition duration-600 ease-in-out p-2">
                <img
                  className="rounded-lg h-52"
                  src={`../public/projetos/${project.img}`}
                  alt={project.title}
                />
                <h3 className="text-xl text-slate-200 font-bold">
                  {project.title}
                </h3>
                <div className="flex justify-between">
                  <div className="flex gap-5">
                    {project.technologies.map((technique) => {
                      return (
                        <img
                          className="h-6 w-6"
                          src={`${technique}`}
                          alt={technique}
                        />
                      )
                    })}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      extraClass="hover:border-2 hover:border-slate-300 border-slate-700 "
                      textOnly
                    >
                      <a target="_blank" href={project.link}>
                        Visit Project
                      </a>
                    </Button>
                    <Button
                      extraClass="hover:border-2 hover:border-slate-300 border-slate-700"
                      textOnly
                    >
                      <a target="_blank" href={project.repositorio}>
                        Repositorio
                      </a>
                    </Button>
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
