import { Footer } from "../../components/index.js";
import Certifications from "./Certifications.js";
import Languages from "./Languages.js";
import Stack from "./Stack.js";
import Education from "./Education.js";
import Experience from "./Experience.js";
import DownloadResume from "./DownloadResume.js";
import AboutMe from "./AboutMe.js";
import ScrollButton from "../../helpers/ScrollToTop.js";
import { useEffect } from "react";
import "./About.sass";

const About = () => {
  useEffect(() => {
    document.title = "About | Nikhil Kore";
    window.scrollTo(0, 0);
  })
  return (
    <main className="about">
      <AboutMe />
      <Stack />
      <DownloadResume />
      <Experience />
      <Education />
      <Languages />
      <DownloadResume />
      <Certifications />
      <ScrollButton />
      <Footer />
    </main>
  );
};

export default About;
