import Icon from '../components/Icon.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects, contact, profile } from '../data/content.js'

export default function Projects() {
  return (
    <div className="page projects">
      <section className="projects-header">
        <div className="projects-header-inner">
          <div className="projects-intro">
            <span className="pill pill-surface mono">
              <span className="status-dot accent-tertiary" />
              PORTFOLIO SHOWCASE
            </span>
            <h1 className="projects-title">Featured Projects &amp; Case Studies</h1>
            <p className="projects-lead">
              A curated collection of web applications, developer tooling, and
              interface experiments built with modern standards and clean code.
            </p>
          </div>

          <div className="projects-filters">
            <div className="filter-box mono">
              <span className="accent-muted">FILTER:</span>
              <span className="filter-active">ALL ({projects.length})</span>
            </div>
            <div className="filter-version mono">
              <Icon name="terminal" size={16} className="accent-tertiary" />
              v2.4-stable
            </div>
          </div>
        </div>
      </section>

      <section className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>

      <section className="section">
        <div className="collab-cta">
          <div className="collab-copy">
            <span className="mono accent-tertiary">{contact.home.eyebrow}</span>
            <h3 className="collab-title">{contact.home.title}</h3>
            <p>{contact.home.text}</p>
          </div>
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            <Icon name="mail" size={18} />
            {contact.home.cta}
          </a>
        </div>
      </section>
    </div>
  )
}
