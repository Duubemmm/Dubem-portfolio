const Header = () => {
  return (
    <section className="mx-auto flex w-max justify-center gap-8 rounded-full bg-green-100/15 px-8 py-4 text-green-950 backdrop-blur-sm">
      <p className="cursor-pointer hover:text-green-600">about</p>
      <p className="cursor-pointer hover:text-green-600">project</p>
      <p className="cursor-pointer hover:text-green-600">learning</p>
      <p className="cursor-pointer hover:text-green-600">contacts</p>
    </section>
  )
}

export default Header;