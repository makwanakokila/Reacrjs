import React, { useState, useEffect } from 'react';

import './project.css';

const Project = () => {
  const [counter, setCounter] = useState({
    projects: 0,
    clients: 0,
    awards: 0
  });

  useEffect(() => {
    // Simulate a counter animation effect
    let projectsCounter = 0, clientsCounter = 0, awardsCounter = 0;
    const interval = setInterval(() => {
      if (projectsCounter < 250) {
        projectsCounter += 5;
        clientsCounter += 4;
        awardsCounter += 2;
        setCounter({
          projects: projectsCounter,
          clients: clientsCounter,
          awards: awardsCounter
        });
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <i className="fas fa-hand-holding-water me-3"></i>
            Acuas
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" id="home" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Service
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Feature
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Product
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <button className="btn btn-primary me-2">Order Now</button>
            <button className="btn btn-outline-primary">Free Estimate</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="overlay"></div>
        <div className="hero-text">
          <h5>IMPORTANCE LIFE</h5>
          <h1>Always Want Safe Water For Healthy Life</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <button className="btn btn-primary me-2">Order Now</button>
          <button className="btn btn-outline-primary">Free Estimate</button>
        </div>
      </div>

      {/* Card Section */}
      <div className="card-main">
      <div className="card1 container my-5">
        <h4>OUR Feature</h4>
        <h1>A Trusted Name In Bottled Water Industry</h1>
        <div className=" box row text-center">
          <div className="col-md-3">
            <div className="card mb-4">
              <div className="card-body">
                <div className="rounded-circle bg-info text-white mx-auto mb-3" style={{ width: "60px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-hand-holding-water"></i>
                </div>
                <h5 className="card-title">Quality Check</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat deleniti necessitatibus.
                </p>
                <a href="#" className="btn btn-link">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4">
              <div className="card-body">
                <div className="rounded-circle bg-info text-white mx-auto mb-3" style={{ width: "60px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-filter"></i>
                </div>
                <h5 className="card-title">5 Steps Filtration</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat deleniti necessitatibus.
                </p>
                <a href="#" className="btn btn-link">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4">
              <div className="card-body">
                <div className="rounded-circle bg-info text-white mx-auto mb-3" style={{ width: "60px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-recycle"></i>
                </div>
                <h5 className="card-title">Composition</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat deleniti necessitatibus.
                </p>
                <a href="#" className="btn btn-link">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mb-4">
              <div className="card-body">
                <div className="rounded-circle bg-info text-white mx-auto mb-3" style={{ width: "60px", height: "60px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <i className="fas fa-flask"></i>
                </div>
                <h5 className="card-title">Lab Control</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellat deleniti necessitatibus.
                </p>
                <a href="#" className="btn btn-link">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="services-section justify-content-center">
        <h4>Our Services</h4>
        <h1>What We Offer</h1>
        <div className="row text-center justify-content-center">
          <div className=" card m-3 w-25 col-md-4">
            <i className="fas fa-water service-icon bg-info"></i>
            <h5>Water Delivery</h5>
            <p>Fast and safe delivery of purified water to your doorstep.</p>
          </div>
          <div className="card m-3 w-25 col-md-4">
            <i className="fas fa-hand-holding-water service-icon bg-info"></i>
            <h5>Filtration Systems</h5>
            <p>High-quality filtration systems for your home or business.</p>
          </div>
          <div className="card m-3 w-25 col-md-4">
            <i className="fas fa-recycle service-icon bg-info"></i>
            <h5>Recycling Solutions</h5>
            <p>Eco-friendly bottle recycling programs for sustainability.</p>
          </div>
        </div>
      </div>

      {/* Counter Section */}
      <div className="counter-section text-center my-5">
        <div className="row">
          <div className="col-md-4">
            <h2>{counter.projects}</h2>
            <p>Projects Completed</p>
          </div>
          <div className="col-md-4">
            <h2>{counter.clients}</h2>
            <p>Happy Clients</p>
          </div>
          <div className="col-md-4">
            <h2>{counter.awards}</h2>
            <p>Awards Won</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h4>Contact Us</h4>
        <h1>Get In Touch</h1>
        <div className="container">
          <form>
            <div className="row mb-3">
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
            </div>
            <div className="mb-3">
              <textarea className="form-control" rows="5" placeholder="Your Message"></textarea>
            </div>
            <button className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer text-center py-4">
        <p>&copy; 2024 Acuas. All rights reserved.</p>
        <ul className='d-flex justify-content-center gap-3'>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Pages</li>
          <li>Contact</li>
        </ul>
        <p>
          <a href="#" className="text-primary">Privacy Policy</a> | 
          <a href="#" className="text-primary"> Terms of Service</a>
        </p>
      </footer>
    </div>
  
  );
};

export default Project;
