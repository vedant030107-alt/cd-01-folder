import { useState } from "react";
import "./App.css";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          Vedant<span>Web</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-btn">
          Let's Talk
        </a>
      </nav>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="tag">WEB DEVELOPMENT AGENCY</p>

          <h1>
            We Build
            <span> Digital Experiences</span>
            That Grow Businesses.
          </h1>

          <p className="hero-text">
            We create modern, fast and responsive websites for
            startups, businesses and personal brands.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">
              Start a Project →
            </a>

            <a href="#projects" className="secondary-btn">
              View Projects
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-top">
            <span>●</span>
            <span>●</span>
            <span>●</span>
          </div>

          <div className="code">
            <p>&lt;<span>website</span>&gt;</p>
            <p>&nbsp;&nbsp;modern</p>
            <p>&nbsp;&nbsp;fast</p>
            <p>&nbsp;&nbsp;responsive</p>
            <p>&lt;/<span>website</span>&gt;</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section" id="services">
        <p className="section-tag">WHAT WE DO</p>

        <h2>Our Services</h2>

        <p className="section-description">
          Everything you need to build and grow your online presence.
        </p>

        <div className="services">

          <div className="service-card">
            <div className="icon">🌐</div>
            <h3>Website Development</h3>
            <p>
              Professional and responsive websites for businesses,
              startups and personal brands.
            </p>
          </div>

          <div className="service-card">
            <div className="icon">⚛️</div>
            <h3>React Development</h3>
            <p>
              Fast and interactive web applications using React.js.
            </p>
          </div>

          <div className="service-card">
            <div className="icon">🛒</div>
            <h3>E-Commerce</h3>
            <p>
              Complete online stores with products, payments and
              order management.
            </p>
          </div>

          <div className="service-card">
            <div className="icon">⚙️</div>
            <h3>Full-Stack Development</h3>
            <p>
              Complete frontend and backend applications using
              modern technologies.
            </p>
          </div>

          <div className="service-card">
            <div className="icon">🚀</div>
            <h3>Deployment</h3>
            <p>
              Deploy your website and make it available to customers
              worldwide.
            </p>
          </div>

          <div className="service-card">
            <div className="icon">🔧</div>
            <h3>Website Maintenance</h3>
            <p>
              Updates, bug fixing, improvements and ongoing support.
            </p>
          </div>

        </div>
      </section>

      {/* Projects */}
      <section className="section projects-section" id="projects">
  <p className="section-tag">OUR WORK</p>

  <h2>Recent Projects</h2>

  <div className="projects">

    <div className="project-card">
      <div className="project-image">
        E-Commerce
      </div>

      <div className="project-info">
        <h3>Online Store</h3>
        <p>React • Node.js • MongoDB</p>

        <button
          onClick={() =>
            setSelectedProject({
              title: "Online Store",
              description:
                "A modern e-commerce website where customers can browse products, add products to cart and place orders.",
              tech: "React.js • Node.js • Express.js • MongoDB"
            })
          }
        >
          View Project →
        </button>
      </div>
    </div>


    <div className="project-card">
      <div className="project-image">
        Restaurant
      </div>

      <div className="project-info">
        <h3>Restaurant Website</h3>
        <p>React • JavaScript • CSS</p>

        <button
          onClick={() =>
            setSelectedProject({
              title: "Restaurant Website",
              description:
                "A responsive restaurant website with menu, online ordering, contact section and modern design.",
              tech: "React.js • JavaScript • CSS"
            })
          }
        >
          View Project →
        </button>
      </div>
    </div>


    <div className="project-card">
      <div className="project-image">
        Business
      </div>

      <div className="project-info">
        <h3>Business Website</h3>
        <p>React • Tailwind CSS</p>

        <button
          onClick={() =>
            setSelectedProject({
              title: "Business Website",
              description:
                "A professional business website designed to showcase services, projects and company information.",
              tech: "React.js • Tailwind CSS"
            })
          }
        >
          View Project →
        </button>
      </div>
    </div>

  </div>


  {/* Project Modal */}

  {selectedProject && (
    <div className="project-modal">

      <div className="modal-content">

        <button
          className="close-btn"
          onClick={() => setSelectedProject(null)}
        >
          ✕
        </button>

        <div className="modal-image">
          {selectedProject.title}
        </div>

        <h2>{selectedProject.title}</h2>

        <p className="modal-description">
          {selectedProject.description}
        </p>

        <p className="modal-tech">
          <strong>Technologies:</strong>{" "}
          {selectedProject.tech}
        </p>

        <button className="live-demo-btn">
          Live Demo →
        </button>

      </div>

    </div>
  )}
</section>

      {/* About */}
      <section className="about" id="about">
        <div>
          <p className="section-tag">ABOUT US</p>

          <h2>
            We turn ideas into
            <span> powerful websites.</span>
          </h2>

          <p>
            Vedant Web helps businesses create a strong online
            presence through modern website design and development.
          </p>

          <p>
            Our focus is simple — beautiful design, great performance
            and an excellent user experience.
          </p>
        </div>

        <div className="stats">
          <div>
            <strong>20+</strong>
            <span>Projects</span>
          </div>

          <div>
            <strong>10+</strong>
            <span>Technologies</span>
          </div>

          <div>
            <strong>100%</strong>
            <span>Responsive</span>
          </div>

          <div>
            <strong>24/7</strong>
            <span>Support</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <p className="section-tag">GET IN TOUCH</p>

        <h2>Have a project in mind?</h2>

        <p>
          Tell us about your project and let's build something
          amazing together.
        </p>

        <form>
          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input type="tel"
          placeholder="Your Phone Number"
          />

          <select>
            <option>Select Service</option>
            <option>Website Development</option>
            <option>React Development</option>
            <option>E-Commerce</option>
            <option>Full-Stack Development</option>
          </select>

          <textarea
            placeholder="Tell us about your project..."
          ></textarea>

          <button type="submit">
            Send Message →
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <div className="logo">
          Vedant<span>Web</span>
        </div>

        <p>
          © 2026 Vedant Web. All rights reserved.
        </p>
      </footer>        

    </div>
  );
}

export default App; 