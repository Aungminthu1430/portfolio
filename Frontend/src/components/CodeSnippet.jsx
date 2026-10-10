export default function CodeSnippet({ lines, className = '' }) {
  return (
    <pre className={`code-snippet ${className}`.trim()}>
      <code>
        {lines.map((line, i) => (
          <span key={i} className="code-line">
            {line.map((token, j) => (
              <span key={j} className={`tok tok-${token.c}`}>
                {token.t}
              </span>
            ))}
            {'\n'}
          </span>
        ))}
      </code>
    </pre>
  )
}
