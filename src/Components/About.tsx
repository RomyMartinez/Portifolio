import { Title } from './UI/Title'
import Romy from '../assets/Romy.jpg'
export function About() {
  return (
    <>
      <section
        id="about"
        className="flex h-screen justify-around items-center w-3/4 m-auto"
      >
        <article className="flex flex-col gap-10 justify-center items-center text-justify w-2/5">
          <Title title="About Me" />
          <p className=" text-slate-600  leading-8">
            <p>
              Eu sou Romy Martinez, um desenvolvedor Front-End de 19 anos com
              uma sólida base em React, CSS, JavaScript, HTML, e Next.js. Estou
              empenhado em expandir meus conhecimentos para o Back-End, com o
              objetivo de me tornar um desenvolvedor FullStack completo.
            </p>
            <br />
            <p>
              Atualmente, moro no estado do Rio de Janeiro e estou cursando
              Sistemas de Informação no Instituto Federal de Educação, Ciência e
              Tecnologia Fluminense (IFF), campus Centro em Campos dos
              Goytacazes. Minha formação acadêmica, aliada ao meu conhecimento
              prático nas tecnologias mencionadas, me permite criar interfaces
              dinâmicas e responsivas que proporcionam uma excelente experiência
              ao usuário.
            </p>
            <br />
            <p>
              Estou motivado a aplicar e expandir meus conhecimentos em
              ambientes práticos. Procuro oportunidades desafiadoras onde eu
              possa não apenas aplicar o que sei, mas também aprender novas
              tecnologias, contribuindo ativamente para projetos inovadores no
              setor de tecnologia.
            </p>
          </p>
        </article>
        <div className="rounded-full h-96 w-96 bg-slate-100 drop-shadow-md flex justify-center items-center">
          <img className="rounded-full h-80 w-80" src={Romy} alt="" />
        </div>
      </section>
    </>
  )
}
