import { useEffect, useRef, useState } from 'react'
import Icon from './Icon.jsx'
import Placeholder from './Placeholder.jsx'
import Tag from './Tag.jsx'

const PATTERNS = {
  'sar-oak-sin': 'columns',
  'green-smart-city': 'mesh',
  'hackathon-build': 'sparkline',
  portfolio: 'grid',
}

const CYCLE_MS = 1200

function ProjectVisual({ project, pattern }) {
  const {
    accent,
    images,
    imageAlts,
    status,
    statusAccent,
    metric,
  } = project

  const hasImages = Array.isArray(images) && images.length > 0
  const [active, setActive] = useState(0)
  const timer = useRef(null)

  useEffect(() => () => clearInterval(timer.current), [])

  const start = () => {
    if (!hasImages || images.length < 2 || timer.current) return
    timer.current = setInterval(() => {
      setActive((i) => (i + 1) % images.length)
    }, CYCLE_MS)
  }

  const stop = () => {
    clearInterval(timer.current)
    timer.current = null
    setActive(0)
  }

  return (
    <div
      className="project-visual"
      onMouseEnter={start}
      onMouseLeave={stop}
    >
      {hasImages ? (
        images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={imageAlts?.[i] || ''}
            loading="lazy"
            decoding="async"
            className={`project-visual-img${i === active ? ' active' : ''}`}
          />
        ))
      ) : (
        <Placeholder accent={accent} pattern={pattern || 'grid'} />
      )}

      <div className="project-visual-fade" />

      <span className="project-status">
        <span className={`project-status-dot accent-${statusAccent}`} />
        <span className="mono">{status}</span>
      </span>
      <span className="project-metric mono">{metric}</span>

      {hasImages && images.length > 1 && (
        <span className="project-gallery-dots" aria-hidden="true">
          {images.map((src, i) => (
            <span
              key={src}
              className={`gallery-dot${i === active ? ' active' : ''}`}
            />
          ))}
        </span>
      )}
    </div>
  )
}

export default function ProjectCard({ project }) {
  const {
    id,
    index,
    category,
    title,
    description,
    tags,
    statusIcon,
    link,
    repo,
  } = project

  return (
    <article className="project-card">
      <ProjectVisual project={project} pattern={PATTERNS[id]} />

      <div className="project-meta">
        <span className="project-index mono">
          {index} / {category}
        </span>
        <Icon name={statusIcon} size={18} className="project-meta-icon" />
      </div>

      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>

      <div className="project-tags">
        {tags.map((tag) => (
          <Tag key={tag} accent="secondary">
            {tag}
          </Tag>
        ))}
      </div>

      <div className="project-actions">
        <a href={link} className="btn btn-primary btn-flex" target="_blank" rel="noreferrer">
          Live Demo
          <Icon name="open_in_new" size={16} />
        </a>
        <a
          href={repo}
          className="btn btn-ghost"
          target="_blank"
          rel="noreferrer"
          aria-label={`Source for ${title} on GitHub`}
        >
          <Icon name="code" size={16} />
          Source
        </a>
      </div>
    </article>
  )
}
