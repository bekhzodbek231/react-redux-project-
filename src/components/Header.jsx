import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark ps-3">
  <a className="navbar-brand text-light" >Redux Personal Blog</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" > <Link to='/'>Home</Link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><Link to='/post'>Posts</Link></a>
      </li>
     
    </ul>
    
  </div>
</nav>
  )
}

export default Header;


