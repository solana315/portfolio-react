/* APRESENTAÇÃO*/
const HeroCopy = () => (
  <section className="col-12 col-xl-6 hero-copy order-2 order-xl-1">
    <p className="eyebrow text-uppercase mb-4">Ana Carolina de Deus Oliveira</p>

    <h1 className="hero-title mb-4">
      Get To
      <span className="hero-accent">know Me</span>
      <span className="hero-line d-block">Better.</span>
    </h1>

    <p className="hero-text mb-4">
      Hi, I'm Ana! I'm a developer working with React, Flutter, Node.js, and Dart. I built full-stack apps 
      from dental clinic platforms to study tools for students with dyslexia using LLM. I also work with databases
      like PostgreSQL and MongoDB, and use Git, REST APIs, and Scrum.
    </p>

    <a href="#sobre" className="hero-cta text-decoration-none d-inline-flex align-items-center gap-2">
      Conhecer o meu trabalho
      <span className="hero-cta__arrow" aria-hidden="true">↗</span>
    </a>
  </section>
);

export default HeroCopy;
