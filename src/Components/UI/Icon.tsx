import React from '../../assets/react.png'
import Css from '../../assets/css.png'

export function Icon({ name }: { name: string }) {
  let icon
  if (name === 'React') icon = React
  if (name === 'css') icon = Css

  return (
    <>
      <img src={icon} className="h-7" alt={name} />
    </>
  )
}
