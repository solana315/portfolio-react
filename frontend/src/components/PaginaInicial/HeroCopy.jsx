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
      I created this website to share a little about who I am, my journey, and the projects I’ve built along the way.
      Take a look around to learn more about me.
    </p>

    <a href="/Websites" className="hero-cta text-decoration-none d-inline-flex align-items-center gap-2">
      See My Work
      <span className="hero-cta__arrow" aria-hidden="true">↗</span>
    </a>
  </section>
);

export default HeroCopy;
