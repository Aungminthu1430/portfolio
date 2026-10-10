import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'

export default function NotFound() {
  return (
    <div className="page not-found">
      <span className="mono accent-tertiary">ERROR // 404</span>
      <h1 className="not-found-code">404</h1>
      <p className="not-found-text">
        That route could not be resolved. The resource may have moved or never
        existed.
      </p>
      <Link to="/" className="btn btn-primary btn-lg">
        <Icon name="arrow_back" size={18} />
        Back Home
      </Link>
    </div>
  )
}
