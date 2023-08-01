import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Redux Personal Blog</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" > <Link to='/'>Home</Link><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><Link to='/post'></Link>Posts</a>
      </li>
     
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    
  </div>
</nav>
  )
}

export default Header


{/* <li className="nav-item"><Link to='/'>Home</Link></li>
            <li className="nav-item"><Link to='post'>Posts</Link></li> */}