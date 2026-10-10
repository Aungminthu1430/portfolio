export default function Placeholder({
  accent = 'primary',
  pattern = 'grid',
  className = '',
}) {
  return (
    <div className={`placeholder accent-${accent} ${className}`.trim()} aria-hidden="true">
      <svg
        className="placeholder-svg"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern id={`grid-${accent}`} width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        {pattern === 'grid' && (
          <rect width="100%" height="100%" fill={`url(#grid-${accent})`} opacity="0.5" />
        )}
        {pattern === 'sparkline' && (
          <path
            d="M0 120 L80 90 L160 130 L240 60 L320 100 L400 30 L480 80 L560 40 L640 70 L720 25 L800 60"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.85"
          />
        )}
        {pattern === 'radar' && (
          <g fill="none" stroke="currentColor" opacity="0.7">
            <circle cx="400" cy="120" r="40" />
            <circle cx="400" cy="120" r="80" />
            <circle cx="400" cy="120" r="120" />
            <line x1="400" y1="0" x2="400" y2="240" />
            <line x1="280" y1="120" x2="520" y2="120" />
          </g>
        )}
        {pattern === 'mesh' && (
          <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8">
            <path d="M60 60 L200 140 L340 50 L500 160 L660 70 L800 150" />
            <path d="M60 140 L200 60 L340 160 L500 70 L660 150 L800 60" />
            <circle cx="200" cy="140" r="4" fill="currentColor" stroke="none" />
            <circle cx="500" cy="160" r="4" fill="currentColor" stroke="none" />
            <circle cx="660" cy="70" r="4" fill="currentColor" stroke="none" />
          </g>
        )}
        {pattern === 'columns' && (
          <g fill="currentColor" opacity="0.55">
            <rect x="50" y="70" width="120" height="150" rx="8" />
            <rect x="200" y="40" width="120" height="180" rx="8" />
            <rect x="350" y="100" width="120" height="120" rx="8" />
            <rect x="500" y="60" width="120" height="160" rx="8" />
            <rect x="650" y="110" width="120" height="110" rx="8" />
          </g>
        )}
      </svg>
    </div>
  )
}
