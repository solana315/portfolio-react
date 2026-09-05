import Foto from '../../assets/Foto.jpeg';
import FotoDois from '../../assets/FotoDois.jpeg';
import FotoTres from '../../assets/FotoTres.jpeg';
import FotoQuatro from '../../assets/FotoQuatro.jpeg';
import FotoCinco from '../../assets/FotoCinco.jpeg';
import FotoSeis from '../../assets/FotoSeis.jpeg';
import FotoSete from '../../assets/FotoSete.jpeg';
import FotoOito from '../../assets/FotoOito.jpeg';
import FotoNove from '../../assets/FotoNove.jpeg';
import FotoDez from '../../assets/FotoDez.jpeg';
import FotoOnze from '../../assets/FotoOnze.jpeg';
import FotoDoze from '../../assets/FotoDoze.jpeg';
import FotoTreze from '../../assets/FotoTreze.jpeg';
import FotoCatorze from '../../assets/FotoCatorze.jpeg';


const galleryTiles = [
  { key: 'fotoCinco', img: FotoCinco, style: { gridColumn: '1 / span 2', gridRow: '1 / span 2' } },
  { key: 'fotoDoze', img: FotoDoze, style: { gridColumn: '3 / span 1', gridRow: '1 / span 1' } },
  { key: 'fotoOnze', img: FotoOnze, style: { gridColumn: '4 / span 1', gridRow: '1 / span 1' } },
  { key: 'fotoDez', img: FotoDez, style: { gridColumn: '3 / span 2', gridRow: '2 / span 2' } },
  { key: 'fotoNove', img: FotoNove, style: { gridColumn: '1 / span 1', gridRow: '3 / span 1' } },
  { key: 'fotoOito', img: FotoOito, style: { gridColumn: '2 / span 1', gridRow: '3 / span 1' } },
  { key: 'FotoCatorze', img: FotoCatorze, style: { gridColumn: '1 / span 2', gridRow: '4 / span 1' } },
  { key: 'fotoTreze', img: FotoTreze, style: { gridColumn: '3 / span 2', gridRow: '4 / span 1' } },
  { key: 'fotoQuatro', img: FotoQuatro, style: { gridColumn: '1 / span 1', gridRow: '5 / span 1' } },
  { key: 'foto', img: Foto, style: { gridColumn: '2 / span 1', gridRow: '5 / span 1' } },
  { key: 'fotoDois', img: FotoDois, style: { gridColumn: '3 / span 2', gridRow: '5 / span 1' } },
  { key: 'fotoTres', img: FotoTres, style: { gridColumn: '1 / span 2', gridRow: '6 / span 1' } },
  { key: 'fotoSeis', img: FotoSeis, style: { gridColumn: '3 / span 2', gridRow: '6 / span 1' } },
];

const HeroVisual = () => (
  <section className="col-12 col-xl-6 hero-visual order-1 order-xl-2">
    <div className="collage-shell position-relative">
      <div className="collage-grid">
        {galleryTiles.map((tile) => (
          <div
            key={tile.key}
            className={tile.img ? 'tile tile--photo' : tile.className}
            style={
              tile.img
                ? { ...tile.style, backgroundImage: `url(${tile.img})` }
                : tile.style
            }
          />
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
