import React, { useState, useRef, useEffect } from 'react'
import './navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import linkedinLight from '../../assets/linkedin-light.svg';
import githubLight from '../../assets/github-light.svg';
import twitterLight from '../../assets/twitter-light.svg';
import thm from '../../assets/thm.svg';
import htb from '../../assets/htb.svg';

import logo from '../../assets/logo.png'
import underline from '../../assets/underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => { menuRef.current.style.right = "0"; }
  const closeMenu = () => { menuRef.current.style.right = "-350px"; }

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "education",
      "experience",
      "certificate",
      "services",
      "work",
      "contact"
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; 
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setMenu(sections[i]);
          break;
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" />
      <img src={menu_open} onClick={openMenu} alt="Open menu" className='nav-mob-open'/>

      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="Close menu" className="nav-mob-close" />

        {[
          { id: "home", label: "Home" },
          { id: "about", label: "About Me" },
          { id: "education", label: "Education" },
          { id: "experience", label: "Experience" },
          { id: "certificate", label: "Certificates" },
          { id: "services", label: "Services" },
          { id: "work", label: "Projects" },
          { id: "contact", label: "Contact" }
        ].map(item => (
          <li key={item.id}>
            <AnchorLink
              className='anchor-link'
              href={`#${item.id}`}
              offset={50}
              onClick={() => setMenu(item.id)}
            >
              <p>{item.label}</p>
            </AnchorLink>
            {menu === item.id && <img src={underline} alt='underline' />}
          </li>
        ))}
      </ul>

      <div className="nav-connect">
        {/* <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <img src={twitterLight} alt="Twitter icon" />
        </a> */}
        <a href="https://www.linkedin.com/in/sukumar-biswas-919888244/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLight} alt="Linkedin icon" />
        </a>
        <a href="https://github.com/skbiswas0509" target="_blank" rel="noopener noreferrer">
          <img src={githubLight} alt="Github icon" />
        </a>
        <a href="https://tryhackme.com/p/skbiswas0509" target="_blank" rel="noopener noreferrer">
          <img src={thm} alt="Tryhackme icon" />
        </a>
        <a href="https://app.hackthebox.com/users/2394578" target="_blank" rel="noopener noreferrer">
          <img src={htb} alt="Hackthebox icon" />
        </a>
      </div>
    </div>
  )
}

export default Navbar;