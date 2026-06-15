import  { useRef } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Navbar() {
  const menu = useRef(null);
  const mobile = useRef(null);
  const toggleMenu = () => {
    mobile.current.classList.toggle('activemobilemenu');
    menu.current.classList.toggle('activehamburger');
  };

  useGSAP(() => {
    let tl1 = gsap.timeline();
    tl1.from("nav h1", {
      y: -100,
      opacity: 0,
      delay: 0.5,
      stagger: 0.2,
      duration: 1,
    }, [menu, mobile]);
    tl1.from("li", {
      y: -100,
      opacity: 0,
      delay: 0.5,
      stagger: 0.2,
      duration: 1,
      color: 'red'
    });
  });

  return (
    <nav>
      <h1>PORTFOLIO</h1>
      <ul className='desktopmenu'>
        <Link to="home" activeClass="active" spy={true} smooth={true} duration={500}>
          <li>HOME</li>
        </Link>
        <Link to="about" activeClass="active" spy={true} smooth={true} duration={500}>
          <li>ABOUT</li>
        </Link>
        <Link to="projects" activeClass="active" spy={true} smooth={true} duration={500}>
          <li>PROJECTS</li>
        </Link>
        <Link to="contact" activeClass="active" spy={true} smooth={true} duration={500}>
          <li>CONTACT</li>
        </Link>
      </ul>
      <div className='hamburger' ref={menu} onClick={toggleMenu}>
        <div className='ham'></div>
        <div className='ham'></div>
        <div className='ham'></div>
      </div>
      <ul className='mobilemenu' ref={mobile}>
        <Link to="home" activeClass="active" spy={true} smooth={true} duration={500}>
          <li>HOME</li>
        </Link>
        <Link to="about" activeClass="active" spy={true} smooth={true} duration={500}>
          <li>ABOUT</li>
        </Link>
        <Link to="projects" activeClass="active" spy={true} smooth={true} duration={500}>
          <li>PROJECTS</li>
        </Link>
        <Link to="contact" activeClass="active" spy={true} smooth={true} duration={500}>
          <li>CONTACT</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;