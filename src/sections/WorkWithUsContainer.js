const WorkWithUsContainer = () => {


    const logoClasses = "pb-[2rem] notebook:pb-0 w-[8rem] notebook:w-[10rem] desktop:w-[12rem] big:w-[13rem] full:w-[16rem]  mx-auto"
  return (
    <article className="bg-black mt-[4rem] py-[2rem] notebook:py-[4rem] desktop:py-[5rem] full:py-[7rem] px-[5rem] big:px-[10rem] full:px-[12rem]  ">
        <div className=" text-white font-semibold text-[1.5rem] notebook:text-[2rem] desktop:text-[2.5rem] big:text-[2.5rem] full:text-[3.5rem] underline decoration-[#00F000] mx-auto  text-center mb-[1rem] ">solar partners</div>
      <div className="flex flex-col notebook:flex-row ">
        <img src="/img/bsolar-logo.svg" alt="" className={logoClasses} />
        <img src="/img/solar-construction-logo.svg" alt="" className={logoClasses} />
        <img src="/img/focco-logo.svg" alt="" className={logoClasses} />
      </div>
    </article>
  );
};

export default WorkWithUsContainer;
