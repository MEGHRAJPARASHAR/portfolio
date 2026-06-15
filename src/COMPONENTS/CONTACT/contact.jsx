// import React from 'react';
import './contact.css';
import contactimg from '../../assets/contact.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

function Contact() {
  useGSAP(() => {
    let tl1 = gsap.timeline();
    tl1.from(".leftcontact img", {
      x: -300,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".leftcontact img",
        scroll: "body",
        start: "top 60%",
        end: "top 30%",
        scrub: 2,
      }
    });
    let tl2 = gsap.timeline();
    tl2.from(".rightcontact form", {
      x: 100,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rightcontact form",
        scroll: "body",
        start: "top 60%",
        end: "top 30%",
        scrub: 2,
      }
    });
  });

  return (
    <div id='contact' className='contact'>
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