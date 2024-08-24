export function Button({
  children,
  textOnly,
  extraClass,
  ...props
}: {
  children: React.ReactNode
  textOnly?: boolean
  extraClass?: string
}) {
  let cssName =
    'bg-slate-800 text-slate-300 py-2 px-5 rounded-md hover:bg-slate-300 hover:text-slate-800 border-2 border-slate-800 '
  if (textOnly) {
    cssName =
      'text-slate-800 bg-slate-300 py-2 px-5 rounded-md hover:text-slate-300 hover:bg-slate-800 border-2 border-slate-800 '
  }

  cssName += extraClass

  return (
    <button className={cssName} {...props}>
      {children}
    </button>
  )
}
