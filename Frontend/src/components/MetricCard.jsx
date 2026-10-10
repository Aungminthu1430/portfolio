import Icon from './Icon.jsx'

export default function MetricCard({ metric }) {
  return (
    <div className="metric-card">
      <div className="metric-main">
        <span className={`metric-label mono accent-${metric.accent}`}>
          <Icon name={metric.icon} size={14} />
          {metric.label}
        </span>
        <div className="metric-value">
          <span className="metric-number">{metric.value}</span>
          <span className="metric-unit">{metric.unit}</span>
        </div>
        <p className="metric-caption">{metric.caption}</p>
      </div>
      <div className="metric-badge">
        <Icon name={metric.badgeIcon} size={24} />
      </div>
    </div>
  )
}
