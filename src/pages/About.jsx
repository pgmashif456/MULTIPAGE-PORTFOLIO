//   import "./About.css";
// import profileImg from "../assets/logo.jpeg";

// function About() {
//   return (
//     <section className="about-section">

//       <div className="about-header">
//         <h1>About Me</h1>
//         <div className="underline"></div>

//         <p>
//           Passionate Frontend Developer with a strong foundation in
//           React, JavaScript, HTML and CSS. I enjoy building modern,
//           responsive and user-friendly web applications.
//         </p>
//       </div>

//       <div className="about-content">

//         <div className="about-image">
//           <img src={profileImg} alt="Ashif" />
//         </div>

//         <div className="about-info">

//           <h2>Frontend Developer</h2>

//           <p>
//             I love creating responsive web applications and
//             continuously learning new technologies.
//           </p>

//           <div className="info-grid">

//             <div>
//               <strong>Name:</strong> Ashif
//             </div>

//             <div>
//               <strong>Email:</strong> ashif@email.com
//             </div>

//             <div>
//               <strong>Location:</strong> Rajasthan, India
//             </div>

//             <div>
//               <strong>Degree:</strong> B.Tech
//             </div>

//             <div>
//               <strong>Experience:</strong> Fresher
//             </div>

//             <div>
//               <strong>Freelance:</strong> Available
//             </div>

//           </div>

//         </div>

//       </div>

//       <div className="skills-section">

//         <h2>Skills</h2>

//         <div className="skill">
//           <span>HTML</span>
//           <div className="progress">
//             <div className="html"></div>
//           </div>
//         </div>

//         <div className="skill">
//           <span>CSS</span>
//           <div className="progress">
//             <div className="css"></div>
//           </div>
//         </div>

//         <div className="skill">
//           <span>JavaScript</span>
//           <div className="progress">
//             <div className="js"></div>
//           </div>
//         </div>

//         <div className="skill">
//           <span>React</span>
//           <div className="progress">
//             <div className="react"></div>
//           </div>
//         </div>

//       </div>

//     </section>
//   );
// }

// export default About;

import "./About.css";
import profileImg from "../assets/logo.jpeg";

function About() {
  return (
    <section className="about">

      <h1>About</h1>

      <div className="line"></div>

      <p className="about-text">
        Passionate Frontend Developer with a strong interest in
        React, JavaScript and modern web technologies. I enjoy
        creating responsive and user-friendly web applications.
      </p>

      <div className="about-content">

        <div className="about-image">
          <img src={profileImg} alt="Ashif" />
        </div>

        <div className="about-info">

          <h2>Frontend Developer</h2>

          <p className="italic">
            Building responsive, scalable and visually appealing
            websites using modern frontend technologies.
          </p>

          <div className="info-grid">

            <div>
              <strong>Birthday:</strong> 15 Jan 2003
            </div>

            <div>
              <strong>Age:</strong> 22
            </div>

            <div>
              <strong>Phone:</strong> +91 XXXXX XXXXX
            </div>

            <div>
              <strong>Email:</strong> ashif@email.com
            </div>

            <div>
              <strong>City:</strong> Rajasthan, India
            </div>

            <div>
              <strong>Freelance:</strong> Available
            </div>

          </div>

          <p className="description">
            I love solving problems through code and continuously
            improving my skills in frontend development. My goal is
            to build modern and engaging digital experiences.
          </p>

        </div>

      </div>

      <div className="skills">

        <h2>Skills</h2>

        <div className="line"></div>

        <div className="skills-grid">

          <div className="skill-box">
            <span>HTML</span>
            <span>95%</span>

            <div className="progress">
              <div className="html"></div>
            </div>
          </div>

          <div className="skill-box">
            <span>CSS</span>
            <span>90%</span>

            <div className="progress">
              <div className="css"></div>
            </div>
          </div>

          <div className="skill-box">
            <span>JavaScript</span>
            <span>85%</span>

            <div className="progress">
              <div className="js"></div>
            </div>
          </div>

          <div className="skill-box">
            <span>React</span>
            <span>80%</span>

            <div className="progress">
              <div className="react"></div>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;