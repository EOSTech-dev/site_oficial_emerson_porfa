import React from 'react';
import Ambient from './components/Ambient';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import InstagramFeed from './components/InstagramFeed';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative text-ash min-h-screen font-sans selection:bg-signal selection:text-void">
      <Ambient />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Portfolio />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
