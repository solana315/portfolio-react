import React, { useState } from 'react';

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState('01');

  const navLinks = [
    { number: '01', label: 'Início', href: '#inicio' },
    { number: '02', label: 'Sobre mim', href: '#sobre' },
    { number: '03', label: 'Websites', href: '#websites' },
    { number: '04', label: 'Projetos criativos', href: '#projetos' },
    { number: '05', label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="topbar border-bottom border-dark-subtle">
      <div className="container-fluid px-4 px-xl-5">
        <nav className="navbar navbar-expand-lg align-items-center py-3 px-0">
          <a href="#inicio" className="navbar-brand d-flex align-items-center gap-2 text-dark text-decoration-none me-0 me-lg-4">
            <span className="brand-mark" aria-hidden="true">
              <span className="brand-mark__inner" />
            </span>
            <span className="brand-word d-flex flex-column lh-1">
              <span className="brand-word__line">ANA</span>
              <span className="brand-word__line">OLIVEIRA</span>
            </span>
          </a>

          <button
            className="navbar-toggler border-0 p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <div className="navbar-nav d-flex align-items-center gap-3 gap-xl-4 py-2 py-lg-0">
              {navLinks.map((link) => (
                <a
                  key={link.number}
                  href={link.href}
                  className={`nav-link nav-custom-link ${activeItem === link.number ? 'active' : ''}`}
                  onClick={(event) => {
                    event.preventDefault();
                    setActiveItem(link.number);
                  }}
                >
                  <span className="small-number me-1">{link.number}</span>
                  <span className="nav-label">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="d-none d-lg-flex flex-column align-items-end text-dark portfolio-meta">
            <span className="fw-semibold text-uppercase">PORTFOLIO</span>
            <span>2024—25 · PT</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;