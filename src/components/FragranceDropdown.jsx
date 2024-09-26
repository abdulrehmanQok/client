import React, { useState } from 'react';

const FragranceDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          Fragrances
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v10.586l3.707-3.707a1 1 0 011.414 1.414l-5.121 5.121a1 1 0 01-1.414 0L4.293 12.707a1 1 0 011.414-1.414L9.414 14.586V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-emerald-500 hover:text-white"
              role="menuitem"
            >
              Men
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-emerald-500 hover:text-white"
              role="menuitem"
            >
              Women
            </a>
            <div className="border-t border-gray-200 my-1"></div>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-emerald-500 hover:text-white"
              role="menuitem"
            >
              Men’s Floral
            </a>
            <a
              href="#"
              className="text-gray-700 block px-4 py-2 text-sm hover:bg-emerald-500 hover:text-white"
              role="menuitem"
            >
              Women’s Citrus
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default FragranceDropdown;
