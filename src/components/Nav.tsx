import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

interface ChildProps {
  isSmallDevice: boolean;
  isMediumDevice?: boolean;
}

export default function Nav({ isSmallDevice, isMediumDevice }: ChildProps) {
  return (
    <div className="bg-white shadow-sm flex justify-between items-center z-50  p-5 relative sm:px-20">
      {isSmallDevice && <MobileNav />}
      {isMediumDevice && <DesktopNav />}
    </div>
  );
}
