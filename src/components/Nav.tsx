import React from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

export default function Nav() {
  const links: string[] = ['Home', 'About', 'Contact', 'Blog', 'Careers'];

  return (
    <div className="bg-white shadow-sm flex justify-between items-center  p-5 relative">
      <MobileNav />
      {/* <DesktopNav /> */}
    </div>
  );
}
