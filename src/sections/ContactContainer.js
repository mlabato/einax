import ContactForm from "../ux/ContactForm"

const ContactContainer = () => {
  return (
    <article id="contact" className="  py-[4rem] notebook:py-[6rem] px-[5rem] notebook:px-[6rem] big:px-[10rem] full:px-[12rem]  notebook:pb-[6rem]  flex flex-col notebook:flex-row    justify-center notebook:justify-between ">
      <div className="font-bold pb-[1.5rem] notebook:pb-0   text-[2rem] notebook:text-[3rem] full:text-[5rem] notebook:w-1/2   ">contact us</div>
      
       

          <ContactForm />
 

        
      
    </article>
  );
};

export default ContactContainer;
