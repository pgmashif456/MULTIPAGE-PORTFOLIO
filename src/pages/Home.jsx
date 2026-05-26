    import "./Home.css";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="overlay">
        <div className="hero-content">
          <h1>Hi, I'm Ashif</h1>

          <h2>
            I'm{" "}
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "React Developer",
                2000,
                "Web Designer",
                2000,
                "JavaScript Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <p>
            I build responsive and modern web applications using
            React, JavaScript and CSS.
          </p>

          <button onClick={() => navigate("/projects")}>
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
}

export default Home;