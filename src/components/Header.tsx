import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <span>this is shoplist.</span>
      <span>shop till you drop.</span>
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
