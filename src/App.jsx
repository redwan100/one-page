import AboutUs from "./components/AboutUs/AboutUs";
import FAQ from "./components/FAQ/FAQ";
import Features from "./components/Features/Features";
import Offer from "./components/Offer/Offer";
import OurClient from "./components/OurClient/OurClient";
import Portfolio from "./components/Portfolio/Portfolio";

import Services from "./components/Services/Services";
import Work from "./components/Work/Work";
import Hero from "./components/hero/Hero";

const App = () => {
  return (
    <div className="">
      <Hero />
      <OurClient />
      <AboutUs />
      <Portfolio />
      <Services />
      <Work />
      <Features />
      <Offer />
      <FAQ />
    </div>
  );
};

export default App;
