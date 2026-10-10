export default function TerminalWindow({
  title,
  status,
  statusAccent = 'tertiary',
  children,
  className = '',
}) {
  return (
    <div className={`terminal ${className}`.trim()}>
      <div className="terminal-bar">
        <div className="terminal-dots" aria-hidden="true">
          <span style={{ background: '#ef4444' }} />
          <span style={{ background: '#f59e0b' }} />
          <span style={{ background: '#10b981' }} />
        </div>
        <span className="terminal-title mono">{title}</span>
        {status ? (
          <span className={`terminal-status mono accent-${statusAccent}`}>
            <span className="dot-pulse" />
            {status}
          </span>
        ) : (
          <span className="terminal-status mono" />
        )}
      </div>
      <div className="terminal-body">{children}</div>
    </div>
  )
}
