import React from 'react';
import Navbar from './components/Navbar';
import FooterList from './components/FooterList';
import img from './assets/eu1.jpeg';

function SobreMim() {
  return (
    <div className="page-shell">
      <Navbar />
      <section className="container py-5">
        <div className="row">
          <div className="col-lg-15 mx-auto">
            <div className="containerAbout">
                <div className="item1">
                <h1 className="hero-title2 mb-4">About Me</h1>
                <p className="hero-text mb-4">Hi, I'm Ana! I'm 21 years old and I'm a developer working with React, Flutter, Node.js, and Dart. I built full-stack apps 
                from dental clinic platforms to study tools for students with dyslexia using LLM. I also work with databases
                like PostgreSQL and MongoDB, and use Git, REST APIs, and Scrum.
                </p>
                </div>
                <div className="item2">
                    <img src={img} alt="Ana"></img>
                </div>
   <a 
     href="/Ana_Oliveira_CV.pdf" 
     target="_blank" 
     rel="noopener noreferrer"
     className="hero-cta text-decoration-none d-inline-flex align-items-center gap-2"
   >
     See My CV
     <span className="hero-cta__arrow" aria-hidden="true">↗</span>
   </a>
            </div>
          </div>
        </div>
      </section>
      <FooterList />
    </div>
  );
}

export default SobreMim;
