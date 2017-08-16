import React from "react";
import { Link } from 'react-router-dom'

export class Header extends React.Component {
  render() {
    return (
      <nav className="nav`bar navbar-inverse">
        <div className="navbar-header">
          <Link to='/' className="navbar-brand">Home: Node and React</Link>
        </div>
        <ul className="nav navbar-nav">
          <li><Link to='/nerds'>Nerds</Link></li>
          <li><Link to='/geeks'>Geeks</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Header