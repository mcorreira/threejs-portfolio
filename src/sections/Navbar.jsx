import { useState } from "react";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {["Home", "About", "Projects", "Contact"].map((item, index) => (
        <li key={index} className="nav-li">
          <a href="/" className="nav-li_a"></a>
        </li>
      ))}
    </ul>
  );
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          {/*look in index.css to c-space - utility class I defined, non-native tailwid CSS className*/}
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Correira
          </a>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle Menu"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          <nav className={"sm:flex hidden"}>
            <NavItems />
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
