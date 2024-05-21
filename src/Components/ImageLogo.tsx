export function ImageLogo({
  src,
  alt,
  href,
}: {
  src: string
  alt: string
  href: string
}) {
  return (
    <a href={href} target="_blank" rel="noopener">
      <img src={src} alt={alt} />
    </a>
  )
}
