const galleryTiles = [
  { key: 'paper', className: 'tile tile--paper', style: { gridColumn: '1 / span 2', gridRow: '1 / span 2' } },
  { key: 'photo1', className: 'tile tile--photo tile--photo-1', style: { gridColumn: '3 / span 1', gridRow: '1 / span 1' } },
  { key: 'photo2', className: 'tile tile--photo tile--photo-2', style: { gridColumn: '4 / span 1', gridRow: '1 / span 1' } },
  { key: 'photo3', className: 'tile tile--photo tile--photo-3', style: { gridColumn: '3 / span 2', gridRow: '2 / span 2' } },
  { key: 'pink', className: 'tile tile--pink', style: { gridColumn: '1 / span 1', gridRow: '3 / span 1' } },
  { key: 'green', className: 'tile tile--green', style: { gridColumn: '2 / span 1', gridRow: '3 / span 1' } },
  { key: 'photo4', className: 'tile tile--photo tile--photo-4', style: { gridColumn: '1 / span 2', gridRow: '4 / span 1' } },
  { key: 'photo5', className: 'tile tile--photo tile--photo-5', style: { gridColumn: '3 / span 2', gridRow: '4 / span 1' } },
  { key: 'photo6', className: 'tile tile--photo tile--photo-6', style: { gridColumn: '1 / span 1', gridRow: '5 / span 1' } },
  { key: 'photo7', className: 'tile tile--photo tile--photo-7', style: { gridColumn: '2 / span 1', gridRow: '5 / span 1' } },
  { key: 'photo8', className: 'tile tile--photo tile--photo-8', style: { gridColumn: '3 / span 2', gridRow: '5 / span 1' } },
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
