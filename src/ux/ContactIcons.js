import { FaWhatsapp } from "react-icons/fa";


const ContactIcons = () => {
    return(
        <article className=" fixed text-[2.5rem] notebook:text-[3rem]  right-10 bottom-10 text-[#00F000] ">
          <a href="www.google.com" alt="" className="hover:text-[2.6rem] notebook:hover:text-[3.1rem] ease-in-out duration-500 absolute bottom-[1rem] -right-[2rem]  notebook:right-[.25rem]"><FaWhatsapp className="my-[1rem]"/></a>  
        
        </article>
    )
}

export default ContactIcons;