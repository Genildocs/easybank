import React from 'react';
import Logo from '/assets/images/logo.svg';
import Btn from './Btn';
const links: string[] = ['Home', 'About', 'Contact', 'Blog', 'Careers'];
export default function DasktopNav() {
  return (
    <>
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <ul className="flex items-center justify-between gap-5">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-grayish-blue">
              {link}
            </a>
          </li>
        ))}
      </ul>
      <div>
        <Btn />
      </div>
    </>
  );
}
