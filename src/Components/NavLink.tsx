export default function NavLink({
  children,
  href,
}: {
  children: string
  href: string
}) {
  return (
    <a
      href={href}
      className="text-stone-200 hover:text-stone-300 hover:bg-stone-700 font-semibold py-1 px-2 rounded-md"
    >
      {children}
    </a>
  )
}
