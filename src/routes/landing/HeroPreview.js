import { Link } from "react-router-dom";

const HeroPreview = () => {
  return (
    <article className="landing__hero">
      <h1 className="hero-font white-text h1-tag">
        Hi, I'm <br></br>
        <em className="pink-text">Atharv Hiremath</em>
        <br></br>Web Developer
      </h1>
      <p className="gray-text p-tag">Web Developer</p>  
    </article>
  );
};

export default HeroPreview;
