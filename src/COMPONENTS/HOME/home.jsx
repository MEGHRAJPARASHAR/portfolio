// import React from 'react';
import './home.css';
import man from '../../assets/man.png';
import TypingEffect from "react-typing-effect";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Home() {
  useGSAP(() => {
    let tl1 = gsap.timeline();
    tl1.from(".line1", {
      y: 100,
      stagger: 0.2,
      opacity: 0,
    });
    tl1.from(".line2", {
      y: 100,
      stagger: 0.2,
      opacity: 0,
    });
    tl1.from(".line3", {
      y: 100,
      stagger: 0.2,
      opacity: 0,
    });
    tl1.from(".righthome img", {
      x: 100,
      opacity: 0,
    });
  });

  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I am</div>
          <div className="line2">Meghraj</div>
          <div className="line3">
            <TypingEffect
              text={["Web Developer", "Software Developer", "Full Stack Developer"]}
              speed={50}
              eraseSpeed={30}
              eraseDelay={500}
              typingDelay={500}
              cursor="|"
            />
          </div>
          <button>Hire Me</button>
        </div>
      </div>
      <div className="righthome">
        <img src={man} alt="man" />
      </div>
    </div>
  );
}

export default Home;