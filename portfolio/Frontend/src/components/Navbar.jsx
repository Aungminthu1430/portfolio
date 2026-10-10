import { NavLink } from 'react-router-dom'
import { profile } from '../data/content.js'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
]

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="brand">
          Aung&nbsp;Min&nbsp;Thu
        </NavLink>

        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <span className="status-pill mono">
          <span className="dot-pulse" />
          {profile.availability}
        </span>
      </div>
    </header>
  )
}
