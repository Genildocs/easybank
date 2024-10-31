import React from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';
import Nav from './components/Nav';
import SectionOne from './components/SectionOne';
export default function App() {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 500px)');
  const isMediumDevice = useMediaQuery(
    'only screen and (min-width : 501px) and (max-width :1400px)'
  );

  return (
    <div>
      <Nav isSmallDevice={isSmallDevice} isMediumDevice={isMediumDevice} />
      <main>
        <SectionOne />
      </main>
    </div>
  );
}
