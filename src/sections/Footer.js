import { FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
const Footer = () => {
  return (
    <section className="px-[2rem] notebook:px-[8rem] big:px-[10rem] py-[1.5rem] notebook:py-[2rem] bg-black flex flex-col notebook:flex-row justify-between items-center notebook:items-end">
      <div className="text-[.7rem] notebook:text-[1rem] full:text-[1.3rem] p-[1rem] text-white font-bold border-[#00F000] border-b-2 mb-[1rem]">
        Einax LLC
        <br />
        10450 NW 33rd Street
        <br />
        Doral, Florida 33172
      </div>

      <div className="text-[.6rem] notebook:text-[1rem] full:text-[1.3rem] text-white font-bold ">
        <div className=" text-[.9rem] notebook:text-[1.2rem] full:text-[1.7rem] mb-[1rem]  items-start">
          <a
            href="google.com"
            className="flex flex-row mb-[1rem] items-center hover:text-[#00F000] duration-300"
          >
            <FiMail />{" "}
            <a href="mailto:info@einax.us" className="ml-[1rem]">
              info@einax.us
            </a>
          </a>

          <a
            href="emailto:google.com"
            className="flex flex-row items-center hover:text-[#00F000] duration-300"
          >
            <FaPhone /> <p className="ml-[1rem]"> +1(305)4973070</p>
          </a>
        </div>

        <p className="mt-[2rem]">
        Einax © 2023. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
