import { useEffect, useState } from 'react'
import './App.css'

const SKILLS = {
  Backend: ['Node.js', 'Express.js', 'PHP', 'REST API', 'JWT Auth', 'Nodemailer', 'bcryptjs', 'express-rate-limit'],
  Frontend: ['React.js', 'Redux Toolkit', 'TailwindCSS', 'HTML', 'CSS', 'JavaScript', 'Axios', 'React Router DOM'],
  Database: ['MongoDB', 'MongoDB Atlas', 'Mongoose', 'MySQL'],
  Tools: ['Git', 'GitHub', 'Linux', 'Postman', 'VS Code', 'Vite'],
  Languages: ['C', 'C++', 'Python'],
}

const PROJECTS = [
  {
    title: 'Bingo — Food Delivery App',
    tech: ['Node.js', 'Express.js', 'MongoDB Atlas', 'React.js', 'Redux Toolkit', 'TailwindCSS', 'JWT', 'Nodemailer', 'bcryptjs'],
    description:
      'Production-grade MERN food delivery platform with a 3-role system (Customer · Owner · Delivery Boy). Features OTP-based password reset via email, JWT + httpOnly cookie auth, role-based middleware, Redux Toolkit state management, and REST APIs for shops, menu items, cart, and orders. Cart total calculated on-the-fly — no redundant DB storage. Built with MVC architecture.',
    highlights: [
      '7 auth routes including OTP forgot-password flow',
      '3-role RBAC: Customer, Shop Owner, Delivery Boy',
      'JWT + httpOnly cookies for secure, stateless auth',
      'Cart total computed on-the-fly (no redundant storage)',
      'Coming: Razorpay · Socket.io · Live map tracking',
    ],
    status: 'dev',
    statusLabel: 'In Development',
    github: 'https://github.com/MEGHRAJPARASHAR/FoodDeliveryApp',
  },
  {
    title: 'Coffee E-Commerce',
    tech: ['React.js', 'Vite', 'Firebase'],
    description:
      'Responsive e-commerce frontend for a coffee brand. Integrated Firebase for user authentication and real-time data storage. Deployed live with full Firebase Auth flow; Razorpay payment integration planned.',
    highlights: [
      'Live client deployment',
      'Firebase Auth + real-time DB',
      'Component-based React architecture',
    ],
    status: 'live',
    statusLabel: 'Live',
    live: 'https://react-coffe-website.vercel.app/',
    github: 'https://github.com/MEGHRAJPARASHAR',
  },
  {
    title: 'CS Quiz Platform',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS'],
    description:
      'Computer Science quiz platform supporting timed sessions from 5 to 60 minutes. Dynamic question rendering and score tracking using PHP sessions and MySQL — clean session-based architecture.',
    highlights: [
      'Flexible 5–60 min timed sessions',
      'PHP session-based architecture',
      'Dynamic question rendering',
    ],
    status: 'done',
    statusLabel: 'Completed',
    github: 'https://github.com/MEGHRAJPARASHAR/quiz',
  },
  {
    title: 'Todo List App',
    tech: ['React.js', 'JavaScript', 'CSS'],
    description:
      'A clean, responsive task management app built with React. Supports adding, completing, and deleting tasks with a minimal UI — deployed live on GitHub Pages.',
    highlights: [
      'Add, complete, and delete tasks',
      'React component-based architecture',
      'Deployed on GitHub Pages',
    ],
    status: 'live',
    statusLabel: 'Live',
    live: 'https://meghrajparashar.github.io/TodoList_Host/',
    github: 'https://github.com/MEGHRAJPARASHAR/TodoList_Host',
  },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#hero" className="nav-logo">
          <span className="logo-bracket">&lt;</span>MP<span className="logo-bracket">/&gt;</span>
        </a>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {['About', 'Experience', 'Projects', 'Contact'].map((item, i) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link" onClick={close}>
              <span className="nav-num">0{i + 1}.</span>{item}
            </a>
          ))}
          <a href="mailto:meghrajparashar@gmail.com" className="nav-cta" onClick={close}>
            Hire Me
          </a>
        </div>
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(m => !m)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>
      {menuOpen && <div className="menu-overlay" onClick={close} />}
    </>
  )
}

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-left">
        <p className="hero-intro">Hi, my name is</p>
        <h1 className="hero-name">Meghraj<br />Parashar.</h1>
        <h2 className="hero-tagline">I build things for the web.</h2>
        <p className="hero-bio">
          BCA Graduate (2026) from JB Knowledge Park, MDU University & Master Diploma
          holder in Software Engineering from Arth Institute — based in New Delhi, India.
          I specialize in building scalable backend systems and full-stack web
          applications using the <span className="hl">MERN stack</span> — with a
          strong focus on <span className="hl">REST APIs</span>, <span className="hl">MongoDB</span>,
          and <span className="hl">JWT authentication</span>.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="https://mail.google.com/mail/?view=cm&to=meghrajparashar@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary">
            Say Hello on Gmail 
            </a>        
            </div>
        <div className="hero-social">
          <a href="https://github.com/MEGHRAJPARASHAR" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a href="https://linkedin.com/in/meghraj-parashar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="mailto:meghrajparashar@gmail.com" aria-label="Email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>
      </div>

      <div className="hero-right">
        <div className="code-window">
          <div className="code-titlebar">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
            <span className="code-filename">meghraj.js</span>
          </div>
          <pre className="code-body"><code>
<span className="c-keyword">const</span> <span className="c-var">developer</span> <span className="c-op">=</span> {'{'}
  <span className="c-prop">name</span><span className="c-op">:</span> <span className="c-str">"Meghraj Parashar"</span><span className="c-op">,</span>
  <span className="c-prop">role</span><span className="c-op">:</span> <span className="c-str">"Full Stack Dev"</span><span className="c-op">,</span>
  <span className="c-prop">focus</span><span className="c-op">:</span> <span className="c-str">"Backend"</span><span className="c-op">,</span>
  <span className="c-prop">stack</span><span className="c-op">:</span> [
    <span className="c-str">"Node.js"</span><span className="c-op">,</span>
    <span className="c-str">"Express"</span><span className="c-op">,</span>
    <span className="c-str">"MongoDB"</span><span className="c-op">,</span>
    <span className="c-str">"React"</span>
  ]<span className="c-op">,</span>
  <span className="c-prop">building</span><span className="c-op">:</span> <span className="c-str">"Bingo App"</span><span className="c-op">,</span>
  <span className="c-prop">openTo</span><span className="c-op">:</span> <span className="c-str">"opportunities"</span>
{'}'}<span className="c-op">;</span>
          </code></pre>
        </div>
      </div>

      <div className="scroll-hint">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <h2 className="sec-heading">
        <span className="sec-num">01.</span> About Me
        <span className="sec-line" />
      </h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm a recent <span className="hl">BCA Graduate (2026)</span> from JB Knowledge Park,
            MDU University and hold a <span className="hl">Master Diploma in Software Engineering</span> from
            Arth Institute — based in New Delhi, India.
          </p>
          <p>
            My passion is backend development — designing clean REST APIs, building secure
            auth systems with JWT, and structuring MongoDB schemas that scale. I've shipped
            real features in a production web app during my internship, and I'm currently
            building <span className="hl">Bingo</span>, a full-stack Food Delivery App with a 3-role
            system (Customer · Owner · Delivery Boy), OTP-based email auth, Redux Toolkit
            state management, and real-time order tracking (coming soon).
          </p>
          <p>
            Outside of code, I'm grinding DSA on LeetCode (Striver's A2Z sheet in JavaScript),
            documenting my dev journey publicly on LinkedIn, and always looking for the next
            interesting problem to solve.
          </p>

          <div className="skills-wrapper">
            {Object.entries(SKILLS).map(([cat, items]) => (
              <div key={cat} className="skill-group">
                <h4 className="skill-cat">{cat}</h4>
                <div className="skill-tags">
                  {items.map(s => <span key={s} className="skill-pill">{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="about-edu">
          <h3 className="edu-heading">Education</h3>
          <div className="edu-list">
            {[
              {
                year: '2023 – 2026',
                degree: 'Bachelor of Computer Applications',
                school: 'JB Knowledge Park, MDU University',
              },
              {
                year: '2024',
                degree: 'Master Diploma — Software Engineering',
                school: 'Arth Institute',
              },
              {
                year: '2024',
                degree: 'Algorithms & Data Structures',
                school: 'Udemy Certificate',
              },
            ].map(e => (
              <div key={e.degree} className="edu-item">
                <span className="edu-year">{e.year}</span>
                <div>
                  <h4 className="edu-degree">{e.degree}</h4>
                  <p className="edu-school">{e.school}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="currently-box">
            <h4 className="currently-label">Currently Building</h4>
            <p className="currently-text">
              Bingo — MERN food delivery app with 3-role RBAC, Redux Toolkit, real-time order tracking via Socket.io, and Razorpay payments.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="sec-heading">
        <span className="sec-num">02.</span> Experience
        <span className="sec-line" />
      </h2>
      <div className="exp-card">
        <div className="exp-top">
          <div>
            <h3 className="exp-role">Software Development Intern</h3>
            <p className="exp-company">Arth Institute &nbsp;·&nbsp; New Delhi</p>
          </div>
          <span className="exp-date">Jun – Aug 2024</span>
        </div>
        <ul className="exp-points">
          <li>Built RESTful APIs using Node.js and Express.js for production web application features</li>
          <li>Designed MongoDB schemas and optimized queries, improving average API response time by ~20%</li>
          <li>Implemented JWT authentication and role-based access control (RBAC) for secure user management</li>
          <li>Collaborated with a 3-member team using Git for version control; deployed prototype to Vercel</li>
        </ul>
        <div className="exp-tech">
          {['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Git', 'Vercel'].map(t => (
            <span key={t} className="tech-chip">{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="sec-heading">
        <span className="sec-num">03.</span> Projects
        <span className="sec-line" />
      </h2>
      <div className="projects-grid">
        {PROJECTS.map(p => (
          <div key={p.title} className={`proj-card ${p.status === 'dev' ? 'proj-featured' : ''}`}>
            <div className="proj-top">
              <svg className="proj-folder" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
              <div className="proj-actions">
                {p.live && (
                  <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label="Live link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                  </a>
                )}
                <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                </a>
              </div>
            </div>
            <span className={`proj-status ${p.status}`}>{p.statusLabel}</span>
            <h3 className="proj-title">{p.title}</h3>
            <p className="proj-desc">{p.description}</p>
            {p.highlights && (
              <ul className="proj-highlights">
                {p.highlights.map(h => <li key={h}>{h}</li>)}
              </ul>
            )}
            <div className="proj-tech">
              {p.tech.map(t => <span key={t} className="tech-chip">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <p className="contact-eyebrow"><span className="sec-num">04.</span> What's Next?</p>
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-body">
        I'm currently looking for new opportunities — whether it's a full-time role,
        internship, or a freelance project. My inbox is always open. Say hello!
      </p>
      <a href="https://mail.google.com/mail/?view=cm&to=meghrajparashar@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary">
        Say Hello on Gmail 
        </a>
      <div className="contact-links">
       <div className='btn-secondary'> <a href="https://github.com/MEGHRAJPARASHAR" target="_blank" rel="noopener noreferrer">GitHub</a></div>
        <span className="dot-sep">·</span>
        <div className='btn-secondary'>
        <a href="https://linkedin.com/in/meghraj-parashar" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <span className="dot-sep">·</span>
        <div className='btn-secondary'>
        <a href="tel:+918595988011">+91 85959 88011</a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>Designed & Built by <span className="hl">Meghraj Parashar</span></p>
    </footer>
  )
}

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}