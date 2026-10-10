import Icon from './Icon.jsx'
import Tag from './Tag.jsx'

export default function SkillTierCard({ tier }) {
  return (
    <div className="skill-tier">
      <div>
        <div className="skill-tier-head">
          <div className={`skill-tier-icon accent-${tier.accent}`}>
            <Icon name={tier.icon} size={26} />
          </div>
          <span className={`skill-tier-index mono accent-${tier.accent}`}>
            {tier.tier}
          </span>
        </div>
        <h3 className="skill-tier-title">{tier.title}</h3>
        <p className="skill-tier-desc">{tier.description}</p>
      </div>
      <div className="skill-tier-tags">
        {tier.skills.map((skill) => (
          <Tag key={skill} accent={tier.accent} variant="solid">
            {skill}
          </Tag>
        ))}
      </div>
    </div>
  )
}
