import { useState } from "react";

const DropdownInfo = (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="relative inline-block text-left py-[1rem]">
      <div >
        <div
          type="button"
          onClick={clickHandler}
          className=" w-full flex flex-row justify-between text-[0.9rem] desktop:text-[1.2rem] full:text-[1.8rem] gap-x-[2rem] bg-white px-[.75rem] py-[.5rem]  font-semibold text-gray-900  border-b-2 border-black   cursor-pointer"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {props.title}
          <svg
            
            className="-mr-1 h-5 w-5 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>

      {isClicked && (
        <div
          className="absolute right-0 z-10 w-full mt-2  origin-top-right  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div className="py-1" role="none">
            <p
              className="text-gray-700 block px-4 py-2 text-[.8rem] desktop:text-[1rem] full:text-[1.2rem] "
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
            >
              {props.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownInfo;
