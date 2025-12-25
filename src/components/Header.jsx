import { Link } from "react-router"
const Header = () => {
  return (
    <header className="mx-auto flex w-max justify-center gap-8 rounded-full bg-green-100/15 px-8 py-4 text-green-950 backdrop-blur-sm">
      <Link className="cursor-pointer hover:text-green-600" to="/">home</Link>
      <Link className="cursor-pointer hover:text-green-600" to="/about">about</Link>
      <Link className="cursor-pointer hover:text-green-600" to="/project">project</Link>
      <Link className="cursor-pointer hover:text-green-600" to="/contact">contact</Link>
    </header>
  )
}

export default Header;