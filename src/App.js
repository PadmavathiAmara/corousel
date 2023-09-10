import './App.css';
import './Carousel.css';
import React from "react";
import nature1 from './assets/nature1.jpg'
import nature2 from './assets/nature2.jpg'
import nature3 from './assets/nature3.jpg'
import nature4 from './assets/nature4.jpg'
import nature5 from './assets/nature5.jpg'
function App() {
  return (
<div className='parent'>
    <main className="main-container">
      <section>
        <img src={nature1} />
        <img src={nature2} />
        <img src={nature3} />
        <img src={nature4} />
        <img src={nature5} />
      </section>
    </main>
</div>
  );
}

export default App;