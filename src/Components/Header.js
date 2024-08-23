import React, { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-scroll";

const navigation = [
  { name: "Home", href: "hero", current: false },
  { name: "Services", href: "our-services", current: false },
  { name: "Trust", href: "why-choose-us", current: false },
  { name: "Reviews", href: "testimonials", current: false },
  { name: "Team", href: "developer-profiles", current: false },
  { name: "Projects", href: "previous-projects", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [active, setActive] = useState("Home");

  const handleClick = (name) => {
    setActive(name);
    if (name === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Disclosure
      as="nav"
      className="bg-gray-800 dark:bg-gray-600 text-white shadow-md dark:shadow-lg fixed top-0 w-full z-50"
    >
      <div className="mx-auto px-2 sm:px-4 lg:px-3">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button with logo beside */}
          <div className="flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 dark:text-gray-300 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
            <div className="ml-3">
              <h1 className="text-white font-bold text-2xl">Zuntly</h1>
            </div>
          </div>

          {/* Company Logo for desktop view */}
          <div className="hidden sm:flex items-center pl-3">
            <div className="flex-shrink-0">
              <h1 className="text-white font-bold text-2xl">Zuntly</h1>
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden sm:flex sm:items-center sm:justify-center flex-grow">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  smooth={true}
                  duration={500}
                  className={classNames(
                    active === item.name
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-3 py-2 text-md font-medium cursor-pointer"
                  )}
                  onClick={() => handleClick(item.name)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:ml-6 sm:pr-0">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.href}
              smooth={true}
              duration={500}
              className={classNames(
                active === item.name
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
              onClick={() => handleClick(item.name)}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Header;
