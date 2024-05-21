export default function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  return (
    <section
      className={`w-screen h-screen flex flex-col items-center justify-center text-stone-700 ${className}`}
      id={id}
    >
      {children}
    </section>
  )
}
