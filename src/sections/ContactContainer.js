import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const ContactContainer = () => {
  return (
    <article id="contact" className=" mx-auto notebook:px-[8rem] pt-[4rem]  flex flex-col notebook:flex-row  items-center notebook:items-start justify-center notebook:justify-between ">
      <div className="font-bold text-[2rem] notebook:text-[3.5rem]  ">contact us</div>
      <div className="text-[1.1rem] notebook:ml-[8rem] ">
        <div className="py-[.5rem] border-black border-b-2 mb-[1rem]">
 
          <div className=" text-[.9rem] notebook:text-[1.5rem] mb-[2rem]  items-start">
            <a href="google.com" className="flex flex-row items-center hover:text-[#00F000]">
              <FiMail /> <p className="ml-[1rem]">contact@einax.com</p>
            </a>

            <a href="emailto:google.com" className="flex flex-row items-center hover:text-[#00F000]">
              <FaWhatsapp /> <p className="ml-[1rem]"> +1(323)567 8944</p>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ContactContainer;
