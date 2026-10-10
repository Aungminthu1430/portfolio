import Icon from './Icon.jsx'
import { profile } from '../data/content.js'

const year = new Date().getFullYear()

const socials = [
  { href: 'https://github.com', icon: 'code', label: 'GitHub' },
  { href: 'https://linkedin.com', icon: 'lan', label: 'LinkedIn' },
  { href: `mailto:${profile.email}`, icon: 'alternate_email', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-name">{profile.name}</span>
          <span className="footer-sep">•</span>
          <p className="footer-copy">
            © {year} {profile.name}. Architectural Systems &amp; UI.
          </p>
        </div>
        <div className="footer-links">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              <Icon name={social.icon} size={16} />
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
