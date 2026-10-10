import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import Tag from '../components/Tag.jsx'
import MetricCard from '../components/MetricCard.jsx'
import TerminalWindow from '../components/TerminalWindow.jsx'
import CodeSnippet from '../components/CodeSnippet.jsx'
import Placeholder from '../components/Placeholder.jsx'
import {
  profile,
  stack,
  metrics,
  featuredProject,
  process,
} from '../data/content.js'

export default function Home() {
  return (
    <div className="page home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="eyebrow-badge">
              <span className="ping-wrap">
                <span className="ping" />
                <span className="ping-dot" />
              </span>
              <span className="mono accent-primary">{profile.role}</span>
              <span className="hero-badge-sep">•</span>
              {/* <span className="mono hero-badge-secondary">
                <Icon name="hub" size={13} className="accent-tertiary" />
                {profile.secondaryRole}
              </span> */}
            </div>

            <h1 className="hero-title">
              Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
            </h1>

            <p className="hero-tagline">{profile.tagline}</p>

            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary btn-lg">
                View Projects
                <Icon name="arrow_forward" size={18} />
              </Link>
              <Link to="/about" className="btn btn-ghost btn-lg">
                <Icon name="terminal" size={18} className="accent-muted" />
                About Me
              </Link>
            </div>

            <div className="hero-stack">
              <span className="mono hero-stack-label">Core Stack:</span>
              {stack.map((item) => (
                <span key={item.label} className="stack-badge mono">
                  <Icon name={item.icon} size={14} />
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-portrait">
            <div className="hero-portrait-frame">
              <img
                src="/me.jpg"
                alt={`Portrait of ${profile.name}`}
                className="hero-portrait-img"
                loading="eager"
              />
              <div className="hero-portrait-fade" />
            </div>
            <div className="floating-badge">
              <span className="floating-badge-icon">
                <Icon name="verified" size={24} />
              </span>
              <div>
                <div className="mono accent-primary floating-badge-top">
                  OPEN TO INTERNSHIPS
                </div>
                <div className="floating-badge-bottom">{profile.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="section">
        <div className="metrics-grid">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="section" id="featured">
        <div className="section-head">
          <div>
            <span className="section-eyebrow mono accent-tertiary">
              <Icon name="precision_manufacturing" size={15} />
              Hackathon Build
            </span>
            <h2 className="section-title">Recent Featured Preview</h2>
          </div>
          <div className="section-meta mono">
            <span className="status-dot accent-success" />
            Built in a 12-Hour Sprint
          </div>
        </div>

        <div className="showcase">
          <div className="showcase-visual">
            <TerminalWindow
              title={featuredProject.file}
              status={featuredProject.version}
            >
              <div className="terminal-code-head mono">
                <span>CLUSTER: {featuredProject.cluster}</span>
                <span className="accent-success">{featuredProject.rtt}</span>
              </div>
              <CodeSnippet lines={featuredProject.code} />
            </TerminalWindow>

            <div className="showcase-image">
              <Placeholder accent="tertiary" pattern="mesh" />
              <div className="showcase-image-fade" />
              <span className="showcase-throughput mono">
                <Icon name="analytics" size={16} className="accent-tertiary" />
                {featuredProject.throughput}
              </span>
            </div>
          </div>

          <div className="showcase-detail">
            <div className="showcase-tags-top">
              <span className="pill pill-secondary mono">
                {featuredProject.category}
              </span>
              <span className="mono accent-muted">•</span>
              <span className="mono accent-muted">{featuredProject.date}</span>
            </div>

            <h3 className="showcase-title">{featuredProject.title}</h3>
            <p className="showcase-desc">{featuredProject.description}</p>

            <ul className="feature-list">
              {featuredProject.highlights.map((item) => (
                <li key={item.title}>
                  <Icon name="check_circle" size={18} className="accent-primary" />
                  <span>
                    <strong>{item.title}</strong> {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="showcase-tags">
              {featuredProject.tags.map((tag) => (
                <Tag key={tag} accent="secondary" variant="solid">
                  {tag}
                </Tag>
              ))}
            </div>

            <div className="showcase-actions">
              <a href={featuredProject.link} className="link-arrow accent-primary">
                Read Architecture Case Study
                <Icon name="arrow_forward" size={18} />
              </a>
              <div className="icon-actions">
                <a
                  href={featuredProject.repo}
                  className="icon-btn"
                  aria-label="Inspect GitHub repository"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="code" size={18} />
                </a>
                <a
                  href={featuredProject.link}
                  className="icon-btn"
                  aria-label="Open production preview"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="open_in_new" size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process / philosophy */}
      <section className="section" id="philosophy">
        <div className="process-strip">
          <div className="process-lead">
            <span className="mono accent-tertiary process-eyebrow">
              Engineering Code
            </span>
            <h3 className="process-title">Design Meets Technical Rigor</h3>
            <p>
              Every layer—from DNS resolution down to button states—is built with
              uncompromising standards for maintainability and performance.
            </p>
          </div>
          <div className="process-cards">
            {process.map((item) => (
              <div key={item.title} className="process-card">
                <span className={`process-card-title accent-${item.accent}`}>
                  <Icon name={item.icon} size={20} />
                  {item.title}
                </span>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
