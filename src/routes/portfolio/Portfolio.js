import Projects from "./Projects";
import Footer from "../../components/footer/Footer";
import PortfolioDescription from "./PortfolioDescription";
import ScrollButton from "../../components/ScrollButton";
import { useEffect } from "react";
import "./Portfolio.sass";
const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio | Nikhl Kore";
    window.scrollTo(0, 0);
  })
  return (
    <main className="portfolio">
      <PortfolioDescription />
      <Projects />
      <ScrollButton />
      <Footer />
    </main>
  );
};

export default Portfolio;
