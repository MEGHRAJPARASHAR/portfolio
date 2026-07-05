import './projects.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    title: 'BiteRush — Full Stack Food Delivery Platform',
    tech: ['React.js', 'TypeScript', 'Redux Toolkit', 'Node.js', 'Express.js v5', 'MongoDB', 'Socket.IO', 'Razorpay', 'Cloudinary'],
    description:
      'Production-grade full-stack food delivery platform with 3 user roles (Customer, Restaurant Owner, Delivery Partner), 8 route modules, and 30+ REST API endpoints. Features Google OAuth 2.0, JWT authentication, OTP-based forgot-password via Nodemailer, Razorpay payments with HMAC-SHA256 verification, and real-time order tracking via Socket.IO.',
    highlights: [
      '3 user roles: Customer, Restaurant Owner, Delivery Partner',
      '30+ REST API endpoints across 8 route modules (MVC)',
      'Google OAuth 2.0 + JWT auth + OTP forgot-password flow',
      'Razorpay payment gateway with server-side signature verification',
      'Real-time order tracking via Socket.IO room-based architecture',
      '6 Mongoose schemas with Cloudinary image uploads via Multer',
    ],
    status: 'live',
    statusLabel: 'Live',
    live: 'https://bite-rush-delta.vercel.app/',
    github: 'https://github.com/MEGHRAJPARASHAR/BiteRush-',
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
    live: 'https://meghrajparashar.github.io/quiz',
    github: 'https://github.com/MEGHRAJPARASHAR/quiz',
  },
];


import { useRef } from 'react';
function Projects() {
  const container = useRef();
  useGSAP(() => {
    gsap.from(".projects-header", {
      y: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".projects",
        start: "top 70%",
      }
    });
    gsap.from(".project-card", {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 70%",
      }
    });
  }, { scope: container });

  return (
    <div id="projects" className="projects" ref={container}>
      <h2 className="projects-header">Projects</h2>
      
      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-top">
              <h3 className="project-title">{project.title}</h3>
              <span className={`project-status ${project.status}`}>{project.statusLabel}</span>
            </div>
            
            <p className="project-desc">{project.description}</p>
            
            <ul className="project-highlights">
              {project.highlights.map((hl, i) => (
                <li key={i}>{hl}</li>
              ))}
            </ul>
            
            <div className="project-tech">
              {project.tech.map((t, i) => (
                <span key={i} className="tech-chip">{t}</span>
              ))}
            </div>
            
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="project-btn github-btn">
                  GitHub
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className="project-btn live-btn">
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
