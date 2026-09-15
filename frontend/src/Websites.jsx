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
    id: '02',
    date: '2026-01-10', // formato YYYY-MM-DD facilita a comparação
    tag: 'WEB / 2026',
    tagColor: 'pink',
    image: donutclub,
    title: 'DonutClub',
    description: 'Creation of a brand and a respective website for greater reach.',
    meta: 'WEBSITE · DIRECTION',
    year: '2026',
    category: 'Web',
    url: 'https://donutclub2.vercel.app/',
  },
  {
    id: '01',
    date: '2026-01-05',
    tag: 'WEB / 2026',
    tagColor: 'pink',
    image: Sara,
    title: 'Sara´s Beauty',
    description: 'A website development for a makeup site and skincare brand, in progress.',
    meta: 'WEBSITE · DIRECTION',
    year: '2026',
    category: 'Web',
    url: 'https://saras-beauty-v2pz.vercel.app/',
  },
  {
    id: '03',
    date: '2026-01-15',
    tag: 'Web / 2026',
    tagColor: 'pink',
    image: FlyingBurguer,
    title: 'Web Flying Burguer',
    description: 'A web experience for presenting a created game.',
    meta: 'WEBSITE · DIRECTION',
    year: '2026',
    category: 'Web',
    url: 'https://web-flying-burguer.vercel.app/',
  },
  {
    id: '04',
    date: '2026-01-20',
    tag: 'Web / 2026',
    tagColor: 'pink',
    image: SalSol,
    title: 'Tour do Sal ao Sol',
    description: 'A web experience for a 5-day trip in Spain.',
    meta: 'WEBSITE · DIRECTION',
    year: '2026',
    category: 'Web',
    url: 'https://tour-nine-alpha.vercel.app/',
  },
];

// Ordena do mais recente para o mais antigo, independentemente
// da ordem em que os projetos foram adicionados ao array acima.
const sortedProjects = [...projects].sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

const filters = [/*'Todos'*/, 'Web', /*'Mobile', 'UI/UX'*/];

function Websites() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? sortedProjects
      : sortedProjects.filter((p) => p.category === activeFilter);

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