  import "./Projects.css";

import ecommerceImg from "../assets/ecommerce.png";
import exploreworldImg from "../assets/exploreworld.png";
import imageImg from "../assets/image.png";
import messmenuImg from "../assets/messmenu.png";
import cryptoImg from "../assets/cryptodashboard.png";
import portfolioImg from "../assets/portfolio.png";
import bookImg from "../assets/book.png";
import personalPortfolioImg from "../assets/personalportfolio.png";
import taskmasterImg from "../assets/taskmaster.png";
import quizImg from "../assets/quiz.png";

function Projects() {

  const projects = [
    {
      title: "E-commerce Website",
      description:
        "A modern e-commerce platform with product browsing, shopping cart and responsive UI.",
      tech: "HTML • CSS • JavaScript • React",
      image: ecommerceImg,
      live: "https://ecommerce-website-p8vp.onrender.com",
      github: "https://github.com/pgmashif456/ECOMMERCE-WEBSITE.git",
    },

    {
      title: "Explore World",
      description:
        "A travel-themed website showcasing destinations with a clean and responsive design.",
      tech: "HTML • CSS",
      image: exploreworldImg,
      live: "https://pgmashif456.github.io/Explore-world/",
      github: "https://github.com/pgmashif456/Explore-world.git",
    },

    {
      title: "Job Application",
      description:
        "A React-based job application portal with responsive layouts and modern UI components.",
      tech: "HTML • CSS • JavaScript • React",
      image: imageImg,
      live: "https://job-application-fupp.onrender.com",
      github: "https://github.com/pgmashif456/Job-Application.git",
    },

    {
      title: "Mess Menu App",
      description:
        "A responsive mess menu website for displaying daily food schedules and meal information.",
      tech: "HTML • CSS",
      image: messmenuImg,
      live: "https://pgmashif456.github.io/Mess-Menu/",
      github: "https://github.com/pgmashif456/Mess-Menu.git",
    },

    {
      title: "Crypto Dashboard",
      description:
        "A cryptocurrency dashboard showing market data with modern React components and responsive UI.",
      tech: "HTML • CSS • JavaScript • React",
      image: cryptoImg,
      live: "https://cryptodashboard-v1sh.onrender.com",
      github: "https://github.com/pgmashif456/CRYPTODASHBOARD.git",
    },

    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website featuring projects, skills and contact information.",
      tech: "HTML • CSS • JavaScript",
      image: portfolioImg,
      live: "https://portfolio-3emo.onrender.com",
      github: "https://github.com/pgmashif456/PORTFOLIO.git",
    },

    {
      title: "Book Store",
      description:
        "A simple online bookstore interface with responsive design and clean layout.",
      tech: "HTML • CSS",
      image: bookImg,
      live: "https://pgmashif456.github.io/Book-Store/",
      github: "https://github.com/pgmashif456/Book-Store.git",
    },

    {
      title: "Personal Portfolio",
      description:
        "A modern developer portfolio built with React showcasing projects and professional information.",
      tech: "HTML • CSS • JavaScript • React",
      image: personalPortfolioImg,
      live: "https://personal-portfolio-i0kz.onrender.com",
      github: "https://github.com/pgmashif456/PERSONAL-PORTFOLIO.git",
    },

    {
      title: "TaskMaster Pro",
      description:
        "A task management application built with TypeScript featuring task tracking and productivity tools.",
      tech: "HTML • CSS • TypeScript",
      image: taskmasterImg,
      live: "https://taskmaster-pro-1-sd50.onrender.com",
      github: "https://github.com/pgmashif456/TASKMASTER-PRO.git",
    },

    {
      title: "Quiz Sample",
      description:
        "An interactive quiz application with score tracking and dynamic question handling.",
      tech: "HTML • CSS • JavaScript",
      image: quizImg,
      live: "https://quiz-sample.onrender.com",
      github: "https://github.com/pgmashif456/Quiz-Sample.git",
    },
  ];

  return (
    <section className="projects">
      <h1>Projects</h1>

      <div className="line"></div>

      <p className="projects-text">
        A collection of projects showcasing my expertise in Frontend Development,
        responsive web design, React.js applications, TypeScript development,
        and modern UI/UX practices. Each project demonstrates my ability to build
        scalable, interactive, and performance-focused web applications.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span>{project.tech}</span>

              <div className="project-buttons">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="live-btn"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;