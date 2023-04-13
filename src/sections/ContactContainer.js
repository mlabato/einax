import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const ContactContainer = () => {
  return (
    <article id="contact" className="px-[8rem] py-[3rem] flex flex-row  items-start justify-between notebook:mx-[8rem] desktop:mx-[10rem] ">
      <div className="font-bold text-[3.5rem] notebook:w-1/2 ">contact us</div>
      <div className="w-1/2 text-[1.1rem] notebook:ml-[8rem] ">
        <div className="py-[.5rem] border-black border-b-2 mb-[1rem]">
 
          <div className="text-[1.5rem] mb-[2rem]  items-start">
            <a href="google.com" className="flex flex-row items-center hover:text-[#00F000]">
              <FaWhatsapp /> <p className="ml-[1rem]">contact@einax.com</p>
            </a>

            <a href="emailto:google.com" className="flex flex-row items-center hover:text-[#00F000]">
              <FiMail /> <p className="ml-[1rem]"> +1(323)567 8944</p>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ContactContainer;
