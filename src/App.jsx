import "./app.scss"
import Contact from "./sections/contact/Contact";
import Cursor from "./sections/cursor/Cursor";
import Hero from "./sections/hero/Hero";
import Navbar from "./sections/navbar/Navbar";
import Portfolio from "./sections/portfolio/Portfolio";
import Services from "./sections/services/Services";
import Parallax from "./sections/sidebar/parallax/Parallax";

const App = () => {
  return <div>
    <Cursor/>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services">
      <Parallax type="services"/>
    </section>
    <section>
      <Services/>
    </section>
    <section id="Portfolio">
      <Parallax type="portfolio"/>
    </section>
    <Portfolio/>
    <section id="Contact">
      <Contact/>
    </section>
  </div>;
};

export default App;
