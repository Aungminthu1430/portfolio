export default function Tag({ children, accent = 'secondary', variant = 'pill' }) {
  return (
    <span className={`tag tag-${accent} tag-${variant}`}>
      {children}
    </span>
  )
}
