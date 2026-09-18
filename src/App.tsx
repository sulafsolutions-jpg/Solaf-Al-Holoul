import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Purpose from './components/Purpose';
import Initiatives from './components/Initiatives';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Purpose />
        <Initiatives />
        {/* <TeamGrid /> */}
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
