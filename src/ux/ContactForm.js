import { useRef, useState } from "react";

const ContactForm = () => {
  const nameRef = useRef();
  const phoneRef = useRef();
  const textRef = useRef();

  const [textSent, setTextSent] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredPhone = phoneRef.current.value;
    const enteredText = textRef.current.value;

    try {
      const response = await fetch(
        "https://einax-88881-default-rtdb.firebaseio.com///contact.json",
        {
          method: "POST",
          body: JSON.stringify({
            name: enteredName,
            phone: enteredPhone,
            text: enteredText,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);

      if (response.ok) {
        setTextSent(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const inputClasses =
    "bg-white placeholder:text-black placeholder:opacity-80 placeholder:font-semibold hover:text-black border-b-2 border-[#00F000]  p-2 h-[30px] desktop:h-[2.3rem] full:h-[3.2rem] desktop:text-[1rem] big:text-[1.3rem] full:text-[2rem] my-[.5rem] big:my-[1rem] ";

  const textAreaClasses =
    "bg-white placeholder:text-black placeholder:opacity-80 placeholder:font-semibold hover:text-black border-b-2 border-[#00F000]  p-2 h-[4rem] desktop:h-[6rem] full:h-[10rem]  desktop:text-[1.1rem] big:text-[1.3rem] full:text-[2rem] my-[.5rem] big:my-[1rem]";

  return (
    <article className=" w-full ">
      <form
        onSubmit={submitHandler}
        className="flex flex-col notebook:w-2/3 desktop:w-1/2  mx-auto"
      >
        <input
          type="text"
          placeholder="name"
          ref={nameRef}
          className={inputClasses}
        />

        <input
          type="number"
          placeholder="phone"
          ref={phoneRef}
          className={inputClasses}
        />

        <textarea
          ref={textRef}
          placeholder="your message"
          className={textAreaClasses}
        />

        <button className=" my-[.5rem] notebook:my-[1rem] big:my-[1.5rem]  duration-300 text-[.8rem] notebook:text-[1rem] full:text-[1.5rem] mx-auto cursor-pointer p-[.2rem] notebook:p-[.5rem] bg-[#00F000] rounded-lg w-1/2 notebook:w-[40%] desktop:w-[50%] full:w-[50%] text-center font-bold ">
          contact us
        </button>
      </form>

      {textSent && (
        <p className="text-center text-black font-light">
          {" "}
          we received your message. we will be getting in touch soon!{" "}
        </p>
      )}
    </article>
  );
};

export default ContactForm;
