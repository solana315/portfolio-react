import React from 'react';
import Navbar from './components/Navbar';
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
                <h1 className="display-5 mb-4">About Me</h1>
                <p>Hi, I'm Ana! I'm 22 years old and I'm a developer working with React, Flutter, Node.js, and Dart. I built full-stack apps 
                from dental clinic platforms to study tools for students with dyslexia using LLM. I also work with databases
                like PostgreSQL and MongoDB, and use Git, REST APIs, and Scrum.
                </p>
                </div>
                <div className="item2">
                    <img src={img} alt="Ana" width="400" height="400"></img>
                </div>
            
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SobreMim;
