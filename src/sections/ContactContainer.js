import { FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const ContactContainer = () => {
  return (
    <article id="contact" className="  py-[4rem] notebook:py-[6rem] px-[5rem] notebook:px-[6rem] big:px-[10rem] full:px-[12rem]  notebook:pb-[6rem]  flex flex-col notebook:flex-row    justify-center notebook:justify-between ">
      <div className="font-bold pb-[1.5rem] notebook:pb-0   text-[2rem] notebook:text-[3.5rem] full:text-[5rem] notebook:w-1/2   ">contact us</div>
      <div className="text-[1.1rem] notebook:ml-[8rem] ">
        <div className="py-[.5rem] border-[#00F000] border-b-2 mb-[1rem]">
 
          <div className=" text-[.9rem] notebook:text-[1.5rem] full:text-[2rem] mb-[1rem]  items-start">
            <a href="google.com" className="flex flex-row mb-[1rem] items-center hover:text-[#00F000] duration-300">
              <FiMail /> <a href="mailto:info@einax.us" className="ml-[1rem]">info@einax.us</a>
            </a>

            <a href="emailto:google.com" className="flex flex-row items-center hover:text-[#00F000] duration-300">
              <FaPhone/> <p className="ml-[1rem]"> +1(305)4973070</p>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ContactContainer;
