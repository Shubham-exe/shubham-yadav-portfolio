import React, { useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { projects } from './projects';

const EMAIL = 'shubham.yadav.projects@gmail.com';
const PHONE = '8693851805';
const GITHUB = 'https://github.com/Shubham-exe';
const LINKEDIN = 'https://www.linkedin.com/in/shubham-yadav-09a097352/';
const RESUME = '/Shubham-Yadav-Resume.pdf';
const NPTEL_CERTIFICATE = '/NPTEL-Data-Science-Using-Python-Certificate.pdf';

function Arrow({ diagonal = false }) {
  return (
    <span className="arrow" aria-hidden="true">
      {diagonal ? '↗' : '→'}
    </span>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  React.useEffect(() => setMenuOpen(false), [location.pathname]);
  return (
    <header className="site-header">
      <Link to="/" className="wordmark" aria-label="Shubham Yadav home">
        <span className="wordmark-icon">SY</span>
        <span>
          SHUBHAM
          <br />
          YADAV<span className="wordmark-dot">.</span>
        </span>
      </Link>
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen((v) => !v)}
        aria-expanded={menuOpen}
        aria-label="Toggle navigation"
      >
        {menuOpen ? 'CLOSE −' : 'MENU +'}
      </button>
      <nav
        className={menuOpen ? 'main-nav open' : 'main-nav'}
        aria-label="Main navigation"
      >
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/work">
          Selected work <span className="nav-count">06</span>
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <a href={RESUME} target="_blank" rel="noreferrer">
          Résumé ↗
        </a>
        <Link to="/contact" className="nav-contact">
          Let’s talk <Arrow diagonal />
        </Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <span className="footer-kicker">HAVE A GOOD ONE.</span>
        <p>
          Built with curiosity<span className="orange">.</span>
        </p>
      </div>
      <div className="footer-right">
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        <div className="footer-socials">
          <a href={GITHUB} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href={RESUME} target="_blank" rel="noreferrer">
            Résumé ↗
          </a>
        </div>
        <span>© {new Date().getFullYear()} Shubham Yadav</span>
      </div>
    </footer>
  );
}

function ProjectArtwork({ project, large = false }) {
  return (
    <div
      className={`project-art art-${project.color} ${large ? 'art-large' : ''}`}
      aria-label={`${project.title} abstract project artwork`}
    >
      <div className="art-topline">
        <span>{project.year}</span>
        <span>INDEPENDENT WORK / {project.number}</span>
      </div>
      <div className="art-shape shape-one" />
      <div className="art-shape shape-two" />
      <div className="art-grid" />
      <span className="art-mark">{project.mark}</span>
      <span className="art-side-label">IDEAS INTO INTERFACES</span>
      <div className="art-bottomline">
        <span>{project.title.toUpperCase()}</span>
        <span>VIEW PROJECT ↗</span>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <Link className="project-card" to={`/work/${project.slug}`}>
      <ProjectArtwork project={project} />
      <div className="project-card-meta">
        <div>
          <span className="eyebrow">{project.type}</span>
          <h3>
            {project.title}
            <span className="title-dot">.</span>
          </h3>
        </div>
        <span className="round-arrow">
          <Arrow diagonal />
        </span>
      </div>
      <p className="project-tagline">{project.tagline}</p>
    </Link>
  );
}

function Home() {
  return (
    <main>
      <section className="hero section-wrap">
        <div className="hero-topline">
          <span>
            <span className="live-dot" /> AVAILABLE FOR OPPORTUNITIES
          </span>
          <span>MERN STACK DEVELOPER · THANE, INDIA</span>
        </div>
        <h1>
          Making the
          <br />
          <span className="hero-outline">web feel</span>{' '}
          <span className="hero-italic">
            alive<span className="orange">.</span>
          </span>
        </h1>
        <div className="hero-bottom">
          <p className="hero-description">
            Hey, I’m Shubham Yadav — an MCA-trained developer focused on full-stack web
            applications, clean interfaces, and useful digital experiences.
          </p>
          <Link className="circle-link" to="/work" aria-label="Explore selected work">
            <span>
              SCROLL
              <br />
              TO EXPLORE
            </span>
            <Arrow diagonal />
          </Link>
        </div>
        <div className="hero-stamp" aria-hidden="true">
          <span>
            CURIOUS
            <br />
            BY DEFAULT
          </span>
          <span className="stamp-star">✳</span>
        </div>
      </section>

      <section className="intro-band">
        <div className="section-wrap intro-grid">
          <span className="eyebrow">01 / A LITTLE INTRO</span>
          <p>
            I’m a MERN stack developer with a BSc in IT and an MCA background. I enjoy
            connecting thoughtful UI with practical frontend and backend engineering.
          </p>
          <Link className="text-link" to="/about">
            A bit more about me <Arrow diagonal />
          </Link>
        </div>
      </section>
      <section className="quick-facts section-wrap">
        <div>
          <strong>6/6</strong>
          <span>INTERNSHIP TASKS SUBMITTED</span>
        </div>
        <div>
          <strong>4/4</strong>
          <span>INTERNSHIP QUIZZES CLEARED</span>
        </div>
        <div>
          <strong>MERN</strong>
          <span>FULL-STACK FOCUS</span>
        </div>
        <a className="text-link" href={RESUME} target="_blank" rel="noreferrer">
          Download résumé <Arrow diagonal />
        </a>
      </section>

      <section className="work-section section-wrap">
        <div className="section-heading">
          <div>
            <span className="eyebrow">02 / SELECTED WORK</span>
            <h2>
              Things I’ve
              <br />
              <span className="serif-italic">been building.</span>
            </h2>
          </div>
          <Link className="text-link desktop-only" to="/work">
            All projects <Arrow diagonal />
          </Link>
        </div>
        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard key={p.number} project={p} />
          ))}
        </div>
        <Link className="text-link mobile-only" to="/work">
          See all projects <Arrow diagonal />
        </Link>
      </section>

      <section className="manifesto">
        <div className="section-wrap manifesto-inner">
          <span className="eyebrow">MY APPROACH / 03</span>
          <p>
            Good work lives somewhere between <span>clear thinking</span> and{' '}
            <span className="serif-italic">a little bit of magic.</span>
          </p>
          <Link to="/about" className="manifesto-link">
            How I work <Arrow diagonal />
          </Link>
        </div>
        <span className="manifesto-spark" aria-hidden="true">
          ✳
        </span>
      </section>

      <section className="home-contact section-wrap">
        <div>
          <span className="eyebrow">GOT SOMETHING IN MIND?</span>
          <h2>
            Let’s make
            <br />
            it <span className="serif-italic">happen.</span>
          </h2>
        </div>
        <Link to="/contact" className="big-circle">
          START A<br />
          CONVERSATION <Arrow diagonal />
        </Link>
      </section>
    </main>
  );
}

function Work() {
  return (
    <main className="page-main section-wrap">
      <div className="page-intro">
        <span className="eyebrow">THE WORK / SELECTED PROJECTS</span>
        <h1>
          A few things
          <br />
          from my <span className="serif-italic">corner.</span>
        </h1>
        <p>
          Six projects across full-stack development, education, budgeting, APIs, and
          interactive interfaces. Each case study focuses on what the project does and the
          skills it helped me practise.
        </p>
      </div>
      <div className="work-list">
        {projects.map((p, i) => (
          <article className="work-row" key={p.number}>
            <ProjectArtwork project={p} />
            <div className="work-row-copy">
              <span className="eyebrow">
                {p.number} / {p.type}
              </span>
              <h2>
                {p.title}
                <span className="title-dot">.</span>
              </h2>
              <p>{p.summary}</p>
              <div className="tag-row">
                {p.stack.map((tag, idx) => (
                  <span key={idx}>{tag}</span>
                ))}
              </div>
              <Link className="text-link" to={`/work/${p.slug}`}>
                Explore case study <Arrow diagonal />
              </Link>
            </div>
          </article>
        ))}
      </div>
      <div className="work-note">
        <span className="note-mark">✳</span>
        <p>
          Every project starts with a question.
          <br />
          The interesting part is figuring out the right answer.
        </p>
      </div>
    </main>
  );
}

function ProjectDetail() {
  const location = useLocation();
  const slug = location.pathname.split('/').pop();
  const project = projects.find((p) => p.slug === slug);
  if (!project)
    return (
      <main className="section-wrap not-found">
        <span className="eyebrow">404 / WRONG TURN</span>
        <h1>
          This page
          <br />
          isn’t here<span className="orange">.</span>
        </h1>
        <Link className="text-link" to="/work">
          Back to work <Arrow />
        </Link>
      </main>
    );
  return (
    <main className="page-main section-wrap detail-page">
      <Link className="back-link" to="/work">
        ← BACK TO WORK
      </Link>
      <div className="detail-heading">
        <span className="eyebrow">
          {project.number} / {project.type}
        </span>
        <h1>
          {project.title}
          <span className="title-dot">.</span>
        </h1>
        <p>{project.tagline}</p>
      </div>
      <ProjectArtwork project={project} large />
      <div className="detail-copy-grid">
        <div>
          <span className="eyebrow">THE OVERVIEW</span>
          <p className="detail-lead">{project.summary}</p>
        </div>
        <div className="detail-facts">
          <div>
            <span>MY ROLE</span>
            <p>{project.role}</p>
          </div>
          <div>
            <span>TECHNOLOGY</span>
            <p>{project.stack.join(' · ')}</p>
          </div>
          {project.repo && (
            <a className="text-link" href={project.repo} target="_blank" rel="noreferrer">
              View repository <Arrow diagonal />
            </a>
          )}
          {project.live && (
            <a className="text-link" href={project.live} target="_blank" rel="noreferrer">
              Visit live project <Arrow diagonal />
            </a>
          )}
        </div>
      </div>
      <div className="case-study-grid">
        {[
          ['THE CHALLENGE', project.challenge],
          ['THE APPROACH', project.approach],
          ['THE OUTCOME', project.outcome],
        ].map(([title, body]) => (
          <section key={title}>
            <span className="eyebrow">{title}</span>
            <p>{body}</p>
          </section>
        ))}
      </div>
      <div className="detail-next">
        <span className="eyebrow">KEEP EXPLORING</span>
        <Link to="/work">
          More projects <Arrow diagonal />
        </Link>
      </div>
    </main>
  );
}

function About() {
  const principles = [
    {
      n: '01',
      title: 'Stay curious.',
      text: 'Ask questions before reaching for the first solution. The best ideas often start with a better question.',
    },
    {
      n: '02',
      title: 'Sweat the details.',
      text: 'Clear hierarchy, useful feedback, and thoughtful states make a product feel considered.',
    },
    {
      n: '03',
      title: 'Build to learn.',
      text: 'Make the idea real, test the assumptions, and improve it with what you discover.',
    },
  ];
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'MySQL',
    'Java',
    'REST APIs',
    'Git & GitHub',
    'Local Storage',
  ];
  return (
    <main className="page-main section-wrap about-page">
      <div className="page-intro">
        <span className="eyebrow">A LITTLE ABOUT ME / 2026</span>
        <h1>
          Developer by craft.
          <br />
          <span className="serif-italic">Curious by nature.</span>
        </h1>
        <p>
          I’m Shubham Yadav. I enjoy building digital products and learning how thoughtful
          design and solid engineering work together.
        </p>
      </div>
      <div className="about-poster">
        <div className="poster-copy">
          <span>HELLO, WORLD.</span>
          <strong>
            STAY
            <br />
            CURIOUS<span className="orange">✳</span>
          </strong>
          <span>LEARN / BUILD / REPEAT</span>
        </div>
        <div className="poster-orbit orbit-a" />
        <div className="poster-orbit orbit-b" />
        <div className="poster-sun" />
      </div>
      <section className="about-details">
        <div className="about-section-title">
          <span className="eyebrow">THE TOOLKIT</span>
          <h2>
            Things I work
            <br />
            <span className="serif-italic">with.</span>
          </h2>
          <p>Tools and technologies reflected in my projects and résumé.</p>
        </div>
        <div className="skills-cloud">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>
      <section className="principles">
        <div>
          <span className="eyebrow">WHAT I VALUE</span>
          <h2>
            How I like
            <br />
            <span className="serif-italic">to work.</span>
          </h2>
        </div>
        <div className="principle-list">
          {principles.map((p) => (
            <article key={p.n}>
              <span className="principle-num">{p.n}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
              <span className="principle-star">✳</span>
            </article>
          ))}
        </div>
      </section>
      <section className="resume-sections">
        <div className="resume-section">
          <div>
            <span className="eyebrow">EDUCATION</span>
            <h2>
              Learning
              <br />
              <span className="serif-italic">by doing.</span>
            </h2>
          </div>
          <div className="resume-item">
            <span className="resume-date">2026 — PRESENT</span>
            <h3>Master of Computer Applications (MCA)</h3>
            <p>Parul University, Vadodara, Gujarat</p>
            <span className="resume-note">
              CGPA: 7.76 / 10 (as listed in the latest résumé)
            </span>
          </div>
          <div className="resume-item">
            <span className="resume-date">2020 — 2023</span>
            <h3>Bachelor of Science in Information Technology</h3>
            <p>R.A.D.A.V. College, Bhandup, Mumbai</p>
            <span className="resume-note">CGPA: 7.52 / 10</span>
          </div>
        </div>
        <div className="resume-section">
          <div>
            <span className="eyebrow">EXPERIENCE</span>
            <h2>
              From practice
              <br />
              <span className="serif-italic">to projects.</span>
            </h2>
          </div>
          <div className="resume-item">
            <span className="resume-date">FEB 2026 — APR 2026</span>
            <h3>Full Stack Web Development Intern</h3>
            <p>Slash Mark IT Solutions (OPC) Pvt. Ltd.</p>
            <ul>
              <li>Completed all 6 assigned internship tasks.</li>
              <li>Submitted all 6 tasks and cleared 4 of 4 quizzes.</li>
              <li>
                Passed the programme's aptitude, reasoning, technical fundamentals, and
                soft-skills modules.
              </li>
            </ul>
          </div>
        </div>
        <div className="resume-section certifications-section">
          <div>
            <span className="eyebrow">CERTIFICATIONS</span>
            <h2>
              Proof of
              <br />
              <span className="serif-italic">learning.</span>
            </h2>
          </div>
          <div className="resume-item">
            <span className="resume-date">CERTIPORT</span>
            <h3>IT Specialist — HTML &amp; CSS</h3>
            <p>Score: 912 / 1000</p>
            <span className="resume-note">
              Also completed HTML, HTML5 &amp; CSS certification.
            </span>
          </div>
          <div className="resume-item">
            <span className="resume-date">CERTIPORT</span>
            <h3>IT Specialist — JavaScript</h3>
            <p>Score: 880 / 1000</p>
            <span className="resume-note">JavaScript certification.</span>
          </div>
          <div className="resume-item">
            <span className="resume-date">SWAYAM / NPTEL · JUL–OCT 2025</span>
            <h3>Data Science Using Python</h3>
            <p>12-week course · Aligarh Muslim University</p>
            <span className="resume-note">
              Consolidated score: 63% · 3 or 4 credits recommended
            </span>
            <p style={{ marginTop: '16px' }}>
              <a
                className="text-link"
                href={NPTEL_CERTIFICATE}
                target="_blank"
                rel="noreferrer"
              >
                View certificate PDF <Arrow diagonal />
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className="about-cta">
        <span className="eyebrow">ALWAYS OPEN TO LEARNING</span>
        <p>Have an interesting idea or a problem worth solving?</p>
        <Link className="text-link" to="/contact">
          Let’s talk about it <Arrow diagonal />
        </Link>
      </section>
    </main>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };
  return (
    <main className="page-main section-wrap contact-page">
      <div className="page-intro">
        <span className="eyebrow">CONTACT / SAY HELLO</span>
        <h1>
          Have a good
          <br />
          <span className="serif-italic">one in mind?</span>
        </h1>
        <p>
          Whether it’s a role, a freelance project, or just an interesting conversation —
          I’d love to hear from you.
        </p>
      </div>
      <div className="contact-layout">
        <div className="contact-big">
          <span className="eyebrow">YOUR MOVE ↘</span>
          <p>
            Let’s turn a<br />
            good idea into
            <br />
            <span className="serif-italic">something real.</span>
          </p>
          <span className="contact-doodle">✳</span>
        </div>
        <div className="contact-methods">
          <span className="eyebrow">REACH ME HERE</span>
          <button className="contact-method email-method" onClick={copyEmail}>
            <span className="method-label">EMAIL</span>
            <strong>{EMAIL}</strong>
            <span className="method-action">{copied ? 'COPIED ✓' : 'COPY ↗'}</span>
          </button>
          <a className="contact-method" href={`tel:${PHONE}`}>
            <span className="method-label">PHONE</span>
            <strong>+91 {PHONE}</strong>
            <span className="method-action">CALL ↗</span>
          </a>
          <a className="contact-method" href={GITHUB} target="_blank" rel="noreferrer">
            <span className="method-label">GITHUB</span>
            <strong>Shubham-exe</strong>
            <span className="method-action">OPEN ↗</span>
          </a>
          <a className="contact-method" href={LINKEDIN} target="_blank" rel="noreferrer">
            <span className="method-label">LINKEDIN</span>
            <strong>Let’s connect</strong>
            <span className="method-action">OPEN ↗</span>
          </a>
        </div>
      </div>
      <div className="contact-bottom">
        <span>NO FORMS. NO FUSS.</span>
        <a href={`mailto:${EMAIL}`}>
          Just send me a note <Arrow diagonal />
        </a>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <div id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <main className="section-wrap not-found">
                <span className="eyebrow">404 / WRONG TURN</span>
                <h1>
                  Nothing here
                  <br />
                  but possibility<span className="orange">.</span>
                </h1>
                <Link className="text-link" to="/">
                  Go home <Arrow />
                </Link>
              </main>
            }
          />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
