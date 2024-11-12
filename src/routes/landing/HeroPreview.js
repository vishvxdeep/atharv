import { Link } from "react-router-dom";

const HeroPreview = () => {
  return (
    <article className="landing__hero">
      <h1 className="hero-font white-text h1-tag">
        Hi, I'm <br></br>
        <em className="pink-text">Vishvadeep Kamble</em>
        <br></br>Data Scientist
      </h1>
      <p className="gray-text p-tag">Data Science</p>  
    </article>
  );
};

export default HeroPreview;
