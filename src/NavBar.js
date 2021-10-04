import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
  <div className="container-fluid">
    <a className="navbar-brand">Best site ever</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/contactus">Contact us</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/bandinfo">Random info about bands</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/apod">NASA's Astronomy Picture of the Day</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}
