import "./about.css";
import Card from "../CARD/card";
import mern from '../../assets/mern.png';
import reactIcon from '../../assets/react.svg';
import backendIcon from '../../assets/backend.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

import { useRef } from 'react';
function About() {
  const container = useRef();
  useGSAP(() => {
    gsap.from(".circle", {
      x: -100,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".circle-line",
        start: "top 70%",
      }
    });
    gsap.from(".line", {
      x: -100,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".circle-line",
        start: "top 70%",
      }
    });
    gsap.from(".aboutdetails h2", {
      x: -100,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".aboutdetails",
        start: "top 70%",
      }
    });
    gsap.from(".aboutdetails li", {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".aboutdetails",
        start: "top 70%",
      }
    });
    gsap.from(".card", {
      x: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".rightabout",
        start: "top 70%",
      }
    });
  }, { scope: container });

  return (
    <div id="about" className="about" ref={container}>
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutdetails">
          <div className="personalinfo">
            <h2>Personal Info</h2>
            <ul>
              <li>
                <span className="red">Name: </span>
                <span className="blue">Meghraj parashar</span>
              </li>
              <li>
                <span className="red">Age: </span>
                <span className="blue">21</span>
              </li>
              <li>
                <span className="red">Email: </span>
                <span className="blue">meghrajparashar@gmail.com</span>
              </li>
              <li>
                <span className="red">Language: </span>
                <span className="blue">English, Hindi</span>
              </li>
            </ul>
          </div>
          <div className="personalinfo">
            <h2>Skills Info</h2>
            <ul>
              <li>
                <span className="red">Backend: </span>
                <span className="blue">Node.js, Express.js, PHP, REST API, JWT Auth, Nodemailer, bcryptjs, express-rate-limit</span>
              </li>
              <li>
                <span className="red">Frontend: </span>
                <span className="blue">React.js, Redux Toolkit, TailwindCSS, HTML, CSS, JavaScript, Axios, React Router DOM</span>
              </li>
              <li>
                <span className="red">Database: </span>
                <span className="blue">MongoDB, MongoDB Atlas, Mongoose, MySQL</span>
              </li>
              <li>
                <span className="red">Tools: </span>
                <span className="blue">Git, GitHub, Linux, Postman, VS Code, Vite</span>
              </li>
              <li>
                <span className="red">Languages: </span>
                <span className="blue">C, C++, Python</span>
              </li>
            </ul>
          </div>
          <div className="personalinfo">
            <h2>Education </h2>
            <ul>
              <li>
                <span className="red">Degree: </span>
                <span className="blue">BCA</span>
              </li>
              <li>
                <span className="red">Master Diploma of: </span>
                <span className="blue">Software engeneering</span>
              </li>
              <li>
                <span className="red">University: </span>
                <span className="blue">MDU Rohtak</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightabout">
        <Card title="MERN Stack Developer" img={mern} />
        <Card title="Frontend Developer" img={reactIcon} />
        <Card title="Backend Developer" img={backendIcon} />
      </div>
    </div>
  );
}

export default About;
