import Header from './Components/Header'
import Section from './Components/Section'
import likedin from './assets/linkedin.svg'
import github from './assets/github.svg'
import { ImageLogo } from './Components/ImageLogo'

function App() {
  return (
    <>
      <Header />
      <Section className=" gap-2 text-center" id="home">
        <h1 className="text-5xl font-bold uppercase drop-shadow-md md:text-7xl">
          Romy Martinez
        </h1>
        <h2 className="text-2xl font-bold uppercase drop-shadow-md md:text-4xl">
          Full-Stack developer
        </h2>
        <div className="flex">
          <ImageLogo
            src={github}
            alt="github"
            href="https://github.com/RomyMartinez"
          />
          <ImageLogo
            src={likedin}
            alt="likedin"
            href="https://www.linkedin.com/in/romy-martinez-nava"
          />
        </div>
      </Section>
    </>
  )
}

export default App
