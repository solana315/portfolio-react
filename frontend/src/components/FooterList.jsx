const footerItems = [
  { number: '01', label: 'Beginning', href: '/' },
  { number: '02', label: 'About Me', href: '/About' },
  { number: '03', label: 'Websites', href: '/Websites' },
  { number: '04', label: 'Contact', href: '/Contact' },
];

const FooterList = () => (
  <section className="portfolio-footer container-fluid px-4 px-xl-5 pb-4">
    <div className="row align-items-center g-4">
      <div className="col-12 col-xl-7">
        <h2 className="portfolio-footer__title mb-0">
          From the first scatch
          <span className="d-block">
            to the final <span className="portfolio-footer__accent">project.</span>
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
