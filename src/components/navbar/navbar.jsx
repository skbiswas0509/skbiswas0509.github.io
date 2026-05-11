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

const NAV_ITEMS = [
  { id: "home",        label: "Home"         },
  { id: "about",       label: "About Me"     },
  { id: "education",   label: "Education"    },
  { id: "experience",  label: "Experience"   },
  { id: "certificate", label: "Certificates" },
  { id: "services",    label: "Services"     },
  { id: "work",        label: "Projects"     },
  { id: "contact",     label: "Contact"      },
];

const Navbar = () => {
  const [menu, setMenu]         = useState("home");
  const [isOpen, setIsOpen]     = useState(false);
  const menuRef                 = useRef();

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Active section tracking on scroll
  useEffect(() => {
    const sections = NAV_ITEMS.map(i => i.id);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      for (const id of sections) {
        const section = document.getElementById(id);
        if (!section) continue;
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setMenu(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMenu  = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (id) => {
    setMenu(id);
    closeMenu();
  };

  return (
    <>
      {/* Backdrop — clicking it closes the drawer */}
      <div
        className={`nav-backdrop ${isOpen ? 'active' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div className='navbar'>
        {/* Logo */}
        <img src={logo} alt="Logo" />

        {/* Hamburger (mobile only) */}
        <img
          src={menu_open}
          onClick={openMenu}
          alt="Open menu"
          className='nav-mob-open'
        />

        {/* Side drawer / desktop menu */}
        <ul ref={menuRef} className={`nav-menu ${isOpen ? 'open' : ''}`}>

          {/* Close button inside drawer (mobile only) */}
          <img
            src={menu_close}
            onClick={closeMenu}
            alt="Close menu"
            className="nav-mob-close"
          />

          {NAV_ITEMS.map(item => (
            <li key={item.id}>
              <AnchorLink
                className='anchor-link'
                href={`#${item.id}`}
                offset={50}
                onClick={() => handleNavClick(item.id)}
              >
                <p>{item.label}</p>
              </AnchorLink>
              {menu === item.id && (
                <img src={underline} alt='underline' />
              )}
            </li>
          ))}
        </ul>

        {/* Social icons (desktop / tablet only) */}
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
    </>
  );
};

export default Navbar;
