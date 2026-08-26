const footerItems = [
  { number: '02', label: 'Sobre mim', href: '#sobre' },
  { number: '03', label: 'Websites', href: '#websites' },
  { number: '04', label: 'Projetos criativos', href: '#projetos' },
  { number: '05', label: 'Lab', href: '#lab' },
  { number: '06', label: 'Contacto', href: '#contacto' },
];

const FooterList = () => (
  <section className="portfolio-footer container-fluid px-4 px-xl-5 pb-4">
    <div className="row align-items-center g-4">
      <div className="col-12 col-xl-7">
        <h2 className="portfolio-footer__title mb-0">
          Do primeiro rascunho
          <span className="d-block">
            ao projeto <span className="portfolio-footer__accent">final.</span>
          </span>
        </h2>
      </div>

      <div className="col-12 col-xl-5">
        <div className="portfolio-footer__list">
          {footerItems.map((item) => (
            <a key={item.number} href={item.href} className="portfolio-footer__item text-decoration-none d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-3">
                <span className="portfolio-footer__number">{item.number}</span>
                <span className="portfolio-footer__label">{item.label}</span>
              </div>
              <span className="portfolio-footer__arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FooterList;
