import Icon from './Icon.jsx'

export default function TimelineItem({ item }) {
  return (
    <div className="timeline-item">
      <span className={`timeline-node accent-${item.accent}`} aria-hidden="true" />
      <div className="timeline-card">
        <div className="timeline-top">
          <div className="timeline-role-row">
            <span className="timeline-role">{item.role}</span>
            {item.current && (
              <span className="pill pill-secondary mono">Current</span>
            )}
          </div>
          <span className={`timeline-period mono accent-${item.accent}`}>
            {item.period}
          </span>
        </div>
        <div className={`timeline-company accent-${item.accent}`}>
          <Icon name={item.companyIcon} size={16} />
          {item.company}
          <span className="timeline-dot">•</span>
          <span className="timeline-team mono">{item.team}</span>
        </div>
        <p className="timeline-summary">{item.summary}</p>
        <div className="timeline-impact">
          {item.impact.map((badge) => (
            <span key={badge.text} className={`impact-badge mono accent-${badge.accent}`}>
              {badge.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
