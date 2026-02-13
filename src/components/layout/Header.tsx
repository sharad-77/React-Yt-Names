import { useState } from 'react';
import MenuSVG from '../../assets/menu.svg';
import Logo from '../../assets/YT-Names.svg';
import x from '../../assets/x.svg';
import Button from "../ui/Button";

function Header() {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  const toggleFunction = () => {
    setMenuToggle((prev) => !prev);
  };

  return (
    <header className="relative w-full bg-white shadow-sm max-w-380">
      <div className="flex md:hidden h-18 px-4 items-center justify-between">
        <button onClick={toggleFunction} className="z-50">
          <img
            src={menuToggle ? x : MenuSVG}
            alt="Menu Toggle"
            className="h-8 w-8"
          />
        </button>

        <img src={Logo} alt="Logo" className="h-10 w-32" />
      </div>

      <div className="hidden md:flex h-20 px-8 items-center justify-between">
        <img src={Logo} alt="Logo" className="h-12 w-40" />

        <ul className="flex flex-row items-center space-x-10 font-medium text-gray-700">
          <li className="hover:text-red-600 cursor-pointer">Home</li>
          <li className="hover:text-red-600 cursor-pointer">Why Choose Us</li>
          <li className="hover:text-red-600 cursor-pointer">Testimonials</li>
          <li className="hover:text-red-600 cursor-pointer">FAQ</li>
          <li className="hover:text-red-600 cursor-pointer">Contact</li>
          <Button variant={'primary'}>Get Stared</Button>
        </ul>
      </div>

      {menuToggle && (
        <ul className="absolute top-18 left-1 right-1 p-2 bg-gray-500 border-b rounded-b-2xl border-gray-200 flex flex-col shadow-2xl md:hidden z-40 animate-in slide-in-from-top">
          <li
            className="flex justify-center text-lg font-bold pb-2"
            onClick={toggleFunction}
          >
            Home
          </li>
          <li
            className="flex justify-center text-lg font-bold pb-2"
            onClick={toggleFunction}
          >
            Why Choose Us
          </li>
          <li
            className="flex justify-center text-lg font-bold pb-2"
            onClick={toggleFunction}
          >
            Testimonials
          </li>
          <li
            className="flex justify-center text-lg font-bold pb-2"
            onClick={toggleFunction}
          >
            FAQ
          </li>
          <li
            className="flex justify-center text-lg font-bold pb-2"
            onClick={toggleFunction}
          >
            Contact
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;
