import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Stories from './components/Stories';
import Events from './components/Events';
import Support from './components/Support';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Stories />
        <Events />
        <Support />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
