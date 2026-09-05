import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FooterList from './components/FooterList';
import WebsitesHero from './components/Websites/WebsitesHero';
import FilterTabs from './components/Websites/FilterTabs';
import ProjectList from './components/Websites/ProjectList';
import FlyingBurguer from './assets/FlyingBurguer.jpeg';
import Sara from './assets/Sara.jpeg';
import donutclub from './assets/donutclub.jpeg';
import SalSol from './assets/SalSol.jpeg';

const projects = [
  {
    id: '01',
    tag: 'WEB / 2026',
    tagColor: 'pink',
    image: donutclub, 
    title: 'DonutClub',
    description: 'Criação de uma marca e um site respetivo para maior alcance.',
    meta: 'WEBSITE · DIRECTION',
    year: '2026',
    category: 'Web',
    url: 'https://donutclub2.vercel.app/',
  },
  {
    id: '02',
    tag: 'WEB / 2026',
    tagColor: 'pink',
    image: Sara,
    title: 'Sara´s Beauty',
    description: 'Criação e desenvolvimento de um site para uma marca de maquiagem e skincare, em progresso.',
    meta: 'WEBSITE · DIRECTION',
    year: '2026',
    category: 'Web',
    url: 'https://saras-beauty-v2pz.vercel.app/',
  },
  {
    id: '03',
    tag: 'Web / 2026',
    tagColor: 'pink',
    image: FlyingBurguer, 
    title: 'Web Flying Burguer',
    description: 'Uma experiência web para apresentação de um jogo criado.',
    meta: 'WEBSITE · DIRECTION',
    year: '2026',
    category: 'Web',
    url: 'https://web-flying-burguer.vercel.app/',
  },
  {
    id: '04',
    tag: 'Web / 2026',
    tagColor: 'pink',
    image: SalSol, 
    title: 'Tour do Sal ao Sol',
    description: 'Uma experiência web para uma viagem de 5 dias em espanha.',
    meta: 'WEBSITE · DIRECTION',
    year: '2026',
    category: 'Web',
    url: 'https://tour-nine-alpha.vercel.app/',
  }
];

const filters = [/*'Todos'*/, 'Web', /*'Mobile', 'UI/UX'*/];

function Websites() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filteredProjects =
    activeFilter === 'Todos'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="page-shell">
      <Navbar />

      <section className="container py-5">
        <WebsitesHero />
        <FilterTabs
          filters={filters}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      </section>

      <ProjectList projects={filteredProjects} />

      <FooterList />
    </div>
  );
}

export default Websites;