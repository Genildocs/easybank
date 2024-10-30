import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon } from '@heroicons/react/24/solid';
import Logo from '/assets/images/logo.svg';
const links: string[] = ['Home', 'About', 'Contact', 'Blog', 'Careers'];
export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <button onClick={() => setIsOpen(!isOpen)}>
        <Bars3Icon className="h-6 w-6" />
      </button>

      <motion.ul
        className={`bg-white gap-5 transition-all  absolute top-[150%] left-5 right-5 py-5 rounded-md   flex flex-col items-center ${
          isOpen ? ' opacity-0 invisible' : ' opacity-100 visible '
        } `}>
        {links.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </motion.ul>
    </>
  );
}
