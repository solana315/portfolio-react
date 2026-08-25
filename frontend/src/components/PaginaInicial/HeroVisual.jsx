const galleryTiles = [
  { key: 'paper', className: 'tile tile--paper', style: { gridColumn: '1 / span 2', gridRow: '1 / span 2' } },
  { key: 'pink', className: 'tile tile--pink', style: { gridColumn: '3 / span 1', gridRow: '1 / span 1' } },
  { key: 'paper', className: 'tile tile--paper', style: { gridColumn: '4 / span 1', gridRow: '1 / span 1' } },
  { key: 'green', className: 'tile tile--green', style: { gridColumn: '3 / span 2', gridRow: '2 / span 2' } },
  { key: 'pink', className: 'tile tile--pink', style: { gridColumn: '1 / span 1', gridRow: '3 / span 1' } },
  { key: 'green', className: 'tile tile--green', style: { gridColumn: '2 / span 1', gridRow: '3 / span 1' } },
  { key: 'paper', className: 'tile tile--paper', style: { gridColumn: '1 / span 2', gridRow: '4 / span 1' } },
  { key: 'pink', className: 'tile tile--pink', style: { gridColumn: '3 / span 2', gridRow: '4 / span 1' } },
  { key: 'green', className: 'tile tile--green', style: { gridColumn: '1 / span 1', gridRow: '5 / span 1' } },
  { key: 'paper', className: 'tile tile--paper', style: { gridColumn: '2 / span 1', gridRow: '5 / span 1' } },
  { key: 'pink', className: 'tile tile--pink', style: { gridColumn: '3 / span 2', gridRow: '5 / span 1' } },
];

const HeroVisual = () => (
  <section className="col-12 col-xl-6 hero-visual order-1 order-xl-2">
    <div className="collage-shell position-relative">
      <div className="collage-grid">
        {galleryTiles.map((tile) => (
          <div key={tile.key} className={tile.className} style={tile.style} />
        ))}
      </div>

      <div className="floating-badge" aria-label="Portfolio indicator">
        A
        <span>02</span>
      </div>
    </div>

    <div className="gallery-caption text-uppercase">Arquivo visual / seleção 01—05</div>
  </section>
);

export default HeroVisual;
