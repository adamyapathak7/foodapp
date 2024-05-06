  import React from 'react';
  import { Link } from 'react-router-dom';
  const Navbar=() =>{
  return (
  <div >
    { <nav className="navbar navbar-expand-lg bg-primary" >
  <div className="container-fluid">

    <Link className="navbar-brand" to="/">Food Khazana</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavSupportedContent" aria-controls="navbarNavSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Login Form</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/shop">Shop</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
}
  </div>
  )
  }
  export default Navbar
