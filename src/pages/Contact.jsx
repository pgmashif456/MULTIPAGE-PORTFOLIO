    import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_e38pyem",      // Service ID
        "template_6ld8b0c",     // Template ID
        e.target,
        "zcGxzrsf2hAoR5mfW"      // Public Key
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        e.target.reset();
        setLoading(false);
      })
      .catch((error) => {
        console.log("STATUS:", error.status);
        console.log("TEXT:", error.text);
        console.log(error);

        alert(`❌ ${error.text}`);
        setLoading(false);
      });
  };

  return (
    <section className="contact-section">
      <div className="contact-header">
        <h1>Contact Me</h1>

        <div className="line"></div>

        <p>
          I'm always open to discussing new projects, freelance opportunities,
          collaborations, or innovative ideas. Feel free to get in touch and
          let's build something amazing together.
        </p>
      </div>

      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">📍</div>
            <h3>Location</h3>
            <p>Bhopal, Madhya Pradesh, India</p>
          </div>

          <div className="info-card">
            <div className="info-icon">📧</div>
            <h3>Email</h3>
            <p>ashifr479@gmail.com</p>
          </div>

          <div className="info-card">
            <div className="info-icon">📱</div>
            <h3>Phone</h3>
            <p>+91 XXXXX XXXXX</p>
          </div>

          <div className="info-card">
            <div className="info-icon">💼</div>
            <h3>LinkedIn</h3>

            <a
              href="https://linkedin.com/in/your-linkedin-id"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/your-linkedin-id
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              name="title"
              placeholder="Subject"
              required
            />

            <textarea
              name="message"
              rows="7"
              placeholder="Write your message..."
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;