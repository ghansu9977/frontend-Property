import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css'; // Make sure your custom styles are applied here

function Header() {
  const navigate = useNavigate();

  const handleAddPropertyClick = () => {
    navigate('/AddProperty');
  };

  const handleLoginClick = () => {
    navigate('/register');
  };

  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="./logo192.png">
          <h4>Real<span>State</span></h4>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#top">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">Properties</a>
            </li>
          </ul>
          <form className="d-flex ms-auto">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div className="d-flex ms-2">
            <button className="btn btn-primary me-2" onClick={handleLoginClick}>Login</button>
            <button className="btn btn-info" onClick={handleAddPropertyClick}>Add Properties</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
