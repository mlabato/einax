import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const [showNav, setShowNav] = useState(false);

  const navbarHandler = (e) => {
    e.preventDefault();
    setShowNav(!showNav);
  };

  const titles = [
    {
      title: "why solar?",
      link: "why-solar",
    },
    {
      title: "services",
      link: "services",
    },
    {
      title: "contact",
      link: "contact",
    },
  ];

  const mappedTitles = titles.map((title, i) => {
    return (
      <li>
        <a
          href={"#" + title.link}
          className="px-[1rem] text-[1.25rem] full:text-[2rem] font-bold hover:text-[#00F000] duration-300"
        >
          {title.title}
        </a>
      </li>
    );
  });

  return (
    <section className=" ">
      <article
        className={`fixed  ${
          visible
            ? "h-[3.5rem] notebook:h-[5rem] full:h-[8rem]"
            : "h-[2.5rem] notebook:h-[3rem] full:h-[6rem]"
        } px-[4rem] notebook:px-[6rem] big:px-[10rem] bg-white w-full ease-out duration-300 flex flex-row items-center justify-between z-10`}
      >
        <img src="/logo.svg" alt="" className="w-[4rem] notebook:w-[8rem] full:w-[12rem]" />

        <ul className="hidden notebook:flex flex-row px-[2rem]">
          {mappedTitles}
        </ul>
        <RxHamburgerMenu
          className="notebook:hidden text-black text-[1.5rem]"
          onClick={navbarHandler}
        />
      </article>
      <article
        className={
          !showNav
            ? "fixed left-0 right-0 min-h-screen px--4- pt-8 space-y-4 bg-white text-black transform transition duration-300 translate-x-full"
            : "fixed left-0 right-0 min-h-screen px--4- pt-8 space-y-4 bg-white text-black transform transition duration-300 translate-x-0 z-10"
        }
      >
        <AiOutlineClose
          onClick={navbarHandler}
          className="text-[2rem] text-right  my-[2rem] font-bold text-gray-500 w-full "
        />

        <ul className="py-[5rem] text-center flex flex-col justify-center text-[1.5rem] font-light ">
          {mappedTitles}

          <img
            src="/logo.svg"
            alt=""
            className="w-[4rem] mt-[10rem] mx-auto "
          />
        </ul>
      </article>
    </section>
  );
};

export default Navbar;
