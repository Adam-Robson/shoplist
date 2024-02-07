import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="header-list">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/create">Create</Link></li>
          <li><Link to="/posts">Posts</Link></li>
        </ul>
      </nav>
    </header>
  )
}
