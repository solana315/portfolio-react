// Design.jsx
import React from 'react';
import Navbar from './components/Navbar';
import FooterList from './components/FooterList';
import Reveal from './components/Design/Reveal';
import ScrapbookPhoto from './components/Design/ScrapbookPhoto';
import ScrapbookNote from './components/Design/ScrapbookNote';
import placarIvaristo from './assets/placar_Ivaristo.png';
import Artboard1 from './assets/Artboard1.png';
import Ivaristo1 from './assets/Ivaristo/Ivaristo1.jpg';
import Ivaristo3 from './assets/Ivaristo/Ivaristo3.jpg';
import postcard from './assets/Ivaristo/postcard.jpg';
import Ivaristo5 from './assets/Ivaristo/Ivaristo5.png';
import Ivaristo7 from './assets/Ivaristo/Ivaristo7.png';
import Ivaristo4 from './assets/Ivaristo/Ivaristo4.png';




function Design() {
    return (
        <div className="page-shell">
            <Navbar />

            <section className="design-hero container py-5">
                <Reveal variant="fade-up">
                    <h1 className="design-title">
                        Creating a <em>brand</em>.
                    </h1>
                </Reveal>
            </section>

{ /* Logotipo da marca*/ }
            <section className="scrapbook-spread">
                <Reveal variant="rotate-in" delay={0} className="scrap-item pos-1">
                    <ScrapbookPhoto
                        src={Ivaristo3}
                        alt="Referência 3"
                        rotate={-3}
                        caption="Brand Logo"
                        circled
                    />
                </Reveal>


                {/* <Reveal variant="fade-up" delay={150} className="scrap-item pos-2">
  <ScrapbookNote rotate={-2} size="sm">
    Luminous Poster made for final year project.
  </ScrapbookNote>
</Reveal> */}


{ /* Post card*/}
                <Reveal variant="rotate-in" delay={300} className="scrap-item pos-3">
                    <ScrapbookPhoto
                        src={postcard}
                        alt="Referência 2"
                        rotate={4}
                    />
                </Reveal>



                <Reveal variant="pop" delay={450} className="scrap-item pos-4">
                    <h2 className="scrap-quote">
                        A few <em>mockups</em>.
                    </h2>
                </Reveal>

                
{/*luminouscard*/}
                <Reveal variant="rotate-in" delay={200} className="scrap-item pos-5">
                    <ScrapbookPhoto
                        src={placarIvaristo}
                        alt="Referência 3"
                        rotate={-6} 
                    />
                </Reveal>


{ /* coffee*/}
                <Reveal variant="rotate-in" delay={0} className="scrap-item pos-6">
                    <ScrapbookPhoto
                        src={Ivaristo1}
                        alt="Referência 4"
                        rotate={6}
                    />
                </Reveal>

{ /* eyeswall*/}
                <Reveal variant="rotate-in" delay={0} className="scrap-item pos-7">
                    <ScrapbookPhoto
                        src={Ivaristo5}
                        alt="Referência 5"
                        rotate={-3}
                    />
                </Reveal>
{ /* book*/}
                <Reveal variant="rotate-in" delay={0} className="scrap-item pos-8">
                    <ScrapbookPhoto
                        src={Ivaristo7}
                        alt="Referência 6"
                        rotate={-8}
                    />
                </Reveal>
{ /* sweatshirt*/}
                 <Reveal variant="rotate-in" delay={0} className="scrap-item pos-9">
                    <ScrapbookPhoto
                        src={Ivaristo4}
                        alt="Referência 7"
                        rotate={3}
                    />
                </Reveal>


            </section>

            <FooterList />
        </div>
    );
}

export default Design;