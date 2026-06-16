import './projects.css';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

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
