import Logo from './Logo';
import Menu from './Menu';

function Header() {
  return (
    <div className="bg-teal-400 sticky w-screen h-20 min-w-5xl flex flex-col">
      <div className="flex-1 max-w-5xl w-full mx-auto flex items-center justify-between">
        <Logo />
        <Menu />
      </div>
    </div>
  );
}

export default Header;
