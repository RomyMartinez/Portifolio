import github from '../../assets/Github.svg'
import linkedin from '../../assets/linkedin.svg'

export function GithubLinkendin() {
  return (
    <div className="flex w-full justify-center gap-2">
      <a href="https://github.com/RomyMartinez" target="_blank">
        <img src={github} className="h-12" />
      </a>
      <a href="https://www.linkedin.com/in/romy-martinez-nava" target="_blank">
        <img src={linkedin} className="h-12" />
      </a>
    </div>
  )
}
