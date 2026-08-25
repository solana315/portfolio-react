import React from 'react';
import Navbar from './components/Navbar';

function SobreMim() {
  return (
    <div className="page-shell">
      <Navbar />
      <section className="container py-5">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="display-5 mb-4">Sobre Mim</h1>

          </div>
        </div>
      </section>
    </div>
  );
}

export default SobreMim;
