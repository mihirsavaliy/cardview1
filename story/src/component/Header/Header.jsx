import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark d-flex">
    <div className="container-fluid col-12">
      <div className='col-3'>
      <a className="navbar-brand" href="#">MIHIR & SAHIL.</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className='col-10'>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className=" text-white ps-2 text-decoration-none" aria-current="page" to="/">Home</a>
          </li>
          <li className="nav-item">
            <a className=" text-white ps-2 text-decoration-none" to="/CreatStory">CreatStory</a>
          </li>
          <li className="nav-item">
            <a className=" text-white ps-2 text-decoration-none" to="">Contact</a>
          </li>
        </ul>
        </div>
        <div>
        <form>
          <button className="btn btn-outline-success" type="submit" ><a to='/CreatStory' className="text-decoration-none text-white">Add Story</a></button>
        </form>
        </div>
      </div>
    </div>
  </nav>
    </>
  )
}

export default Header