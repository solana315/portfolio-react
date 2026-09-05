import React from 'react';
import Navbar from './components/Navbar';
import FooterList from './components/FooterList';

function Contact() {
  return (
    <div className="page-shell">
      <Navbar />

      <main className="contact-page container">
        <div className="contact-layout">
          <div className="contact-copy">

            <h1 className="contact-title">
              Our next project
              <br />
              <span className="contact-title--accent">can start</span>
              <br />
              here.
            </h1>

            <p className="contact-intro">
              Available for new projects, collaborations. 
              If you have an idea or a project in mind, feel free to reach out. 
              I would love to hear from you!
            </p>
          </div>

          <div className="contact-info-panel">
            <div className="contact-row">
              <div className="contact-meta">
                <span className="contact-label">EMAIL</span>
                <span className="contact-value">anacdo.315@hotmail.com</span>
              </div>
            </div>

            <div className="contact-row">
              <div className="contact-meta">
                <span className="contact-label">Phone</span>
                <span className="contact-value">+351 939 449 845</span>
              </div>
            </div>
<div className="contact-location">
  <div className="contact-location__text">
    <span className="contact-location__city">LISBOA, PORTUGAL</span>
  </div>
</div>
          </div>
        </div>
      </main>

      <FooterList />
    </div>
  );
}

export default Contact;