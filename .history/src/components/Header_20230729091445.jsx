import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="container-fluid">
      <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <h2>Redux Personal Blog</h2> 
    </a>
    <nav>
        <ul className="navbar-nav">
            <li className="nav-item"><Link to='/'>Home</Link></li>
            <li className="nav-item"><Link to='post'>Posts</Link></li>
           
        </ul>
    </nav>
  </div>
</nav>
    </div>
  )
}

export default Header
