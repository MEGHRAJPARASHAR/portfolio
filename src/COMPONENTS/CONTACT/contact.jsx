// import React from 'react';
import './contact.css';
import contactimg from '../../assets/contact.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

import { useRef } from 'react';
function Contact() {
  const container = useRef();
  useGSAP(() => {
    gsap.from(".leftcontact img", {
      x: -300,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".contact",
        start: "top 60%",
      }
    });
    gsap.from(".rightcontact form", {
      x: 100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".contact",
        start: "top 60%",
      }
    });
  }, { scope: container });

  return (
    <div id='contact' className='contact' ref={container}>
      <div className='leftcontact'>
        <img src={contactimg} alt="contact" />
      </div>
      <div className='rightcontact'>
        <form action="https://formspree.io/f/mqakddpb" method="POST">
          <input name='username' type="text" placeholder='Your Name' />
          <input name='email' type="email" placeholder='Your Email' />
          <textarea name='message' id="" cols="30" rows="10" placeholder='Your Message'></textarea>
          <button type='submit'>Submit</button>
        </form>
        <div className='socials'></div>
      </div>
    </div>
  );
}

export default Contact;
