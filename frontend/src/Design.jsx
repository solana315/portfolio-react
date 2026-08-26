// Design.jsx
import React from 'react';
import Navbar from './components/Navbar';
import FooterList from './components/FooterList';
import Reveal from './components/Design/Reveal';
import ScrapbookPhoto from './components/Design/ScrapbookPhoto';
import ScrapbookNote from './components/Design/ScrapbookNote';
import placarIvaristo from './assets/placar_Ivaristo.png';
import Artboard1 from './assets/Artboard1.png';



function Design() {
  return (
    <div className="page-shell">
      <Navbar />

      <section className="design-hero container py-5">
        <Reveal variant="fade-up">
          <h1 className="design-title">
            Referências que <em>moldam</em>
            <br />o meu olhar.
          </h1>
        </Reveal>
      </section>

      <section className="scrapbook-spread">
        <Reveal variant="rotate-in" delay={0} className="scrap-item pos-1">
          <ScrapbookPhoto
            src={placarIvaristo}
            alt="Referência 1"
            rotate={-6}
            circled
          />
        </Reveal>

        <Reveal variant="fade-up" delay={150} className="scrap-item pos-2">
          <ScrapbookNote rotate={-2} size="sm">
            Luminous Poster made for final year project.
          </ScrapbookNote>
        </Reveal>

        <Reveal variant="rotate-in" delay={300} className="scrap-item pos-3">
          <ScrapbookPhoto
            src={Artboard1}
            alt="Referência 2"
            rotate={4}
          />
        </Reveal>

        <Reveal variant="pop" delay={450} className="scrap-item pos-4">
          <h2 className="scrap-quote">
            Design is a form of <em>inovation</em>.
          </h2>
        </Reveal>

        <Reveal variant="rotate-in" delay={200} className="scrap-item pos-5">
          <ScrapbookPhoto
            src="/assets/design/ref3.jpg"
            alt="Referência 3"
            rotate={-3}
            caption="Setembro, 2025"
          />
        </Reveal>



        <Reveal variant="rotate-in" delay={0} className="scrap-item pos-6">
          <ScrapbookPhoto
            src={placarIvaristo}
            alt="Referência 1"
            rotate={16}
            circled
          />
        </Reveal>
        
      </section>

      <FooterList />
    </div>
  );
}

export default Design;