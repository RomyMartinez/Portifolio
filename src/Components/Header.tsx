import NavLink from './NavLink'
import logo from '/logo.svg'

function Header() {
  return (
    <header className="flex items-center justify-between fixed bg-stone-800 text-stone-200 w-screen h-12 p-3">
      <img className="w-12 h-12" src={logo} alt="logo" />
      <nav className="flex items-center justify-between gap-1">
        <NavLink href="#Home">Home</NavLink>
        <NavLink href="#About">About</NavLink>
        <NavLink href="#Skills">Skills</NavLink>
        <NavLink href="#Projects">Projects</NavLink>
        <NavLink href="#Contact">Contact</NavLink>
      </nav>
    </header>
  )
}

export default Header
