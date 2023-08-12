import React, { useState } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

const Header = () => {
  const [toggle, settoggle] = useState(false);
  /**
   *
   * @param {Object} event  
   */
  const ToggelDropDown = (event) => {
    if (!event.target) return;
    const name = event.target.innerText;
    const selected = document.getElementById("select-text");
    selected.innerText = name; // sets new text to dropdown button
    settoggle(!toggle); // close the dropdown
  };

  return (
    <div className="bg-white px-3 py-5 flex justify-start items-center">
      <div>
        <div className="relative mt-2">
          <button
            onClick={() => settoggle(!toggle)}
            type="button"
            className="relative w-32 cursor-pointer rounded-full bg-white flex justify-between items-center hover:bg-gray-50  py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 sm:text-sm sm:leading-6"
          >
            <span id="select-text" className="mx-3 font-bold block truncate">
              People
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
              {!toggle ? (
                <BiSolidDownArrow className=" mr-3 text-xs text-gray-600" />
              ) : (
                <BiSolidUpArrow className=" mr-3 text-xs text-gray-600" />
              )}
            </span>
          </button>

          <ul
            className={`absolute z-10 mt-1 max-h-56 w-36 ${
              !toggle ? "hidden" : ""
            } overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}
            tabindex="-1"
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-option-3"
          >
            <li
              onClick={ToggelDropDown}
              className="text-gray-900 relative cursor-pointer hover:bg-gray-50 py-2 pl-3 pr-9"
              id="People"
              role="option"
            >
              <div className="flex border-l-2 border-transparent  hover:border-l-2 hover:border-green-700 items-center cursor-pointer">
                <span className="font-normal ml-3 block truncate cursor-pointer">
                  People
                </span>
              </div>
            </li>
            <li
              onClick={ToggelDropDown}
              className="text-gray-900 relative cursor-pointer hover:bg-gray-50 py-2 pl-3 pr-9"
              id="Jobs"
              role="option"
            >
              <div className="flex items-center border-l-2 border-transparent  hover:border-l-2 hover:border-green-700">
                <span className="font-normal ml-3 block truncate">Jobs</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
