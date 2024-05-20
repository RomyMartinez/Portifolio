import Header from './Components/Header'
import Section from './Components/Section'
import likedin from './assets/linkedin.svg'
import github from './assets/github.svg'

function App() {
  return (
    <>
      <Header />
      <Section className="w-screen h-screen gap-2" id="home">
        <h1 className="text-7xl font-bold uppercase drop-shadow-md">
          Romy Martinez
        </h1>
        <h2 className="text-4xl font-bold uppercase drop-shadow-md">
          Full-Stack developer
        </h2>
        <div className="flex">
          <a
            href="https://github.com/RomyMartinez"
            target="_blank"
            rel="noopener"
          >
            <img src={github} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/romy-martinez-nava"
            target="_blank"
            rel="noopener"
          >
            <img src={likedin} alt="likedin" />
          </a>
        </div>
      </Section>
    </>
  )
}

export default App
