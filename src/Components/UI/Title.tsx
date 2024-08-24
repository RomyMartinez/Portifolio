export function Title({
  title,
  extraClass,
}: {
  title: string
  extraClass?: string
}) {
  return (
    <h2 className={`text-5xl text-slate-700 font-bold uppercase ${extraClass}`}>
      {title}
    </h2>
  )
}
