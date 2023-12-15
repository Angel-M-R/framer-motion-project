import "./app.scss"
import Hero from "./sections/hero/Hero";
import Navbar from "./sections/navbar/Navbar";
import Services from "./sections/services/Services";
import Parallax from "./sections/sidebar/parallax/Parallax";

const App = () => {
  return <div>
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
    <section>Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id="Contact">Contact</section>
  </div>;
};

export default App;
