import React from '../../assets/React.svg'

export function Icon({ name }: { name: string }) {
  let icon
  if (name === 'React') icon = React

  return (
    <>
      <img src={icon} className="h-8" alt={name} />
    </>
  )
}
