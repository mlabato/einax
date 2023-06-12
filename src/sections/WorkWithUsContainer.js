const WorkWithUsContainer = () => {


    const logoClasses = "pb-[2rem] notebook:pb-0 w-[10rem] big:w-[14rem] full:w-[16rem]  mx-auto"
  return (
    <article className="bg-black mt-[4rem] py-[2rem] notebook:py-[4rem] px-[5rem] big:px-[10rem] full:px-[12rem]  ">
        <div className=" text-white font-semibold tex notebook:text-[1.5rem] border-b-2 border-[#00F000] mx-auto w-[45%] notebook:w-[25%] text-center mb-[1rem] ">solar partners</div>
      <div className="flex flex-col notebook:flex-row ">
        <img src="/img/bsolar-logo.svg" alt="" className={logoClasses} />
        <img src="/img/solar-construction-logo.svg" alt="" className={logoClasses} />
        <img src="/img/focco-logo.svg" alt="" className={logoClasses} />
      </div>
    </article>
  );
};

export default WorkWithUsContainer;
