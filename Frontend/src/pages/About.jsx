import Icon from '../components/Icon.jsx'
import TerminalWindow from '../components/TerminalWindow.jsx'
import CodeSnippet from '../components/CodeSnippet.jsx'
import Placeholder from '../components/Placeholder.jsx'
import SkillTierCard from '../components/SkillTierCard.jsx'
import TimelineItem from '../components/TimelineItem.jsx'
import {
  profile,
  aboutMetrics,
  skillTiers,
  experience,
  methodology,
  contact,
} from '../data/content.js'

const engineerCode = [
  [
    { t: 'const', c: 'tertiary' },
    { t: ' engineer', c: 'secondary' },
    { t: ' = {', c: 'plain' },
  ],
  [
    { t: '  name: ', c: 'outline' },
    { t: "'Aung Min Thu'", c: 'primary' },
    { t: ',', c: 'plain' },
  ],
  [
    { t: '  focus: ', c: 'outline' },
    { t: '[', c: 'plain' },
    { t: "'MongoDB'", c: 'primary' },
    { t: ', ', c: 'plain' },
    { t: "'Express'", c: 'primary' },
    { t: ', ', c: 'plain' },
    { t: "'React'", c: 'primary' },
    { t: ', ', c: 'plain' },
    { t: "'Node.js'", c: 'primary' },
    { t: '],', c: 'plain' },
  ],
  [
    { t: '  philosophy: ', c: 'outline' },
    { t: "'Learn, Build, Ship.'", c: 'primary' },
  ],
  [{ t: '};', c: 'plain' }],
]

export default function About() {
  return (
    <div className="page about">
      {/* Editorial hero */}
      <section className="about-hero">
        <div className="about-hero-copy">
          <div className="about-hero-eyebrow">
            <span className="pill pill-surface mono">
              <span className="ping-dot accent-primary" />
              SYS:PROFILE // ABOUT ME
            </span>
            <span className="mono accent-muted about-loc">
              LOC: {profile.location.toUpperCase()}
            </span>
          </div>

          <h1 className="about-headline">
            {profile.aboutHeadline[0]} <br className="br-desktop" />
            <span className="gradient-text">{profile.aboutHeadline[1]}</span>
          </h1>

          <p className="about-lead">{profile.aboutLead}</p>

          <div className="quick-metrics">
            {aboutMetrics.map((metric) => (
              <div key={metric.label} className="quick-metric">
                <span className={`quick-metric-value accent-${metric.accent}`}>
                  {metric.value}
                </span>
                <span className="quick-metric-label mono">{metric.label}</span>
              </div>
            ))}
          </div>

          <div className="about-actions">
            <a
              href="/resume/myCV.pdf"
              className="btn btn-primary btn-lg"
              download
            >
              <Icon name="download" size={20} />
              Download Resume
            </a>
            <a href={`mailto:${profile.email}`} className="btn btn-ghost btn-lg">
              <Icon name="send" size={20} />
              Let&apos;s Talk
            </a>
          </div>
        </div>

        <div className="about-hero-visual">
          <TerminalWindow title="aungminthu-dev :: zsh" className="about-terminal">
            <div className="about-terminal-visual">
              <Placeholder accent="tertiary" pattern="mesh" />
              <div className="about-terminal-fade" />
              <div className="about-terminal-caption">
                <p className="mono accent-tertiary">CURRENTLY CRAFTING</p>
                <p className="about-focus">{profile.currentFocus}</p>
              </div>
            </div>

            <CodeSnippet lines={engineerCode} className="about-code" />
          </TerminalWindow>

          <div className="floating-badge">
            <span className="floating-badge-icon">
              <Icon name="verified" size={24} />
            </span>
            <div>
              <div className="mono accent-primary floating-badge-top">
                PRODUCTION READY
              </div>
              <div className="floating-badge-bottom">Zero-Downtime Releases</div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section">
        <div className="section-head">
          <div>
            <span className="mono accent-primary section-eyebrow">
              Stack &amp; Capabilities
            </span>
            <h2 className="section-title">Technical Expertise &amp; Skills</h2>
          </div>
          <p className="section-desc">
            A targeted selection of frameworks, database systems, and runtime
            environments deployed across multi-tier production stacks.
          </p>
        </div>

        <div className="skills-grid">
          {skillTiers.map((tier) => (
            <SkillTierCard key={tier.title} tier={tier} />
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="section">
        <div className="section-head">
          <div>
            <span className="mono accent-tertiary section-eyebrow">
              Academic &amp; Practical
            </span>
            <h2 className="section-title">Education &amp; Experience</h2>
          </div>
          <div className="mono accent-muted section-meta">
            <Icon name="history" size={18} />
            LEARNING JOURNEY · UCS MANDALAY
          </div>
        </div>

        <div className="timeline">
          <div className="timeline-line" aria-hidden="true" />
          {experience.map((item) => (
            <TimelineItem key={`${item.company}-${item.period}`} item={item} />
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section className="section">
        <div className="methodology">
          <div className="methodology-copy">
            <span className="mono accent-tertiary methodology-eyebrow">
              {methodology.eyebrow}
            </span>
            <h3 className="methodology-title">{methodology.title}</h3>
            <p>{methodology.text}</p>
          </div>
          <div className="methodology-badges">
            {methodology.badges.map((badge) => (
              <div key={badge.title} className="methodology-badge">
                <Icon
                  name={badge.icon}
                  size={28}
                  className={`accent-${badge.accent}`}
                />
                <div>
                  <div className="methodology-badge-title">{badge.title}</div>
                  <div className="mono accent-muted">{badge.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section" id="contact">
        <div className="contact-cta">
          <span className="mono accent-secondary contact-eyebrow">
            {contact.about.eyebrow}
          </span>
          <h2 className="contact-title">{contact.about.title}</h2>
          <p className="contact-text">{contact.about.text}</p>
          <div className="contact-actions">
            <a
              href="/resume/myCV.pdf"
              className="btn btn-primary btn-lg"
              download
            >
              <Icon name="description" size={20} />
              Download Full Resume (PDF)
            </a>
            <a href={`mailto:${profile.email}`} className="btn btn-ghost btn-lg">
              <Icon name="alternate_email" size={20} />
              {profile.email}
            </a>
          </div>
          <div className="contact-status mono">
            <span className="contact-status-item">
              <span className="status-dot accent-tertiary" />
              Location: {profile.location}
            </span>
            <span>•</span>
            <span>Timezone: {profile.timezone}</span>
            <span>•</span>
            <span>Response latency: {profile.responseLatency}</span>
          </div>
        </div>
      </section>
    </div>
  )
}
