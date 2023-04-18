const IntroContainer = () => {
  return (
    <section className="pt-[3.5rem] notebook:pt-[5rem] full:pt-[8rem]">
      <article className="bg-intro h-[12rem] notebook:h-[25rem] full:h-[30rem] opacity-80">
        <div className="h-[12rem] notebook:h-[25rem] full:h-[30rem] w-[60%] notebook:w-1/2 bg-white opacity-90">
          <div className="py-[2.5rem] px-[1.25rem] notebook:p-[5rem] full:px-[12rem] full:py-[2.5rem] ">
            <p className="text-[2.5rem] notebook:text-[4.5rem]  big:text-[6rem] full:text-[8rem] font-bold "> go solar.</p>
            <p className="text-[.8rem] notebook:text-[1.2rem] big:text-[1.4rem] full:text-[2rem] ">
       
            enjoy the limitless solar technology at home.
            </p>

            <div className=" my-[.5rem] notebook:my-[1rem] big:my-[1.5rem] hover:shadow-lg duration-300 text-[.8rem] notebook:text-[1.25rem] full:text-[2rem] mx-auto p-[.25rem] notebook:p-[.75rem] bg-[#00F000] rounded-lg w-1/2 notebook:w-[40%] text-center font-bold ">
              <a href="mailto:xxx@hotmail.com">contact us</a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default IntroContainer;
