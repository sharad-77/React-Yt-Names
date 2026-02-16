import { useState } from 'react';
import {
  Logo,
  MenuIcon as MenuSVG,
  CloseIcon as x,
  NavbarSend,
} from "../../assets";
import Button from "../ui/Button";

export function Header() {
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  const toggleFunction = () => {
    setMenuToggle((prev) => !prev);
  };

  return (
    <header className="relative w-full max-w-7xl bg-white md:rounded-full">
      <div className="flex h-18 items-center justify-between px-4 md:hidden">
        <button onClick={toggleFunction} className="z-50">
          <img
            src={menuToggle ? x : MenuSVG}
            alt="Menu Toggle"
            className="h-8 w-8"
          />
        </button>

        <img src={Logo} alt="Logo" className="h-8 w-28 lg:h-10 lg:w-32" />
      </div>

      <div className="hidden h-20 items-center justify-between px-8 md:flex">
        <img src={Logo} alt="Logo" className="h-12 w-40" />

        <ul className="flex flex-row items-center space-x-5 font-medium text-gray-700 lg:space-x-10">
          <li className="text-secondary flex cursor-pointer gap-2">
            <img src={NavbarSend} alt="NavbarSend" /> Home
          </li>
          <li className="hover:text-secondary cursor-pointer">Why Choose Us</li>
          <li className="hover:text-secondary cursor-pointer">Testimonials</li>
          <li className="hover:text-secondary cursor-pointer">FAQ</li>
          <li className="hover:text-secondary cursor-pointer">Contact</li>
        </ul>

        <Button variant={"primary"} size={"md"}>
          Get Stared
        </Button>
      </div>

      {menuToggle && (
        <ul className="animate-in slide-in-from-top absolute top-18 right-1 left-1 z-40 flex flex-col rounded-b-2xl border-b border-gray-200 bg-white p-2 md:hidden">
          <li
            className="text-md text-secondary flex cursor-pointer justify-center gap-2 pb-2"
            onClick={toggleFunction}
          >
            <img src={NavbarSend} alt="NavbarSend" />
            Home
          </li>
          <li
            className="text-md flex justify-center pb-2"
            onClick={toggleFunction}
          >
            Why Choose Us
          </li>
          <li
            className="text-md flex justify-center pb-2"
            onClick={toggleFunction}
          >
            Testimonials
          </li>
          <li
            className="text-md flex justify-center pb-2"
            onClick={toggleFunction}
          >
            FAQ
          </li>
          <li
            className="text-md flex justify-center pb-2"
            onClick={toggleFunction}
          >
            Contact
          </li>
        </ul>
      )}
    </header>
  );
}