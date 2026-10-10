export default function Icon({ name, size = 20, className = '', ...rest }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`.trim()}
      style={{ fontSize: `${size}px`, width: `${size}px`, height: `${size}px` }}
      aria-hidden="true"
      {...rest}
    >
      {name}
    </span>
  )
}
