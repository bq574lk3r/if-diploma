import React from 'react';
import './StartPage.scss';

export default function StartPage() {
  return (
    <section className="start-page">
      <div className="left-box">
        <h5>Bild your library</h5>
        <p className="start-page-text">
          Over 400.000 books from fiction to the business literature
        </p>
        <button>Let’s start</button>
      </div>
      <div className="bg-img"></div>
    </section>
  );
}
