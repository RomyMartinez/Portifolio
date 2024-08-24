import github from '../assets/Github.svg'
import linkedin from '../assets/linkedin.svg'

import { Button } from './UI/Button'

export function Introduction() {
  return (
    <section className="flex flex-col justify-self-center w-screen h-svh justify-center items-center gap-4 ">
      <div className="h-min rounded-md">
        <h1 className=" text-6xl text-slate-700 text-center bg-clip-text font-bold uppercase">
          Desenvolvedor Full-Stack <br />
          Romy Manuel Martinez Nava
        </h1>
      </div>
      <div className="flex w-full justify-center gap-2">
        <a href="https://github.com/RomyMartinez" target="_blank">
          <img src={github} className="h-12" />
        </a>
        <a
          href="https://www.linkedin.com/in/romy-martinez-nava"
          target="_blank"
        >
          <img src={linkedin} className="h-12" />
        </a>
      </div>
      <Button extraClass="text-2xl font-semibold transition duration-600 ease-in-out hover:scale-105 ">
        Projects
      </Button>
    </section>
  )
}
