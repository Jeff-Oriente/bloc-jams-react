import React from 'react';

const Landing = () => (
  <section className="landing">
    <h1 className="hero-title display-1">Turn the music up!</h1>

   <section className="selling-points">
    <div className="point">
      <h2 className="point-title display-4 bg-success"><strong>Choose your music</strong></h2>
      <p className="point-description lead"><strong>The world is full of music; why should you have to listen to music that someone else chose?</strong></p>
    </div>
    <div className="point">
      <h2 className="point-title display-4 bg-primary"><strong>Unlimited, streaming, ad-free</strong></h2>
      <p className="point-description lead"><strong>No arbitrary limits. No distractions</strong></p>
    </div>
    <div className="point">
      <h2 className="point-title display-4 bg-warning"><strong>Mobile enabled</strong></h2>
      <p className="point-description lead"><strong>Listen to your music on the go. This streaming service is available on all mobile platforms.</strong></p>
    </div>
   </section>
  </section>
);

export default Landing;
