import { useState, useEffect } from "react";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { AiOutlineClose } from "react-icons/ai";

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

//   const [showNav, setShowNav] = useState(false);

  //   const navbarHandler = (e) => {
  //     e.preventDefault();
  //     setShowNav(!showNav);
  //   };

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
          className="px-[1rem] hover:font-bold hover:text-[#00F000]"
        >
          {title.title}
        </a>
      </li>
    );
  });

  return (
    <section className="relative ">
      <article
        className={`fixed  ${
          visible ? "h-[6rem]" : "h-[4rem]"
        } px-[10rem] bg-white w-full ease-out duration-300 flex flex-row items-center justify-between `}
      >
        <img src="/logo.svg" alt="" className="w-[10rem]" />

        <ul className="flex flex-row px-[2rem]">{mappedTitles}</ul>
      </article>
    </section>
  );
};

export default Navbar;
