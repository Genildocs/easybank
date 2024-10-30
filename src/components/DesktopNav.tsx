import React from 'react';
const links: string[] = ['Home', 'About', 'Contact', 'Blog', 'Careers'];
export default function DasktopNav() {
  return (
    <div>
      <div>Logo</div>
      <ul>
        {links.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>
      <div>
        <button>Request Invite</button>
      </div>
    </div>
  );
}
