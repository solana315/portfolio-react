import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FooterList from './components/FooterList';
import WebsitesHero from './components/Websites/WebsitesHero';
import FilterTabs from './components/Websites/FilterTabs';
import ProjectList from './components/Websites/ProjectList';

const projects = [
  {
    id: '01',
    tag: 'WEB / 2026',
    tagColor: 'pink',
    title: 'Canto Studio',
    description: 'Uma casa digital para objetos, gestos e pequenas edições.',
    meta: 'WEBSITE · DIRECTION',
    year: '2026',
    category: 'Web',
  },
  {
    id: '02',
    tag: 'MOBILE / 2026',
    tagColor: 'pink',
    title: 'Vamos Devagar',
    description: 'Uma experiência móvel para uma comunidade de bem-estar urbano.',
    meta: 'MOBILE APP · UI/UX',
    year: '2026',
    category: 'Mobile',
  },
];

const filters = ['Todos', 'Web', 'Mobile', 'UI/UX'];

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